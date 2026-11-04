import { describe, expect, it } from "vitest";
import { Header } from "./header.js";

describe("Header", () => {
  it("renders the wordmark and all six nav links", async () => {
    const html = await (<Header current="home" />).toString();
    expect(html).toContain('<a class="wordmark" href="/">AgentClinic</a>');
    for (const label of [
      "Home",
      "Agents",
      "Ailments",
      "Therapies",
      "Appointments",
      "Dashboard",
    ]) {
      expect(html).toContain(`>${label}</a>`);
    }
  });

  it("marks only the current section", async () => {
    const html = await (<Header current="agents" />).toString();
    expect(html).toContain('<a href="/agents" aria-current="page">Agents</a>');
    expect(html.match(/aria-current="page"/g)).toHaveLength(1);
  });
});
