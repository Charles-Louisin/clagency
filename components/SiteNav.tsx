"use client";

import { Logo } from "./Logo";
import { ThemeToggle } from "./theme/ThemeToggle";
import { AGENCY_NAME, NAV_LINKS } from "@/lib/constants";

const MAIN_LINKS = NAV_LINKS.filter((l) => l.href !== "#contact");

export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 bg-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3"
          aria-label={`${AGENCY_NAME} — Accueil`}
        >
          <Logo className="h-10 w-10 md:h-11 md:w-11" />
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
            {AGENCY_NAME}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {MAIN_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[13px] text-muted transition-colors hover:bg-overlay-hover hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
