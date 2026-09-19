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
"[project]/src/app/api/openapi.json/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$openapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/openapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$publicOrigin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shared/publicOrigin.ts [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$openapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildOpenApiDocument"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shared$2f$publicOrigin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicOrigin"])(request)), {
        headers: {
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
        }
    });
}
}),
"[project]/src/lib/openapi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * OpenAPI description of the public API.
 *
 * The two Elysia services this project absorbed shipped Swagger UI; keeping a
 * machine-readable spec means external consumers did not lose that when the
 * services moved to Next.js route handlers.
 */ __turbopack_context__.s([
    "buildOpenApiDocument",
    ()=>buildOpenApiDocument,
    "operations",
    ()=>operations
]);
const OPERATIONS = [
    {
        path: "/api",
        summary: "Service index",
        tag: "Meta"
    },
    {
        path: "/api/health",
        summary: "Liveness probe and per-domain configuration status",
        tag: "Meta"
    },
    {
        path: "/api/v1/anime/home",
        summary: "Ongoing and completed anime from the homepage",
        tag: "Anime"
    },
    {
        path: "/api/v1/anime/list",
        summary: "A–Z anime directory",
        tag: "Anime"
    },
    {
        path: "/api/v1/anime/genres",
        summary: "All anime genres",
        tag: "Anime"
    },
    {
        path: "/api/v1/anime/genres/{slug}",
        summary: "Anime in a genre",
        tag: "Anime",
        params: [
            {
                name: "slug",
                in: "path",
                required: true,
                description: "Genre slug, e.g. `action`"
            },
            {
                name: "page",
                in: "query",
                description: "Page number, defaults to 1"
            }
        ]
    },
    {
        path: "/api/v1/anime/schedule",
        summary: "Weekly release schedule",
        tag: "Anime"
    },
    {
        path: "/api/v1/anime/search/{keyword}",
        summary: "Search anime by keyword",
        tag: "Anime",
        params: [
            {
                name: "keyword",
                in: "path",
                required: true,
                description: "URL-encoded search term"
            }
        ]
    },
    {
        path: "/api/v1/anime/ongoing/{page}",
        summary: "Paginated ongoing anime",
        tag: "Anime",
        params: [
            {
                name: "page",
                in: "path",
                required: true,
                description: "Page number"
            }
        ]
    },
    {
        path: "/api/v1/anime/complete/{page}",
        summary: "Paginated completed anime",
        tag: "Anime",
        params: [
            {
                name: "page",
                in: "path",
                required: true,
                description: "Page number"
            }
        ]
    },
    {
        path: "/api/v1/anime/detail/{slug}",
        summary: "Full anime detail, episodes and recommendations",
        tag: "Anime",
        params: [
            {
                name: "slug",
                in: "path",
                required: true,
                description: "Anime slug"
            }
        ]
    },
    {
        path: "/api/v1/anime/detail/{slug}/episodes",
        summary: "Episode list for an anime",
        tag: "Anime",
        params: [
            {
                name: "slug",
                in: "path",
                required: true,
                description: "Anime slug"
            }
        ]
    },
    {
        path: "/api/v1/anime/detail/{slug}/episodes/{episode}",
        summary: "One episode, resolved by episode number",
        tag: "Anime",
        params: [
            {
                name: "slug",
                in: "path",
                required: true,
                description: "Anime slug"
            },
            {
                name: "episode",
                in: "path",
                required: true,
                description: "Episode number"
            }
        ]
    },
    {
        path: "/api/v1/anime/episode/{slug}",
        summary: "One episode, resolved by episode slug",
        tag: "Anime",
        params: [
            {
                name: "slug",
                in: "path",
                required: true,
                description: "Episode slug"
            }
        ]
    },
    {
        path: "/api/v1/anime/batch/{slug}",
        summary: "Batch download links",
        tag: "Anime",
        params: [
            {
                name: "slug",
                in: "path",
                required: true,
                description: "Batch slug"
            }
        ]
    },
    {
        path: "/api/v1/anime/movie/{slug}",
        summary: "Anime movie stream and downloads",
        tag: "Anime",
        params: [
            {
                name: "slug",
                in: "path",
                required: true,
                description: "Anime slug"
            }
        ]
    },
    {
        path: "/api/v1/anime/muse",
        summary: "Official Muse Indonesia playlist matching an anime title, when one exists",
        tag: "Anime",
        params: [
            {
                name: "title",
                in: "query",
                required: true,
                description: "Anime title to match"
            }
        ]
    },
    {
        path: "/api/v1/comic/home",
        summary: "Popular, trending and latest comics and novels",
        tag: "Comic"
    },
    {
        path: "/api/v1/comic/{slug}",
        summary: "Comic detail with the full chapter list",
        tag: "Comic",
        params: [
            {
                name: "slug",
                in: "path",
                required: true,
                description: "Comic slug"
            }
        ]
    },
    {
        path: "/api/v1/comic/{slug}/chapter/{chapter}",
        summary: "Reader payload: ordered page images plus prev/next navigation",
        tag: "Comic",
        params: [
            {
                name: "slug",
                in: "path",
                required: true,
                description: "Comic slug"
            },
            {
                name: "chapter",
                in: "path",
                required: true,
                description: "Chapter *number*, not slug"
            }
        ]
    },
    {
        path: "/api/v1/movie/home",
        summary: "Trending and popular movies and series",
        tag: "Movie"
    },
    {
        path: "/api/v1/movie/search",
        summary: "Search movies and series",
        tag: "Movie",
        params: [
            {
                name: "q",
                in: "query",
                required: true,
                description: "Search term"
            },
            {
                name: "page",
                in: "query",
                description: "Page number"
            }
        ]
    },
    {
        path: "/api/v1/movie/genres",
        summary: "Movie and TV genres",
        tag: "Movie"
    },
    {
        path: "/api/v1/movie/genres/{id}",
        summary: "Discover titles by genre",
        tag: "Movie",
        params: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "TMDB genre id"
            },
            {
                name: "type",
                in: "query",
                description: "`movie` (default) or `tv`"
            },
            {
                name: "page",
                in: "query",
                description: "Page number"
            }
        ]
    },
    {
        path: "/api/v1/movie/{id}",
        summary: "Movie detail",
        tag: "Movie",
        params: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "TMDB movie id"
            }
        ]
    },
    {
        path: "/api/v1/movie/{id}/sources",
        summary: "Embed player URLs for a movie",
        tag: "Movie",
        params: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "TMDB movie id"
            }
        ]
    },
    {
        path: "/api/v1/movie/tv/{id}",
        summary: "Series detail including seasons",
        tag: "Movie",
        params: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "TMDB series id"
            }
        ]
    },
    {
        path: "/api/v1/movie/tv/{id}/season/{season}",
        summary: "Episodes in a season",
        tag: "Movie",
        params: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "TMDB series id"
            },
            {
                name: "season",
                in: "path",
                required: true,
                description: "Season number"
            }
        ]
    },
    {
        path: "/api/v1/movie/tv/{id}/sources",
        summary: "Embed player URLs for one episode",
        tag: "Movie",
        params: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "TMDB series id"
            },
            {
                name: "season",
                in: "query",
                description: "Season number, defaults to 1"
            },
            {
                name: "episode",
                in: "query",
                description: "Episode number, defaults to 1"
            }
        ]
    },
    {
        path: "/api/v1/tv/channels",
        summary: "Indonesian live TV channels with playable streams",
        tag: "Live TV",
        params: [
            {
                name: "category",
                in: "query",
                description: "Filter by category slug"
            },
            {
                name: "q",
                in: "query",
                description: "Search by channel name"
            }
        ]
    },
    {
        path: "/api/v1/tv/categories",
        summary: "Channel categories with counts",
        tag: "Live TV"
    },
    {
        path: "/api/v1/tv/channels/{id}",
        summary: "One channel and its streams",
        tag: "Live TV",
        params: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Channel id, e.g. `TVRI.id`"
            }
        ]
    },
    {
        path: "/api/v1/tv/channels/{id}/stream",
        summary: "HLS proxy for channels that cannot be played directly",
        tag: "Live TV",
        params: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Channel id"
            },
            {
                name: "s",
                in: "query",
                description: "Stream index, defaults to 0"
            }
        ]
    },
    {
        path: "/api/v1/radio/stations",
        summary: "Indonesian radio stations that passed the upstream liveness check",
        tag: "Radio",
        params: [
            {
                name: "tag",
                in: "query",
                description: "Filter by tag slug, e.g. `dangdut`"
            },
            {
                name: "q",
                in: "query",
                description: "Search by station name"
            }
        ]
    },
    {
        path: "/api/v1/radio/tags",
        summary: "Station tags with counts",
        tag: "Radio"
    },
    {
        path: "/api/v1/radio/stations/{id}",
        summary: "One station",
        tag: "Radio",
        params: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "radio-browser station UUID"
            }
        ]
    },
    {
        path: "/api/v1/radio/stations/{id}/stream",
        summary: "Audio proxy for stations the browser cannot reach directly",
        tag: "Radio",
        params: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "radio-browser station UUID"
            }
        ]
    },
    {
        path: "/api/v1/news",
        summary: "Latest anime news headlines",
        tag: "News",
        params: [
            {
                name: "q",
                in: "query",
                description: "Only items about this title, e.g. an anime name"
            },
            {
                name: "limit",
                in: "query",
                description: "Maximum items to return"
            }
        ]
    },
    {
        path: "/api/v1/news/{id}",
        summary: "One article, parsed into typed blocks",
        tag: "News",
        params: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Article id from the listing"
            }
        ]
    },
    {
        path: "/api/v1/comic/shinigami",
        summary: "Shinigami's current domain, resolved live from their own link portal",
        tag: "Comic"
    },
    {
        path: "/api/v1/search",
        summary: "Cross-domain search — anime, comics, movies/TV and radio in one call",
        tag: "Search",
        params: [
            {
                name: "q",
                in: "query",
                required: true,
                description: "Search term"
            }
        ]
    },
    {
        path: "/api/v1/anime/schedule.ics",
        summary: "Weekly release schedule as a subscribable iCalendar feed",
        tag: "Anime"
    },
    {
        path: "/api/v1/anime/quotes",
        summary: "A random anime quote, or quotes from one title",
        tag: "Tools",
        params: [
            {
                name: "anime",
                in: "query",
                description: "Title to find quotes from, e.g. `One Piece`"
            }
        ]
    },
    {
        path: "/api/v1/anime/identify",
        summary: "Reverse image search — which anime a screenshot is from (GET by URL, POST an upload)",
        tag: "Tools",
        params: [
            {
                name: "url",
                in: "query",
                description: "Public image URL (GET only)"
            }
        ]
    },
    {
        path: "/api/v1/anime/themes",
        summary: "OP/ED theme songs for a title, matched by name, with direct playable audio",
        tag: "Tools",
        params: [
            {
                name: "title",
                in: "query",
                required: true,
                description: "Anime title, e.g. `One Piece`"
            }
        ]
    }
];
function operations() {
    return OPERATIONS;
}
function buildOpenApiDocument(origin) {
    const paths = {};
    for (const operation of OPERATIONS){
        paths[operation.path] = {
            get: {
                summary: operation.summary,
                tags: [
                    operation.tag
                ],
                parameters: (operation.params ?? []).map((param)=>({
                        name: param.name,
                        in: param.in,
                        required: param.required ?? false,
                        description: param.description,
                        schema: {
                            type: "string"
                        }
                    })),
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        data: {
                                            description: "Endpoint payload"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    400: {
                        $ref: "#/components/responses/Error"
                    },
                    404: {
                        $ref: "#/components/responses/Error"
                    },
                    429: {
                        $ref: "#/components/responses/Error"
                    },
                    502: {
                        $ref: "#/components/responses/Error"
                    }
                }
            }
        };
    }
    return {
        openapi: "3.1.0",
        info: {
            title: "Otakudesu Community API",
            version: "3.0.0",
            description: "Anime, comics, movies and Indonesian live TV in one read-only public API. " + "Every successful response is `{ data }`; every failure is `{ error }`. " + "Rate limited per IP.",
            license: {
                name: "MIT",
                identifier: "MIT"
            }
        },
        servers: [
            {
                url: origin
            }
        ],
        paths,
        components: {
            responses: {
                Error: {
                    description: "Error",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    error: {
                                        type: "string"
                                    }
                                },
                                required: [
                                    "error"
                                ]
                            }
                        }
                    }
                }
            }
        }
    };
}
}),
"[project]/src/lib/shared/publicOrigin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The origin a client actually reached us on.
 *
 * `new URL(request.url).origin` is wrong behind a reverse proxy: the standalone
 * server binds to `0.0.0.0:3000`, so that is literally what it reports, and the
 * OpenAPI document ended up advertising `https://0.0.0.0:3000` as its server —
 * every "try it" button in the docs pointed at an unreachable address.
 *
 * nginx-proxy-manager (and every other sane proxy) sends the real values in
 * `x-forwarded-*`. Those headers are only trustworthy because this service is
 * never exposed directly — it only ever receives traffic through that proxy.
 */ __turbopack_context__.s([
    "publicOrigin",
    ()=>publicOrigin
]);
function publicOrigin(request) {
    const headers = request.headers;
    const forwardedHost = headers.get("x-forwarded-host") ?? headers.get("host");
    const forwardedProto = headers.get("x-forwarded-proto");
    if (forwardedHost) {
        // A proxy chain can send a comma-separated list; the first entry is the
        // original client-facing value.
        const host = forwardedHost.split(",")[0].trim();
        const proto = (forwardedProto?.split(",")[0] ?? "").trim() || inferProto(host);
        if (host) return `${proto}://${host}`;
    }
    const fallback = process.env.API_PUBLIC_URL?.replace(/\/+$/, "");
    if (fallback) return fallback;
    return new URL(request.url).origin;
}
/** Localhost is the only case where plain http is the sensible default. */ function inferProto(host) {
    return /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(host) ? "http" : "https";
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0_5hl7l._.js.map