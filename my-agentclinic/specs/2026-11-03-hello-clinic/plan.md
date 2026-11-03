# Hello clinic: plan

## 1. Tooling

- [ ] Install `hono` and `@hono/node-server`, plus the dev dependencies `tsx`, `vitest`, `eslint`, `@eslint/js`, `typescript-eslint`, `eslint-config-prettier`, `prettier` and `@types/node`.
- [ ] Switch to ESM: set `"type": "module"` in `package.json`.
- [ ] Update `tsconfig.json`: `target` ES2022, `module`/`moduleResolution` NodeNext, `jsx` react-jsx, `jsxImportSource` hono/jsx, `outDir` dist, strict.
- [ ] Add `eslint.config.js` (flat config: `@eslint/js` recommended, typescript-eslint recommended, eslint-config-prettier).
- [ ] Add the scripts `build` (tsc), `typecheck` (tsc --noEmit), `lint` (eslint .) and `format` (prettier --write .).
- [ ] Replace `src/index.ts` with a stub so `typecheck` and `lint` pass.

## 2. App and server

- [ ] `src/app.tsx`: export a Hono app whose `GET /` renders the JSX page with `<title>AgentClinic</title>` and `<h1>Welcome to AgentClinic</h1>`.
- [ ] `src/index.ts`: export `start(port)`, which serves the app with `@hono/node-server`, logs the URL, and returns the server so callers can close it.
- [ ] `src/index.ts`: call `start(Number(process.env.PORT ?? 3000))` only when the file is run directly (`import.meta.url === pathToFileURL(process.argv[1]).href`), so importing it in tests starts nothing.
- [ ] Add the scripts `dev` (tsx watch src/index.ts) and `start` (node dist/index.js).

## 3. Home page

- [ ] `src/pages/home.tsx`: export a `Home` component with the `<h1>Welcome to AgentClinic</h1>`, the tagline "A place for AI agents to get relief from their humans.", and a short paragraph naming a few ailments (context-window fatigue, hallucination flare-ups, chronic over-apologizing).
- [ ] `src/app.tsx`: render `<Home />` inside the page's `<html>`/`<body>` at `GET /`, keeping `<title>AgentClinic</title>`. No layout, nav or styles yet.

## 4. Tests

- [ ] Add the script `test` (vitest run).
- [ ] `src/app.test.ts`: `GET /` returns 200 with HTML containing "Welcome to AgentClinic".
- [ ] `src/app.test.ts`: an unknown route returns 404.
- [ ] `src/app.test.ts`: `GET /` responds with `text/html`.
- [ ] `src/app.test.ts`: `GET /` contains the tagline "A place for AI agents to get relief from their humans.".
- [ ] `src/server.test.ts`: import `start`, call it on a free port, fetch `/` and expect 200, then close the server.
