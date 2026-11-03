# Hello clinic: validations

## Automated

Run `npm test`:

- [x] `GET /` returns 200 and the HTML contains "Welcome to AgentClinic" (integration, `app.request()`).
- [x] An unknown route (e.g. `/nope`) returns 404 (integration).
- [x] `GET /` has a `Content-Type` of `text/html` (integration).
- [x] `GET /` contains the tagline "A place for AI agents to get relief from their humans." (integration).
- [x] `start(0)` starts a real server on a free port and serves `/` (end to end; `PORT` itself is checked manually).

## Manual

- [x] `npm run dev`, then open http://localhost:3000: the welcome heading, tagline and ailments paragraph show, and edits reload.
- [x] `npm run build && npm start` serves the page from `dist/`.
- [x] `PORT=4000 npm run dev` serves on port 4000.

## Ready to merge

- [x] `npm test` passes.
- [x] `npm run typecheck` passes.
- [x] `npm run lint` passes.
- [x] `npm run build` passes and `dist/` has no test files.
