import { load } from "cheerio";
import { getAnimeBaseUrl } from "@/lib/shared/env";
import { UpstreamError, ValidationError } from "@/lib/shared/errors";
import { url as safeUrl } from "@/lib/shared/sanitize";

/**
 * Resolve one mirror token into a playable iframe URL.
 *
 * All upstream calls now go through ScraperAPI to bypass Cloudflare's
 * IP-based blocking on Vercel.
 */

const NONCE_ACTION = "aa1208d27f29ca340c92c66d1926f13f";
const MIRROR_ACTION = "2a3505c93b0035d3f455df82bf976b84";

// ─────────────────────────────────────────────────────────────
// SCRAPERAPI CONFIG
// ─────────────────────────────────────────────────────────────
const SCRAPER_API_KEY = process.env.SCRAPER_API_KEY?.trim();
const SCRAPER_API_BASE = "https://api.scraperapi.com";

/**
 * Bangun URL ScraperAPI untuk request GET.
 * ScraperAPI melakukan GET ke target dan mengembalikan body target.
 */
function buildScraperGetUrl(targetUrl: string): string {
    if (!SCRAPER_API_KEY) return targetUrl;
    const url = new URL(SCRAPER_API_BASE);
    url.searchParams.set("api_key", SCRAPER_API_KEY);
    url.searchParams.set("url", targetUrl);
    return url.toString();
}

/**
 * Untuk POST ke admin-ajax.php, ScraperAPI menerima payload target lewat
 * parameter `method=POST` + body form dikirim ke ScraperAPI (bukan ke target).
 *
 * Cara kerja:
 *  1. ScraperAPI menerima POST dari kita
 *  2. ScraperAPI forward ke `url` target dengan body yang kita kirim
 *
 * Dokumentasi: https://docs.scraperapi.com/making-requests/post-requests
 */
function buildScraperPostUrl(targetUrl: string): string {
    if (!SCRAPER_API_KEY) return targetUrl;
    const url = new URL(SCRAPER_API_BASE);
    url.searchParams.set("api_key", SCRAPER_API_KEY);
    url.searchParams.set("url", targetUrl);
    url.searchParams.set("method", "POST");
    return url.toString();
}

/** Nonces stay valid for a while; re-fetching one per mirror click is wasteful. */
let nonceCache: { value: string; at: number } | null = null;
const NONCE_TTL_MS = 10 * 60 * 1000;

type MirrorPayload = { id: number; i: number; q: string };

function decodeToken(content: string): MirrorPayload {
    let parsed: unknown;
    try {
        parsed = JSON.parse(Buffer.from(content, "base64").toString("utf8"));
    } catch {
        throw new ValidationError("Invalid mirror token");
    }

    const payload = parsed as Partial<MirrorPayload>;
    if (
        typeof payload?.id !== "number" ||
        !Number.isInteger(payload.id) ||
        typeof payload.i !== "number" ||
        !Number.isInteger(payload.i) ||
        typeof payload.q !== "string" ||
        payload.q.length > 16
    ) {
        throw new ValidationError("Invalid mirror token");
    }

    return { id: payload.id, i: payload.i, q: payload.q };
}

// ─────────────────────────────────────────────────────────────
// AJAX via ScraperAPI
// ─────────────────────────────────────────────────────────────
async function ajax(baseUrl: string, body: Record<string, string | number>) {
    const targetUrl = `${baseUrl}/wp-admin/admin-ajax.php`;
    const proxyUrl = buildScraperPostUrl(targetUrl);

    const formBody = new URLSearchParams(
        Object.fromEntries(
            Object.entries(body).map(([k, v]) => [k, String(v)]),
        ),
    );

    const response = await fetch(proxyUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: formBody.toString(),
        cache: "no-store",
        signal: AbortSignal.timeout(25_000),
    });

    if (!response.ok) {
        const preview = await response.text().catch(() => "");
        console.error(
            `[MIRROR AJAX BLOCKED] ${targetUrl} → ${response.status}`,
            preview.slice(0, 300),
        );
        throw UpstreamError.failed(baseUrl, response.status);
    }

    return (await response.json()) as { data?: unknown };
}

async function getNonce(baseUrl: string): Promise<string> {
    const now = Date.now();
    if (nonceCache && now - nonceCache.at < NONCE_TTL_MS)
        return nonceCache.value;

    const result = await ajax(baseUrl, { action: NONCE_ACTION });
    const nonce = typeof result.data === "string" ? result.data : null;
    if (!nonce) throw new UpstreamError("Could not obtain a mirror nonce");

    nonceCache = { value: nonce, at: now };
    return nonce;
}

/**
 * Can this URL be shown in an iframe on a site that is not the upstream?
 *
 * CATATAN: isEmbeddable() sengaja TIDAK pakai ScraperAPI karena:
 *  1. Cuma butuh header, tidak butuh body → hemat credit
 *  2. ScraperAPI kadang mengubah/menghapus header CSP & XFO
 *  3. Kalau gagal, fallback return true (biarkan browser coba)
 */
async function isEmbeddable(target: string): Promise<boolean> {
    try {
        const response = await fetch(target, {
            method: "GET",
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                Accept: "text/html,*/*",
            },
            redirect: "follow",
            cache: "no-store",
            signal: AbortSignal.timeout(5_000),
        });
        await response.body?.cancel();

        const xfo =
            response.headers.get("x-frame-options")?.toLowerCase() ?? "";
        if (xfo.includes("deny") || xfo.includes("sameorigin")) return false;

        const csp = response.headers.get("content-security-policy") ?? "";
        const directive = /frame-ancestors([^;]*)/i
            .exec(csp)?.[1]
            ?.toLowerCase();
        if (!directive) return true;

        return directive.trim().split(/\s+/).includes("*");
    } catch {
        return true;
    }
}

const mirror = async (
    content: string,
): Promise<{ url: string; embeddable: boolean } | null> => {
    const baseUrl = getAnimeBaseUrl();
    const payload = decodeToken(content);

    const resolve = async (nonce: string) => {
        const result = await ajax(baseUrl, {
            ...payload,
            nonce,
            action: MIRROR_ACTION,
        });
        return typeof result.data === "string" ? result.data : null;
    };

    let encoded = await resolve(await getNonce(baseUrl));

    // An expired nonce comes back as a non-string payload; refresh once and retry.
    if (!encoded) {
        nonceCache = null;
        encoded = await resolve(await getNonce(baseUrl));
    }
    if (!encoded) return null;

    const html = Buffer.from(encoded, "base64").toString("utf8");
    const src = load(html)("iframe").attr("src");
    const url = safeUrl(src);
    if (!url) return null;

    return { url, embeddable: await isEmbeddable(url) };
};

export default mirror;

/** Test seam. */
export function __resetNonce() {
    nonceCache = null;
}
