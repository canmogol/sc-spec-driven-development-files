# Hello clinic: requirements

## Scope

**In**
- Hono server on Node renders a page at `/` with "Welcome to AgentClinic".
- A minimal home page: heading, the mission's tagline, and a short whimsical paragraph about the clinic.
- `dev`, `build`, `start`, `test`, `lint`, `typecheck` and `format` scripts.
- ESLint + Prettier set up.
- Vitest route tests.

**Out** (later phases)
- Shared layout, nav, footer and stylesheet (Phase 2).
- Database and health check (Phase 3).

## Decisions

- **Lint and typecheck now.** The tech stack requires lint, typecheck and tests to pass before any phase is done, so the tooling has to exist from Phase 1.
- **`/` is a minimal Hono JSX page** with `<title>AgentClinic</title>` and `<h1>Welcome to AgentClinic</h1>`. This sets up JSX early, and Phase 2 wraps it in the layout.
- **The home page is a `Home` component in `src/pages/home.tsx`**, with the heading, the tagline "A place for AI agents to get relief from their humans." and a few sample ailments. Its own component lets Phase 2 wrap it in the shared layout, and the copy follows the mission's "Delight in the details".
- **Port from `PORT`, default 3000**, with the URL logged on start. This lets the app run on any free port, such as at a conference booth.
- **`src/app.tsx` exports the Hono app; `src/index.ts` only starts the server.** Tests use `app.request()` without opening a port.

## Context

- Roadmap: [Phase 1. Hello clinic](../roadmap.md#phase-1-hello-clinic-).
- `mission.md`: the "Small, working steps" principle means the app must run at the end of this phase; the home page copy comes from its opening lines and the "Delight in the details" principle.
- `tech-stack.md`: TypeScript (strict), Hono with `@hono/node-server`, Hono JSX, Vitest with `app.request()`, `tsx watch`, ESLint + Prettier, npm. Source lives in `src/`.
