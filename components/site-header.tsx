import { ThemeToggle } from "./theme-toggle";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-background">
      <h1 className="text-4xl font-bold font-sans bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
        Pine Script Builder
      </h1>
      <ThemeToggle />
    </header>
  );
}
// This component is a simple header with a title and a theme toggle button.
