import { describe, expect, it } from "vitest";
import { Footer } from "./footer.js";

describe("Footer", () => {
  it("renders the playful line and the current year", async () => {
    const html = await (<Footer />).toString();
    expect(html).toContain(
      "No agents were over-prompted in the making of this site.",
    );
    expect(html).toContain(`© ${new Date().getFullYear()} AgentClinic`);
  });
});
