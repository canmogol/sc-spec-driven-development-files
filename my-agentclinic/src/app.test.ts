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

describe("layout on GET /", () => {
  const navLinks = [
    ["/", "Home"],
    ["/agents", "Agents"],
    ["/ailments", "Ailments"],
    ["/therapies", "Therapies"],
    ["/appointments", "Appointments"],
    ["/dashboard", "Dashboard"],
  ];

  it("has the wordmark, all nav links, the footer line and the stylesheet", async () => {
    const html = await (await app.request("/")).text();
    expect(html).toContain('<a class="wordmark" href="/">AgentClinic</a>');
    for (const [href, label] of navLinks) {
      expect(html).toMatch(new RegExp(`<a href="${href}"[^>]*>${label}</a>`));
    }
    expect(html).toContain(
      "No agents were over-prompted in the making of this site.",
    );
    expect(html).toContain('<link rel="stylesheet" href="/styles.css"/>');
  });

  it("marks only the Home link as the current page", async () => {
    const html = await (await app.request("/")).text();
    expect(html).toContain('<a href="/" aria-current="page">Home</a>');
    expect(html.match(/aria-current="page"/g)).toHaveLength(1);
  });
});

describe("static assets", () => {
  it("serves the stylesheet", async () => {
    const res = await app.request("/styles.css");
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toMatch(/^text\/css/);
  });

  it("serves the Fredoka font", async () => {
    const res = await app.request("/fonts/fredoka.woff2");
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("font/woff2");
  });
});
