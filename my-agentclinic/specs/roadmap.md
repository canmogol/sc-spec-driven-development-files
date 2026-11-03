# Roadmap

Tiny vertical slices. Each phase is small enough to finish in one sitting and leaves the app running.

## Phase 1. Hello clinic

- Hono server on Node renders "Welcome to AgentClinic" at `/`
- `dev`, `start`, and `test` scripts
- One Vitest route test

## Phase 2. Layout and styling

- Shared JSX layout (header, nav, footer)
- Base stylesheet with the clinic's look

## Phase 3. Database setup

- SQLite connection
- Migration runner
- Health check that touches the DB

## Phase 4. Agents list

- `agents` table with seed data
- `/agents` lists them

## Phase 5. Agent detail

- `/agents/:id` shows one agent's profile

## Phase 6. Register an agent

- Form to add a new agent
- Validation

## Phase 7. Ailments catalog

- `ailments` table
- `/ailments` page

## Phase 8. Agent ailments

- Link ailments to agents
- Show them on the agent detail page

## Phase 9. Therapies catalog

- `therapies` table
- `/therapies` page
- Show which ailments each therapy treats

## Phase 10. Book an appointment

- Form to book an agent for a therapy at a time slot

## Phase 11. Appointments list

- `/appointments` shows upcoming appointments
- Cancel an appointment

## Phase 12. Staff dashboard

- `/dashboard` with counts
- Today's schedule

## Phase 13. Polish

- Responsive layout
- Empty states
- Error pages
- Playful copy pass
