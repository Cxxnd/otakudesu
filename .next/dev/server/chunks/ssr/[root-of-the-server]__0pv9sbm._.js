module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.01gblc3l7a6g8.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 215,
    height: 215
};
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$openapi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/openapi.ts [app-rsc] (ecmascript)");
;
;
;
const DOMAINS = [
    {
        tag: "Anime",
        note: "Ongoing, completed, episodes, batches and schedule"
    },
    {
        tag: "Comic",
        note: "Listings, detail and the full chapter reader payload"
    },
    {
        tag: "Movie",
        note: "TMDB metadata plus embed player sources"
    },
    {
        tag: "Live TV",
        note: "Indonesian channels with a CORS-safe HLS proxy"
    }
];
function Home() {
    const counts = new Map();
    for (const operation of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$openapi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["operations"])()){
        counts.set(operation.tag, (counts.get(operation.tag) ?? 0) + 1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            maxWidth: 760,
            margin: "0 auto",
            padding: "4rem 1.5rem"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: label,
                children: "Open source · MIT"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: "2.5rem",
                    lineHeight: 1.1,
                    margin: "0.5rem 0 1rem"
                },
                children: "Otakudesu Community API"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "var(--muted)",
                    margin: "0 0 2.5rem",
                    fontSize: "1.05rem"
                },
                children: "A read-only public API for anime, comics, movies and Indonesian live TV. Built by the community, for the community."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    border: "1px solid var(--line)",
                    marginBottom: "2.5rem"
                },
                children: DOMAINS.map((domain, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "1rem",
                            alignItems: "baseline",
                            padding: "0.9rem 1rem",
                            borderTop: index === 0 ? "none" : "1px solid var(--line)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    minWidth: "5.5rem"
                                },
                                children: domain.tag
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "var(--muted)",
                                    flex: 1
                                },
                                children: domain.note
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "var(--muted)",
                                    fontSize: "0.85rem"
                                },
                                children: counts.get(domain.tag) ?? 0
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, domain.tag, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginBottom: "2.5rem"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/docs",
                    style: {
                        color: "var(--accent)",
                        fontWeight: 600
                    },
                    children: "Browse the API reference →"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "var(--muted)",
                    fontSize: "0.9rem"
                },
                children: [
                    "This project indexes and links to third-party sources. It hosts no media of its own.",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/rizkyhaksono/otakudesu-be",
                        children: "Source on GitHub"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
const label = {
    margin: 0,
    fontSize: "0.75rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--muted)"
};
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/openapi.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0pv9sbm._.js.map