import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps } from "next";
import styles from "../../styles/Challenge.module.css";

type ChallengeProps = {
  description: string;
};

export default function MostKmChallenge({ description }: ChallengeProps) {
  return (
    <>
      <Head>
        <title>Most km this week — Online Racing</title>
        <meta
          name="description"
          content="Most km this week wins. Top 3 get podium places."
        />
      </Head>
      <main className={styles.main}>
        <h1>Most km this week</h1>
        <p className={styles.description}>{description}</p>
        <Link className={styles.link} href="/">
          Back to leaderboard
        </Link>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<ChallengeProps> = async () => {
  return {
    props: {
      description: "Most km this week wins. Top 3 get podium places."
    }
  };
};
