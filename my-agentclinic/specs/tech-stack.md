# Tech Stack

| Concern | Choice | Why |
|---|---|---|
| Language | TypeScript (strict) | Popular, typed, already set up in the repo |
| Runtime | Node.js (LTS) | Standard, widely supported |
| Package manager | npm | Already in use (`package-lock.json`) |
| Web framework | [Hono](https://hono.dev) with `@hono/node-server` | Small, fast, TypeScript-first, popular |
| Rendering | Server-side Hono JSX | No client build step; fast pages that work in any modern browser |
| Styling | Plain CSS (custom properties, flexbox/grid) served as a static file | Attractive without a framework; easy to theme |
| Interactivity | Progressive enhancement; plain HTML forms first | Works without JavaScript; add small scripts only when needed |
| Database | SQLite via `better-sqlite3` | Zero-ops, file-based, synchronous and simple |
| Migrations | Plain SQL files applied in order at startup | Transparent, no ORM required |
| Testing | Vitest, using Hono's `app.request()` for route tests | Fast, TS-native, no server needed in tests |
| Dev server | `tsx watch` | Run TypeScript directly with reload |
| Lint / format | ESLint + Prettier | Common defaults |

## Conventions

- Source in `src/`, SQL migrations in `src/db/migrations/`, static assets in `public/`.
- Pages in `src/pages/`; shared UI components in `src/components/`, one component per file with its test beside it (`header.tsx`, `header.test.tsx`).
- One route module per feature area (agents, ailments, therapies, appointments, dashboard).
- Run `npm run lint`, `npm run typecheck`, and `npm test` before considering a phase done.
