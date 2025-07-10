import { ThemeToggle } from "./theme-toggle";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-background">
      <h1 className="text-xl font-semibold tracking-tight">
        Pine Script Builder
      </h1>
      <ThemeToggle />
    </header>
  );
}
