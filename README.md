# Online Racing Platform — Minimal MVP

Next.js project that shows a single weekly leaderboard for a "Most km this week" challenge. It demonstrates SSR, SSG, a single GraphQL query, SWR revalidation, unit testing, and an E2E flow.

## What this is
- Weekly leaderboard for one challenge (mocked data)
- GraphQL API via `/api/graphql` with one query: `weeklyLeaderboard`
- SSR home page with SWR fallback data
- SSG challenge page

## How to run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Unit tests
```bash
npm test
```

## E2E tests
Option 1 (single command):
```bash
npm run e2e
```

Option 2 (two commands):
```bash
npm run dev
npm run e2e:run
```

## Rendering strategy
- `/` uses **SSR** (`getServerSideProps`) and passes data as SWR `fallbackData` for instant render.
- `/challenge/most-km` uses **SSG** (`getStaticProps`) with static challenge content.

## GraphQL usage
- Only one query exists in the app: `weeklyLeaderboard`.
- Both SSR and SWR use the same query through `graphql-request`.

