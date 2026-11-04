import type { Child } from "hono/jsx";

export function Main({ children }: { children?: Child }) {
  return (
    <div class="container">
      <main>{children}</main>
    </div>
  );
}
