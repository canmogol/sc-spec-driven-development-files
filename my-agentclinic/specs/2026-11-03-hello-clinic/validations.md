# Hello clinic: validations

## Automated

Run `npm test`:

- [ ] `GET /` returns 200 and the HTML contains "Welcome to AgentClinic" (integration, `app.request()`).
- [ ] An unknown route (e.g. `/nope`) returns 404 (integration).
- [ ] `GET /` has a `Content-Type` of `text/html` (integration).
- [ ] `GET /` contains the tagline "A place for AI agents to get relief from their humans." (integration).
- [ ] The server starts on the given `PORT` and serves `/` (end to end, real server).

## Manual

- [ ] `npm run dev`, then open http://localhost:3000: the welcome heading, tagline and ailments paragraph show, and edits reload.
- [ ] `npm run build && npm start` serves the page from `dist/`.
- [ ] `PORT=4000 npm run dev` serves on port 4000.

## Ready to merge

- [ ] `npm test` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
