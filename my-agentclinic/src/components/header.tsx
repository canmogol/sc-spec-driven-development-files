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

export function Header({ current }: { current: Section }) {
  return (
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
                  aria-current={item.section === current ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
