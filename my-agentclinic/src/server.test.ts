import type { AddressInfo } from "node:net";
import { describe, expect, it } from "vitest";
import { start } from "./index.js";

describe("start", () => {
  it("serves / on a real port", async () => {
    const server = start(0);
    await new Promise<void>((resolve) => server.once("listening", resolve));
    try {
      const { port } = server.address() as AddressInfo;
      const res = await fetch(`http://localhost:${port}/`);
      expect(res.status).toBe(200);
    } finally {
      await new Promise<void>((resolve, reject) =>
        server.close((err) => (err ? reject(err) : resolve())),
      );
    }
  });
});
