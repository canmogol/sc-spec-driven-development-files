import { describe, expect, it } from "vitest";
import { Layout } from "./layout.js";

describe("Layout", () => {
  it("renders the title and wraps children in the header, main and footer", async () => {
    const html = await (
      <Layout title="X" current="home">
        <p>body</p>
      </Layout>
    ).toString();
    expect(html).toContain("<title>X · AgentClinic</title>");
    expect(html).toContain("<main><p>body</p></main>");
    expect(html).toContain('<header class="site-header">');
    expect(html).toContain('<footer class="site-footer">');
  });
});
