import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer, gql } from "apollo-server-micro";
import { LeaderboardRepo } from "../../lib/leaderboardRepo";

const typeDefs = gql`
  type Query {
    weeklyLeaderboard: [LeaderboardEntry!]!
  }

  type LeaderboardEntry {
    id: ID!
    athleteName: String!
    kmThisWeek: Float!
  }
`;

type Context = {
  repo: LeaderboardRepo;
};

const resolvers = {
  Query: {
    weeklyLeaderboard: (_parent: unknown, _args: unknown, context: Context) => {
      return context.repo.getWeeklyLeaderboard();
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (): Promise<Context> => {
    return { repo: new LeaderboardRepo() };
  }
});

const startServer = server.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await startServer;
  const apolloHandler = server.createHandler({ path: "/api/graphql" });
  return apolloHandler(req, res);
}

export const config = {
  api: {
    bodyParser: false
  }
};
