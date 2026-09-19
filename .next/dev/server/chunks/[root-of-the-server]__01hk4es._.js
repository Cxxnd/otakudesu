module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/api/health/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shared/env.ts [app-route] (ecmascript)");
;
;
const dynamic = "force-dynamic";
async function GET() {
    const sources = {
        anime: Boolean(process.env.ANIME_BASE_URL || process.env.BASEURL),
        comic: true,
        movie: Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTmdbToken"])()),
        tv: true
    };
    const degraded = Object.values(sources).some((configured)=>!configured);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: degraded ? "degraded" : "ok",
        sources,
        timestamp: new Date().toISOString()
    }, {
        headers: {
            "Cache-Control": "no-store"
        }
    });
}
}),
"[project]/src/lib/shared/env.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertSlug",
    ()=>assertSlug,
    "getAnimeBaseUrl",
    ()=>getAnimeBaseUrl,
    "getAnimeChanUrl",
    ()=>getAnimeChanUrl,
    "getAnimeThemesUrl",
    ()=>getAnimeThemesUrl,
    "getComicBaseUrl",
    ()=>getComicBaseUrl,
    "getEnabledEmbedProviders",
    ()=>getEnabledEmbedProviders,
    "getIptvApiUrl",
    ()=>getIptvApiUrl,
    "getMovieBoxApiUrl",
    ()=>getMovieBoxApiUrl,
    "getNewsFeedUrl",
    ()=>getNewsFeedUrl,
    "getRadioApiUrl",
    ()=>getRadioApiUrl,
    "getShinigamiPortalUrl",
    ()=>getShinigamiPortalUrl,
    "getSiteUrl",
    ()=>getSiteUrl,
    "getTmdbApiUrl",
    ()=>getTmdbApiUrl,
    "getTmdbLanguage",
    ()=>getTmdbLanguage,
    "getTmdbToken",
    ()=>getTmdbToken,
    "getTraceMoeUrl",
    ()=>getTraceMoeUrl,
    "getTvCountry",
    ()=>getTvCountry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shared/errors.ts [app-route] (ecmascript)");
;
const SLUG_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/;
/** Read an env var that must be an absolute http(s) URL. Trailing slash stripped. */ function readUrl(names, label, fallback) {
    let raw;
    for (const name of names){
        const value = process.env[name]?.trim();
        if (value) {
            raw = value;
            break;
        }
    }
    const value = raw ?? fallback;
    if (!value) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConfigError"](`${names[0]} is required. Set it in .env or the container environment (${label}).`);
    }
    let parsed;
    try {
        parsed = new URL(value);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConfigError"](`${names[0]} must be a valid absolute URL (e.g. https://example.com/).`);
    }
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConfigError"](`${names[0]} must use http or https.`);
    }
    return value.replace(/\/+$/, "");
}
function getAnimeBaseUrl() {
    return readUrl([
        "ANIME_BASE_URL",
        "BASEURL"
    ], "anime source");
}
function getComicBaseUrl() {
    return readUrl([
        "COMIC_BASE_URL"
    ], "comic source", "https://kiryuuid.net");
}
function getIptvApiUrl() {
    return readUrl([
        "IPTV_API_URL"
    ], "live TV index", "https://iptv-org.github.io/api");
}
function getRadioApiUrl() {
    return readUrl([
        "RADIO_API_URL"
    ], "radio index", "https://de1.api.radio-browser.info");
}
function getNewsFeedUrl() {
    return readUrl([
        "NEWS_FEED_URL"
    ], "news feed", "https://www.animenewsnetwork.com/all/rss.xml?ann-edition=w");
}
function getAnimeChanUrl() {
    return readUrl([
        "ANIMECHAN_API_URL"
    ], "quotes source", "https://api.animechan.io/v1");
}
function getTraceMoeUrl() {
    return readUrl([
        "TRACEMOE_API_URL"
    ], "scene search source", "https://api.trace.moe");
}
function getSiteUrl() {
    return readUrl([
        "SITE_URL",
        "NEXT_PUBLIC_SITE_URL"
    ], "public site", "https://otakudesu.natee.my.id");
}
function getAnimeThemesUrl() {
    return readUrl([
        "ANIMETHEMES_API_URL"
    ], "theme song source", "https://api.animethemes.moe");
}
function getShinigamiPortalUrl() {
    return readUrl([
        "SHINIGAMI_PORTAL_URL"
    ], "shinigami portal", "https://shinigami.to");
}
function getTvCountry() {
    return (process.env.TV_COUNTRY?.trim() || "ID").toUpperCase();
}
function getTmdbToken() {
    return process.env.TMDB_ACCESS_TOKEN?.trim() || null;
}
function getTmdbApiUrl() {
    return readUrl([
        "TMDB_API_URL"
    ], "TMDB API", "https://api.themoviedb.org/3");
}
function getTmdbLanguage() {
    return process.env.TMDB_LANGUAGE?.trim() || "id-ID";
}
function getMovieBoxApiUrl() {
    const value = process.env.MOVIEBOX_API_URL?.trim();
    if (!value) return null;
    try {
        const parsed = new URL(value);
        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
    } catch  {
        return null;
    }
    return value.replace(/\/+$/, "");
}
function getEnabledEmbedProviders() {
    const raw = process.env.MOVIE_EMBED_PROVIDERS?.trim();
    if (!raw) return [
        "2embed",
        "videasy",
        "vidsrc",
        "vidsrccc",
        "vidlink",
        "embedsu",
        "autoembed"
    ];
    return raw.split(",").map((entry)=>entry.trim().toLowerCase()).filter(Boolean);
}
function assertSlug(value, label = "slug") {
    const slug = value.trim();
    if (!slug || slug.includes("..") || slug.includes("/") || !SLUG_PATTERN.test(slug)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"](`Invalid ${label}`);
    }
    return slug;
}
}),
"[project]/src/lib/shared/errors.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Domain errors. `apiHandler` is the only place that maps these to HTTP status
 * codes, so route handlers never build error responses themselves.
 */ __turbopack_context__.s([
    "ConfigError",
    ()=>ConfigError,
    "NotFoundError",
    ()=>NotFoundError,
    "UpstreamError",
    ()=>UpstreamError,
    "ValidationError",
    ()=>ValidationError
]);
class ValidationError extends Error {
    status = 400;
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
class NotFoundError extends Error {
    status = 404;
    constructor(message = "Not Found"){
        super(message);
        this.name = "NotFoundError";
    }
}
class ConfigError extends Error {
    status = 500;
    constructor(message){
        super(message);
        this.name = "ConfigError";
    }
}
class UpstreamError extends Error {
    status;
    upstreamStatus;
    constructor(message, options = {}){
        super(message);
        this.name = "UpstreamError";
        this.status = options.status ?? 502;
        this.upstreamStatus = options.upstreamStatus;
    }
    static timeout(url) {
        return new UpstreamError(`Upstream request timed out: ${safeLabel(url)}`, {
            status: 504
        });
    }
    static failed(url, upstreamStatus) {
        if (upstreamStatus === 404) {
            return new NotFoundError();
        }
        return new UpstreamError(`Upstream request failed: ${safeLabel(url)}`, {
            status: 502,
            upstreamStatus
        });
    }
}
/** Only expose the upstream origin + path, never query strings or credentials. */ function safeLabel(url) {
    try {
        const parsed = new URL(url);
        return `${parsed.host}${parsed.pathname}`;
    } catch  {
        return "unknown";
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01hk4es._.js.map