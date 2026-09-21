import { UpstreamError } from "@/lib/shared/errors";

/**
 * Vercel Hobby mematikan function di detik ke-10.
 * ScraperAPI kadang butuh waktu lebih, jadi kita kasih 9s.
 */
const DEFAULT_TIMEOUT_MS = 9_000;

const RETRY_BASE_DELAY_MS = 500;

// ─────────────────────────────────────────────────────────────
// SCRAPERAPI CONFIG
// ─────────────────────────────────────────────────────────────
//
// Daftar di https://www.scraperapi.com → dapat API key.
// Set di .env lokal DAN di Vercel Environment Variables.
//
const SCRAPER_API_KEY = process.env.SCRAPER_API_KEY?.trim();
const SCRAPER_API_BASE = "https://api.scraperapi.com";

/**
 * Bungkus URL target menjadi URL ScraperAPI.
 * Jika SCRAPER_API_KEY kosong, fallback ke direct fetch (untuk lokal).
 */
function buildScraperUrl(targetUrl: string): string {
    if (!SCRAPER_API_KEY) {
        return targetUrl;
    }
    const url = new URL(SCRAPER_API_BASE);
    url.searchParams.set("api_key", SCRAPER_API_KEY);
    url.searchParams.set("url", targetUrl);
    return url.toString();
}

export type FetchOptions = {
    revalidate?: number;
    tags?: string[];
    headers?: Record<string, string>;
    timeoutMs?: number;
    retries?: number;
    signal?: AbortSignal;
    method?: "GET" | "POST" | "PUT";
    body?: BodyInit | Uint8Array;
};

/**
 * Single I/O boundary untuk seluruh API.
 * Sekarang semua request ke Otakudesu otomatis lewat ScraperAPI.
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

    // Bungkus URL dengan ScraperAPI
    const finalUrl = buildScraperUrl(url);

    const init: RequestInit & {
        next?: { revalidate?: number | false; tags?: string[] };
    } = {
        // ScraperAPI tidak butuh header browser, tapi kita kirim minimal saja.
        headers: {
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            ...headers,
        },
        redirect: "follow",
        ...(method ? { method } : {}),
        ...(body !== undefined ? { body: body as BodyInit } : {}),
    };

    if (revalidate === 0) {
        init.cache = "no-store";
    } else if (revalidate !== undefined || tags?.length) {
        init.next = {};
        if (revalidate !== undefined) init.next.revalidate = revalidate;
        if (tags?.length) init.next.tags = tags;
    }

    let lastError: unknown;

    for (let attempt = 0; attempt <= retries; attempt++) {
        const timeoutSignal = AbortSignal.timeout(timeoutMs);
        const composed = signal
            ? AbortSignal.any([signal, timeoutSignal])
            : timeoutSignal;

        try {
            const response = await fetch(finalUrl, {
                ...init,
                signal: composed,
            });

            console.log(
                `[UPSTREAM] ${url} → ${response.status} ${response.statusText} | attempt=${attempt + 1}${SCRAPER_API_KEY ? " (via ScraperAPI)" : ""}`,
            );

            // ScraperAPI sendiri bisa return 5xx kalau gagal scrape.
            if (
                (response.status >= 500 || response.status === 429) &&
                attempt < retries
            ) {
                lastError = UpstreamError.failed(url, response.status);
                await sleep(RETRY_BASE_DELAY_MS * (attempt + 1));
                continue;
            }

            if (!response.ok) {
                const preview = await response
                    .clone()
                    .text()
                    .catch(() => "");
                console.error(
                    `[UPSTREAM BLOCKED] ${url} → ${response.status} ${response.statusText}`,
                );
                console.error(`[UPSTREAM BLOCKED BODY]`, preview.slice(0, 400));
                throw UpstreamError.failed(url, response.status);
            }

            return response;
        } catch (error) {
            if (error instanceof UpstreamError) throw error;

            console.error(
                `[UPSTREAM ERROR] ${url}`,
                error instanceof Error
                    ? `${error.name}: ${error.message}`
                    : error,
            );

            lastError = asUpstreamFailure(url, error);

            if (attempt >= retries) break;
            await sleep(RETRY_BASE_DELAY_MS * (attempt + 1));
        }
    }

    if (lastError instanceof UpstreamError) throw lastError;
    throw asUpstreamFailure(url, lastError);
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function asUpstreamFailure(url: string, error: unknown): UpstreamError {
    if (error instanceof UpstreamError) return error;

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
            ...options.headers,
        },
    });
    try {
        return (await response.json()) as T;
    } catch (error) {
        throw asUpstreamFailure(url, error);
    }
}

export { request as fetchRaw };

export function joinUrl(base: string, path: string): string {
    if (!path) return base;
    return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}
