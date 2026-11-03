import { Hono } from "hono";
import { raw } from "hono/html";
import { Home } from "./pages/home.js";

export const app = new Hono();

app.get("/", (c) =>
  c.html(
    <>
      {raw("<!doctype html>")}
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>AgentClinic</title>
        </head>
        <body>
          <Home />
        </body>
      </html>
    </>,
  ),
);
