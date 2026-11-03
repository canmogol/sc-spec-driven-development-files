import type { Child } from "hono/jsx";
import { raw } from "hono/html";

export type Section =
  "home" | "agents" | "ailments" | "therapies" | "appointments" | "dashboard";

const NAV: { section: Section; label: string; href: string }[] = [
  { section: "home", label: "Home", href: "/" },
  { section: "agents", label: "Agents", href: "/agents" },
  { section: "ailments", label: "Ailments", href: "/ailments" },
  { section: "therapies", label: "Therapies", href: "/therapies" },
  { section: "appointments", label: "Appointments", href: "/appointments" },
  { section: "dashboard", label: "Dashboard", href: "/dashboard" },
];

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
          <header class="site-header">
            <div class="container">
              <a class="wordmark" href="/">
                AgentClinic
              </a>
              <nav aria-label="Main">
                <ul>
                  {NAV.map((item) => (
                    <li>
                      <a
                        href={item.href}
                        aria-current={
                          item.section === current ? "page" : undefined
                        }
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>
          <div class="container">{children}</div>
          <footer class="site-footer">
            <div class="container">
              <p>No agents were over-prompted in the making of this site.</p>
              <p>© {new Date().getFullYear()} AgentClinic</p>
            </div>
          </footer>
        </body>
      </html>
    </>
  );
}
