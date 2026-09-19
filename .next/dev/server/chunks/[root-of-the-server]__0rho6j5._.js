module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/build/adapter/setup-node-env.external.js [external] (next/dist/build/adapter/setup-node-env.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/build/adapter/setup-node-env.external.js", () => require("next/dist/build/adapter/setup-node-env.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/server/lib/incremental-cache/memory-cache.external.js [external] (next/dist/server/lib/incremental-cache/memory-cache.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/memory-cache.external.js", () => require("next/dist/server/lib/incremental-cache/memory-cache.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/shared-cache-controls.external.js [external] (next/dist/server/lib/incremental-cache/shared-cache-controls.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js", () => require("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/router-utils/instrumentation-globals.external.js [external] (next/dist/server/lib/router-utils/instrumentation-globals.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/router-utils/instrumentation-globals.external.js", () => require("next/dist/server/lib/router-utils/instrumentation-globals.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/lib/shared/rateLimit.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * In-memory token bucket, keyed by client IP.
 *
 * This API is public and every request fans out to a third-party site, so an
 * unthrottled client can get the server's IP banned upstream. Deliberately
 * dependency-free and per-instance; swap the store for Redis if this ever runs
 * behind more than one replica.
 */ __turbopack_context__.s([
    "__resetRateLimit",
    ()=>__resetRateLimit,
    "checkRateLimit",
    ()=>checkRateLimit,
    "clientKey",
    ()=>clientKey,
    "rateLimitHeaders",
    ()=>rateLimitHeaders
]);
const WINDOW_MS = 60_000;
const MAX_REQUESTS = Number(process.env.RATE_LIMIT_PER_MINUTE ?? 120);
const MAX_TRACKED_CLIENTS = 10_000;
const buckets = new Map();
function checkRateLimit(key, now = Date.now()) {
    const refillRate = MAX_REQUESTS / WINDOW_MS;
    let bucket = buckets.get(key);
    if (!bucket) {
        // Cheap LRU-ish eviction: drop the oldest entry once the map gets large.
        if (buckets.size >= MAX_TRACKED_CLIENTS) {
            const oldest = buckets.keys().next();
            if (!oldest.done) buckets.delete(oldest.value);
        }
        bucket = {
            tokens: MAX_REQUESTS,
            updatedAt: now
        };
    } else {
        const elapsed = now - bucket.updatedAt;
        bucket.tokens = Math.min(MAX_REQUESTS, bucket.tokens + elapsed * refillRate);
        bucket.updatedAt = now;
        // Refresh insertion order so active clients are not evicted first.
        buckets.delete(key);
    }
    const allowed = bucket.tokens >= 1;
    if (allowed) bucket.tokens -= 1;
    buckets.set(key, bucket);
    const deficit = allowed ? 0 : 1 - bucket.tokens;
    const retryAfter = allowed ? 0 : Math.max(1, Math.ceil(deficit / refillRate / 1000));
    return {
        allowed,
        limit: MAX_REQUESTS,
        remaining: Math.max(0, Math.floor(bucket.tokens)),
        retryAfter,
        resetAt: now + retryAfter * 1000
    };
}
function clientKey(request) {
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded) {
        const first = forwarded.split(",")[0]?.trim();
        if (first) return first;
    }
    return request.headers.get("x-real-ip")?.trim() || "unknown";
}
function rateLimitHeaders(result) {
    const headers = {
        "RateLimit-Limit": String(result.limit),
        "RateLimit-Remaining": String(result.remaining),
        "RateLimit-Reset": String(Math.ceil((result.resetAt - Date.now()) / 1000))
    };
    if (!result.allowed) headers["Retry-After"] = String(result.retryAfter);
    return headers;
}
function __resetRateLimit() {
    buckets.clear();
}
}),
"[project]/src/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$rateLimit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shared/rateLimit.ts [middleware] (ecmascript)");
;
;
function proxy(request) {
    const { pathname } = request.nextUrl;
    // Health checks must never be throttled — the container probe depends on it.
    if (pathname === "/api/health") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$rateLimit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["checkRateLimit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$rateLimit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["clientKey"])(request));
    const headers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$rateLimit$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["rateLimitHeaders"])(result);
    if (!result.allowed) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Too Many Requests"
        }, {
            status: 429,
            headers: {
                ...headers,
                "Cache-Control": "no-store"
            }
        });
    }
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    for (const [key, value] of Object.entries(headers)){
        response.headers.set(key, value);
    }
    return response;
}
const config = {
    matcher: [
        "/api/:path*"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0rho6j5._.js.map