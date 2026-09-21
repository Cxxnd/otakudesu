import { UpstreamError } from "@/lib/shared/errors";

/**
 * Vercel Hobby mematikan function di detik ke-10.
 * Set 8s supaya kita masih sempat melempar error yang rapi
 * sebelum Vercel memotong paksa.
 */
const DEFAULT_TIMEOUT_MS = 8_000;

/** Delay dasar antar retry (ms). Naik linear tiap percobaan. */
const RETRY_BASE_DELAY_MS = 400;

const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_3_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
];

function getRandomUserAgent() {
    return userAgents[Math.floor(Math.random() * userAgents.length)];
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Header yang menyerupai browser Chrome asli.
 *
 * Cloudflare dan WAF lain tidak hanya memeriksa User-Agent, tetapi juga
 * header `Sec-Ch-Ua-*`, `Sec-Fetch-*`, dan `Accept-Encoding`. Tanpa ini,
 * request dari IP data center seperti Vercel hampir pasti dianggap bot.
 */
function buildBrowserHeaders(
    extra: Record<string, string> = {},
): Record<string, string> {
    return {
        "User-Agent": getRandomUserAgent(),
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        "Sec-Ch-Ua":
            '"Chromium";v="141", "Not?A_Brand";v="24", "Google Chrome";v="141"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": '"Windows"',
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        Connection: "keep-alive",
        ...extra,
    };
}

export type FetchOptions = {
    /** Seconds to keep the response in the Next.js Data Cache. `0` disables caching. */
    revalidate?: number;
    /** Cache tags for on-demand invalidation. */
    tags?: string[];
    headers?: Record<string, string>;
    timeoutMs?: number;
    /** Retries on 5xx / 429 / network failure. Defaults to 2 (3 attempts total). */
    retries?: number;
    signal?: AbortSignal;
    /** Defaults to GET. A body only makes sense with POST/PUT. */
    method?: "GET" | "POST" | "PUT";
    body?: BodyInit | Uint8Array;
};

/**
 * Single I/O boundary untuk seluruh API.
 *
 * Memakai `fetch` bawaan (bukan axios) supaya Next.js Data Cache dan
 * `revalidate` tetap berlaku — itulah yang membuat respons upstream
 * bisa di-cache sama sekali.
 */
async function request(
    url: string,
    options: FetchOptions = {},
): Promise<Response> {
    const {
        revalidate,
        tags,
        headers = {},
        timeoutMs = DEFAULT_TIMEOUT_MS,
        retries = 2,
        signal,
        method,
        body,
    } = options;

    const init: RequestInit & {
        next?: { revalidate?: number | false; tags?: string[] };
    } = {
        headers: buildBrowserHeaders(headers),
        redirect: "follow",
        ...(method ? { method } : {}),
        ...(body !== undefined ? { body: body as BodyInit } : {}),
    };

    if (revalidate === 0) {
        init.cache = "no-store";
    } else if (revalidate !== undefined || tags?.length) {
        init.next = {};

        if (revalidate !== undefined) {
            init.next.revalidate = revalidate;
        }

        if (tags?.length) {
            init.next.tags = tags;
        }
    }

    let lastError: unknown;

    for (let attempt = 0; attempt <= retries; attempt++) {
        const timeoutSignal = AbortSignal.timeout(timeoutMs);
        const composed = signal
            ? AbortSignal.any([signal, timeoutSignal])
            : timeoutSignal;

        try {
            const response = await fetch(url, {
                ...init,
                signal: composed,
            });

            console.log(
                `[UPSTREAM] ${url} → ${response.status} ${response.statusText} | attempt=${attempt + 1}`,
            );

            // 5xx dan 429 layak dicoba ulang.
            if (
                (response.status >= 500 || response.status === 429) &&
                attempt < retries
            ) {
                lastError = UpstreamError.failed(url, response.status);
                await sleep(RETRY_BASE_DELAY_MS * (attempt + 1));
                continue;
            }

            if (!response.ok) {
                // Log detail supaya kita tahu ini Cloudflare, WAF, atau
                // sekadar 404 biasa.
                const preview = await response
                    .clone()
                    .text()
                    .catch(() => "");

                console.error(
                    `[UPSTREAM BLOCKED] ${url} → ${response.status} ${response.statusText}`,
                );
                console.error(
                    `[UPSTREAM BLOCKED HEADERS]`,
                    JSON.stringify(Object.fromEntries(response.headers)),
                );
                console.error(`[UPSTREAM BLOCKED BODY]`, preview.slice(0, 400));

                throw UpstreamError.failed(url, response.status);
            }

            return response;
        } catch (error) {
            if (error instanceof UpstreamError) {
                throw error;
            }

            console.error(
                `[UPSTREAM ERROR] ${url}`,
                error instanceof Error
                    ? `${error.name}: ${error.message}`
                    : error,
            );

            lastError = asUpstreamFailure(url, error);

            if (attempt >= retries) {
                break;
            }

            await sleep(RETRY_BASE_DELAY_MS * (attempt + 1));
        }
    }

    if (lastError instanceof UpstreamError) {
        throw lastError;
    }

    throw asUpstreamFailure(url, lastError);
}

function asUpstreamFailure(url: string, error: unknown): UpstreamError {
    if (error instanceof UpstreamError) {
        return error;
    }

    if (
        error instanceof Error &&
        (error.name === "TimeoutError" || error.name === "AbortError")
    ) {
        return UpstreamError.timeout(url);
    }

    const message = error instanceof Error ? error.message : String(error);

    console.error(`[UPSTREAM FAILURE] ${url}: ${message}`);

    return new UpstreamError(`Upstream request failed: ${url} — ${message}`);
}

/** Fetch upstream HTML. */
export async function fetchHtml(
    url: string,
    options: FetchOptions = {},
): Promise<string> {
    const response = await request(url, options);
    try {
        return await response.text();
    } catch (error) {
        throw asUpstreamFailure(url, error);
    }
}

/** Fetch and parse an upstream JSON document. */
export async function fetchJson<T>(
    url: string,
    options: FetchOptions = {},
): Promise<T> {
    const response = await request(url, {
        ...options,
        headers: {
            Accept: "application/json, text/plain, */*",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            ...options.headers,
        },
    });
    try {
        return (await response.json()) as T;
    } catch (error) {
        throw asUpstreamFailure(url, error);
    }
}

/** Escape hatch for callers that need the raw `Response` (e.g. the HLS proxy). */
export { request as fetchRaw };

/** Join a base URL with a path, tolerating slashes on either side. */
export function joinUrl(base: string, path: string): string {
    if (!path) return base;
    return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}
