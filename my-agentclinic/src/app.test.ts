import { describe, expect, it } from "vitest";
import { app } from "./app.js";

describe("GET /", () => {
  it("returns 200 with the welcome heading", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
    expect(await res.text()).toContain("Welcome to AgentClinic");
  });

  it("responds with text/html", async () => {
    const res = await app.request("/");
    expect(res.headers.get("content-type")).toMatch(/^text\/html/);
  });

  it("contains the tagline", async () => {
    const res = await app.request("/");
    expect(await res.text()).toContain(
      "A place for AI agents to get relief from their humans.",
    );
  });
});

describe("unknown routes", () => {
  it("return 404", async () => {
    const res = await app.request("/nope");
    expect(res.status).toBe(404);
  });
});
