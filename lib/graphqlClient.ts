import { GraphQLClient, gql } from "graphql-request";
import type { LeaderboardEntry } from "./leaderboardRepo";

export const WEEKLY_LEADERBOARD_QUERY = gql`
  query WeeklyLeaderboard {
    weeklyLeaderboard {
      id
      athleteName
      kmThisWeek
    }
  }
`;

export type WeeklyLeaderboardResponse = {
  weeklyLeaderboard: LeaderboardEntry[];
};

export const createGraphQLClient = (endpoint: string) => new GraphQLClient(endpoint);

export const fetchWeeklyLeaderboard = async (endpoint: string) => {
  const client = createGraphQLClient(endpoint);
  const data = await client.request<WeeklyLeaderboardResponse>(WEEKLY_LEADERBOARD_QUERY);
  return data.weeklyLeaderboard;
};
