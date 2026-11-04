# Layout and styling: validations

## Automated

Run `npm test`:

- [x] `GET /` has the header wordmark, all six nav links, the footer line, and links `/styles.css` (integration, `app.request()`).
- [x] On `GET /`, the Home link has `aria-current="page"` and no other link does (integration).
- [x] `GET /styles.css` returns 200 `text/css`, and `/fonts/fredoka.woff2` returns 200 `font/woff2` (integration).
- [x] `Layout` renders `<title>X · AgentClinic</title>` for `title="X"`, with the header, main and footer (unit).
- [x] `Header`, `Main` and `Footer` each render their part, and `Header` marks only the current section (unit).
- [x] The Phase 1 tests still pass, with the title checks updated (integration, end to end).

## Manual

- [x] `npm run dev`, then open http://localhost:3000: the pastel palette, the rounded heading font, and the header, nav and footer all show.
- [x] At about 375px wide, the nav wraps and the page doesn't scroll sideways.
- [x] `npm run build && npm start` serves `/styles.css` and the font from `public/`.
- [x] Clicking Agents, Ailments, Therapies, Appointments or Dashboard shows a 404 (expected until their phase).

## Ready to merge

- [x] `npm test` passes.
- [x] `npm run typecheck` passes.
- [x] `npm run lint` passes.
- [x] `npm run build` passes.
- [x] `npm run format:check` passes.
