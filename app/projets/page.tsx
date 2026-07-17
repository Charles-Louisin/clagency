import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { VoidFooter } from "@/components/VoidFooter";
import { AGENCY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Projets — ${AGENCY_NAME}`,
  description:
    "Toutes les études de cas et réalisations de CL Agency : marketplaces, SaaS et applications métiers.",
};

export default function ProjetsPage() {
  return (
    <>
      <header className="border-b border-border bg-background">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={`${AGENCY_NAME} — Accueil`}
          >
            <Logo className="h-10 w-10" />
            <span className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
              {AGENCY_NAME}
            </span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
          <Link
            href="/"
            className="font-mono text-[11px] tracking-wider text-muted uppercase transition-colors hover:text-ink"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
        <CaseStudiesSection mode="full" />
      </main>

      <VoidFooter />
    </>
  );
}
