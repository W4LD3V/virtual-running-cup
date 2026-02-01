module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/styles/Home.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "error": "Home-module__g21JLG__error",
  "header": "Home-module__g21JLG__header",
  "km": "Home-module__g21JLG__km",
  "list": "Home-module__g21JLG__list",
  "listItem": "Home-module__g21JLG__listItem",
  "listItems": "Home-module__g21JLG__listItems",
  "listTitle": "Home-module__g21JLG__listTitle",
  "loading": "Home-module__g21JLG__loading",
  "main": "Home-module__g21JLG__main",
  "name": "Home-module__g21JLG__name",
  "placeLabel": "Home-module__g21JLG__placeLabel",
  "podium": "Home-module__g21JLG__podium",
  "podiumCard": "Home-module__g21JLG__podiumCard",
  "subtitle": "Home-module__g21JLG__subtitle",
});
}),
"[project]/lib/graphqlClient.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "WEEKLY_LEADERBOARD_QUERY",
    ()=>WEEKLY_LEADERBOARD_QUERY,
    "createGraphQLClient",
    ()=>createGraphQLClient,
    "fetchWeeklyLeaderboard",
    ()=>fetchWeeklyLeaderboard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, esm_import, [project]/node_modules/graphql-request)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const WEEKLY_LEADERBOARD_QUERY = __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
  query WeeklyLeaderboard {
    weeklyLeaderboard {
      id
      athleteName
      kmThisWeek
    }
  }
`;
const createGraphQLClient = (endpoint)=>new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["GraphQLClient"](endpoint);
const fetchWeeklyLeaderboard = async (endpoint)=>{
    const client = createGraphQLClient(endpoint);
    const data = await client.request(WEEKLY_LEADERBOARD_QUERY);
    return data.weeklyLeaderboard;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__ = __turbopack_context__.i("[externals]/swr [external] (swr, esm_import, [project]/node_modules/swr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Home.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$graphqlClient$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/graphqlClient.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$graphqlClient$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$graphqlClient$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const SWR_KEY = [
    "weeklyLeaderboard"
];
const fetcher = (endpoint)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$graphqlClient$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["fetchWeeklyLeaderboard"])(endpoint);
function Home({ initialLeaderboard, graphqlEndpoint }) {
    const { data, error, isLoading } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__["default"])(SWR_KEY, ()=>fetcher(graphqlEndpoint), {
        fallbackData: initialLeaderboard,
        revalidateOnFocus: true,
        refreshInterval: 0
    });
    const leaderboard = data ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Online Racing — Weekly Leaderboard"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Track weekly challenges like most kilometers and climb the leaderboard."
                    }, void 0, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                "data-testid": "leaderboard-title",
                                children: "Weekly Leaderboard"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "Most km this week"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].error,
                        children: "Failed to load leaderboard."
                    }, void 0, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 41,
                        columnNumber: 19
                    }, this),
                    isLoading && leaderboard.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].loading,
                        children: "Loading leaderboard…"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].podium,
                        children: leaderboard.slice(0, 3).map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].podiumCard,
                                "data-testid": `podium-${index + 1}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].placeLabel,
                                        children: [
                                            "Place ",
                                            index + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].name,
                                        children: entry.athleteName
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].km,
                                        children: [
                                            entry.kmThisWeek,
                                            " km"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, entry.id, true, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    leaderboard.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].list,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listTitle,
                                children: "All entries"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listItems,
                                children: leaderboard.slice(3).map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Home$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: entry.athleteName
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: [
                                                    entry.kmThisWeek,
                                                    " km"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/index.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, entry.id, true, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const getServerSideProps = async ({ req })=>{
    const protocol = req.headers["x-forwarded-proto"] ?? "http";
    const host = req.headers.host ?? "localhost:3000";
    const graphqlEndpoint = `${protocol}://${host}/api/graphql`;
    const initialLeaderboard = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$graphqlClient$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["fetchWeeklyLeaderboard"])(graphqlEndpoint);
    return {
        props: {
            initialLeaderboard,
            graphqlEndpoint
        }
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__94b2f93a._.js.map