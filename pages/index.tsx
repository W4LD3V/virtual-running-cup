import Head from "next/head";
import type { GetServerSideProps } from "next";
import useSWR from "swr";
import styles from "../styles/Home.module.css";
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
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 data-testid="leaderboard-title">Weekly Leaderboard</h1>
          <p className={styles.subtitle}>Most km this week</p>
        </header>

        {error && <p className={styles.error}>Failed to load leaderboard.</p>}
        {isLoading && leaderboard.length === 0 && (
          <p className={styles.loading}>Loading leaderboard…</p>
        )}

        <section className={styles.podium}>
          {leaderboard.slice(0, 3).map((entry, index) => (
            <article
              key={entry.id}
              className={styles.podiumCard}
              data-testid={`podium-${index + 1}`}
            >
              <span className={styles.placeLabel}>Place {index + 1}</span>
              <strong className={styles.name}>{entry.athleteName}</strong>
              <span className={styles.km}>{entry.kmThisWeek} km</span>
            </article>
          ))}
        </section>

        {leaderboard.length > 3 && (
          <section className={styles.list}>
            <h2 className={styles.listTitle}>All entries</h2>
            <ul className={styles.listItems}>
              {leaderboard.slice(3).map((entry) => (
                <li key={entry.id} className={styles.listItem}>
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
