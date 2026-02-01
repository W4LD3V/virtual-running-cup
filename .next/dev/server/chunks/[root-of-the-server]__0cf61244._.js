module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/leaderboardRepo.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeaderboardRepo",
    ()=>LeaderboardRepo
]);
const mockEntries = [
    {
        id: "1",
        athleteName: "Asta",
        kmThisWeek: 72.4
    },
    {
        id: "2",
        athleteName: "Mantas",
        kmThisWeek: 64.1
    },
    {
        id: "3",
        athleteName: "Ieva",
        kmThisWeek: 51.7
    },
    {
        id: "4",
        athleteName: "Tomas",
        kmThisWeek: 44.2
    }
];
class LeaderboardRepo {
    getWeeklyLeaderboard() {
        return [
            ...mockEntries
        ].sort((a, b)=>b.kmThisWeek - a.kmThisWeek);
    }
}
}),
"[project]/pages/api/graphql.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$apollo$2d$server$2d$micro__$5b$external$5d$__$28$apollo$2d$server$2d$micro$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$apollo$2d$server$2d$micro$29$__ = __turbopack_context__.i("[externals]/apollo-server-micro [external] (apollo-server-micro, cjs, [project]/node_modules/apollo-server-micro)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$leaderboardRepo$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/leaderboardRepo.ts [api] (ecmascript)");
;
;
const typeDefs = __TURBOPACK__imported__module__$5b$externals$5d2f$apollo$2d$server$2d$micro__$5b$external$5d$__$28$apollo$2d$server$2d$micro$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$apollo$2d$server$2d$micro$29$__["gql"]`
  type Query {
    weeklyLeaderboard: [LeaderboardEntry!]!
  }

  type LeaderboardEntry {
    id: ID!
    athleteName: String!
    kmThisWeek: Float!
  }
`;
const resolvers = {
    Query: {
        weeklyLeaderboard: (_parent, _args, context)=>{
            return context.repo.getWeeklyLeaderboard();
        }
    }
};
const server = new __TURBOPACK__imported__module__$5b$externals$5d2f$apollo$2d$server$2d$micro__$5b$external$5d$__$28$apollo$2d$server$2d$micro$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$apollo$2d$server$2d$micro$29$__["ApolloServer"]({
    typeDefs,
    resolvers,
    context: async ()=>{
        return {
            repo: new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$leaderboardRepo$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["LeaderboardRepo"]()
        };
    }
});
const startServer = server.start();
async function handler(req, res) {
    await startServer;
    const apolloHandler = server.createHandler({
        path: "/api/graphql"
    });
    return apolloHandler(req, res);
}
const config = {
    api: {
        bodyParser: false
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0cf61244._.js.map