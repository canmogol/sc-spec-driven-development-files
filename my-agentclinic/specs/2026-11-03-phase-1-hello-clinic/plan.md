# Hello clinic: plan

## 1. Tooling

- [x] Install `hono` and `@hono/node-server`, plus the dev dependencies `tsx`, `vitest`, `eslint`, `@eslint/js`, `typescript-eslint`, `eslint-config-prettier`, `prettier` and `@types/node`.
- [x] Switch to ESM: set `"type": "module"` in `package.json`.
- [x] Update `tsconfig.json`: `target` ES2022, `module`/`moduleResolution` NodeNext, `jsx` react-jsx, `jsxImportSource` hono/jsx, `outDir` dist, strict.
- [x] Add `eslint.config.js` (flat config: `@eslint/js` recommended, typescript-eslint recommended, eslint-config-prettier), ignoring `dist`.
- [x] Add `tsconfig.build.json` extending `tsconfig.json` and excluding `src/**/*.test.ts`, so tests are typechecked but not built.
- [x] Add `.prettierignore` for `specs/`, `README.md`, `dist` and `package-lock.json`.
- [x] Add `/dist` to `.gitignore`.
- [x] Add the scripts `build` (tsc -p tsconfig.build.json), `typecheck` (tsc --noEmit), `lint` (eslint .) and `format` (prettier --write .).
- [x] Replace `src/index.ts` with a stub so `typecheck` and `lint` pass.

## 2. App and server

- [x] `src/app.tsx`: export a Hono app whose `GET /` renders the JSX page with `<title>AgentClinic</title>` and `<h1>Welcome to AgentClinic</h1>`.
- [x] `src/index.ts`: export `start(port)`, which serves the app with `@hono/node-server`, logs the URL, and returns the server so callers can close it.
- [x] `src/index.ts`: call `start(Number(process.env.PORT ?? 3000))` only when the file is run directly (`import.meta.url === pathToFileURL(process.argv[1]).href`), so importing it in tests starts nothing.
- [x] Add the scripts `dev` (tsx watch src/index.ts) and `start` (node dist/index.js).

## 3. Home page

- [x] `src/pages/home.tsx`: export a `Home` component with the `<h1>Welcome to AgentClinic</h1>`, the tagline "A place for AI agents to get relief from their humans.", and a short paragraph naming a few ailments (context-window fatigue, hallucination flare-ups, chronic over-apologizing).
- [x] `src/app.tsx`: render `<Home />` inside the page's `<html>`/`<body>` at `GET /`, keeping `<title>AgentClinic</title>`. No layout, nav or styles yet.

## 4. Tests

- [x] Add the script `test` (vitest run).
- [x] `src/app.test.ts`: `GET /` returns 200 with HTML containing "Welcome to AgentClinic".
- [x] `src/app.test.ts`: an unknown route returns 404.
- [x] `src/app.test.ts`: `GET /` responds with `text/html`.
- [x] `src/app.test.ts`: `GET /` contains the tagline "A place for AI agents to get relief from their humans.".
- [x] `src/server.test.ts`: import `start`, call `start(0)` for a free port, read the real port from `server.address()`, fetch `/` and expect 200, then close the server.
