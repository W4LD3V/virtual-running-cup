import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps } from "next";

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
      <main className="mx-auto max-w-[720px] px-5 pb-16 pt-12 font-sans text-[#121417]">
        <h1>Most km this week</h1>
        <p className="mb-6 mt-4 text-[#404852]">{description}</p>
        <Link className="inline-block font-semibold text-[#1b5d3a] hover:underline" href="/">
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
