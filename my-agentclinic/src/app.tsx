import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { Layout } from "./layout.js";
import { Home } from "./pages/home.js";

export const app = new Hono();

app.get("/", (c) =>
  c.html(
    <Layout title="Home" current="home">
      <Home />
    </Layout>,
  ),
);

app.use("/*", serveStatic({ root: "./public" }));
