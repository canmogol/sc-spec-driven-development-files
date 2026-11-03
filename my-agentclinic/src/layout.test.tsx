import { describe, expect, it } from "vitest";
import { Layout } from "./layout.js";

describe("Layout", () => {
  it("renders the page title with the site name", async () => {
    const html = await (
      <Layout title="X" current="home">
        <p>body</p>
      </Layout>
    ).toString();
    expect(html).toContain("<title>X · AgentClinic</title>");
    expect(html).toContain("<p>body</p>");
  });
});
