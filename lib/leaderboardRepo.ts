export type LeaderboardEntry = {
  id: string;
  athleteName: string;
  kmThisWeek: number;
};

const mockEntries: LeaderboardEntry[] = [
  { id: "1", athleteName: "Asta", kmThisWeek: 72.4 },
  { id: "2", athleteName: "Mantas", kmThisWeek: 64.1 },
  { id: "3", athleteName: "Ieva", kmThisWeek: 51.7 },
  { id: "4", athleteName: "Tomas", kmThisWeek: 44.2 }
];

export class LeaderboardRepo {
  getWeeklyLeaderboard(): LeaderboardEntry[] {
    return [...mockEntries].sort((a, b) => b.kmThisWeek - a.kmThisWeek);
  }
}
