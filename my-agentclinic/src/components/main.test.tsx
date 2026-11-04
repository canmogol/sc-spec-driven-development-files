import { describe, expect, it } from "vitest";
import { Main } from "./main.js";

describe("Main", () => {
  it("wraps its children in <main> inside the container", async () => {
    const html = await (
      <Main>
        <p>body</p>
      </Main>
    ).toString();
    expect(html).toBe('<div class="container"><main><p>body</p></main></div>');
  });
});
