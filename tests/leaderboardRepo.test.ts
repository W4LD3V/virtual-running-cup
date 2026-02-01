import { LeaderboardRepo } from "../lib/leaderboardRepo";

describe("LeaderboardRepo", () => {
  it("returns sorted entries and at least three", () => {
    const repo = new LeaderboardRepo();
    const entries = repo.getWeeklyLeaderboard();

    expect(entries.length).toBeGreaterThanOrEqual(3);
    const sorted = [...entries].sort((a, b) => b.kmThisWeek - a.kmThisWeek);
    expect(entries).toEqual(sorted);
  });
});
