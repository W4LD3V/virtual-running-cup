import Head from "next/head";
import type { GetServerSideProps } from "next";
import useSWR from "swr";
import { fetchWeeklyLeaderboard } from "../lib/graphqlClient";
import type { LeaderboardEntry } from "../lib/leaderboardRepo";

const SWR_KEY = ["weeklyLeaderboard"] as const;

type HomeProps = {
  initialLeaderboard: LeaderboardEntry[];
  graphqlEndpoint: string;
};

const fetcher = (endpoint: string) => fetchWeeklyLeaderboard(endpoint);

export default function Home({ initialLeaderboard, graphqlEndpoint }: HomeProps) {
  const { data, error, isLoading } = useSWR(SWR_KEY, () => fetcher(graphqlEndpoint), {
    fallbackData: initialLeaderboard,
    revalidateOnFocus: true,
    refreshInterval: 0
  });

  const leaderboard = data ?? [];

  return (
    <>
      <Head>
        <title>Online Racing — Weekly Leaderboard</title>
        <meta
          name="description"
          content="Track weekly challenges like most kilometers and climb the leaderboard."
        />
      </Head>
      <main className="mx-auto max-w-[900px] px-5 pb-16 pt-12 font-sans text-[#121417]">
        <header className="mb-8">
          <h1 data-testid="leaderboard-title">Weekly Leaderboard</h1>
          <p className="mt-2 text-[#57606a]">Most km this week</p>
        </header>

        {error && <p className="font-semibold text-[#b42318]">Failed to load leaderboard.</p>}
        {isLoading && leaderboard.length === 0 && (
          <p className="text-[#57606a]">Loading leaderboard…</p>
        )}

        <section className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {leaderboard.slice(0, 3).map((entry, index) => (
            <article
              key={entry.id}
              className="flex min-h-[140px] flex-col justify-center gap-2 rounded-xl border border-[#e3e6eb] bg-[#f8f9fb] p-4"
              data-testid={`podium-${index + 1}`}
            >
              <span className="text-[0.85rem] uppercase tracking-[0.08em] text-[#57606a]">
                Place {index + 1}
              </span>
              <strong className="text-[1.3rem]">{entry.athleteName}</strong>
              <span className="text-[1.05rem] text-[#1b5d3a]">{entry.kmThisWeek} km</span>
            </article>
          ))}
        </section>

        {leaderboard.length > 3 && (
          <section className="border-t border-[#e3e6eb] pt-6">
            <h2 className="mb-3 text-[1.1rem]">All entries</h2>
            <ul className="m-0 grid list-none gap-2 p-0">
              {leaderboard.slice(3).map((entry) => (
                <li
                  key={entry.id}
                  className="flex justify-between rounded-lg border border-[#eef0f3] bg-white px-3 py-2"
                >
                  <span>{entry.athleteName}</span>
                  <span>{entry.kmThisWeek} km</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ req }) => {
  const protocol = (req.headers["x-forwarded-proto"] as string) ?? "http";
  const host = req.headers.host ?? "localhost:3000";
  const graphqlEndpoint = `${protocol}://${host}/api/graphql`;
  const initialLeaderboard = await fetchWeeklyLeaderboard(graphqlEndpoint);

  return {
    props: {
      initialLeaderboard,
      graphqlEndpoint
    }
  };
};
