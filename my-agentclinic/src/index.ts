import { serve, type ServerType } from "@hono/node-server";
import { pathToFileURL } from "node:url";
import { app } from "./app.js";

export function start(port: number): ServerType {
  return serve({ fetch: app.fetch, port }, (info) => {
    console.log(`AgentClinic listening on http://localhost:${info.port}`);
  });
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  start(Number(process.env.PORT ?? 3000));
}
