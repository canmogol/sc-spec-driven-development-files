import type { Child } from "hono/jsx";
import { raw } from "hono/html";
import { Footer } from "./components/footer.js";
import { Header, type Section } from "./components/header.js";
import { Main } from "./components/main.js";

export type { Section };

type LayoutProps = {
  title: string;
  current: Section;
  children?: Child;
};

export function Layout({ title, current, children }: LayoutProps) {
  return (
    <>
      {raw("<!doctype html>")}
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{`${title} · AgentClinic`}</title>
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
          <Header current={current} />
          <Main>{children}</Main>
          <Footer />
        </body>
      </html>
    </>
  );
}
