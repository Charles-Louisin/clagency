import Link from "next/link";
import { ProjectKoumale } from "./projects/ProjectKoumale";
import { ProjectHevecam } from "./projects/ProjectHevecam";
import { ProjectMesPoches } from "./projects/ProjectMesPoches";

type CaseStudiesSectionProps = {
  /** Sur l'accueil : aperçu + CTA. Sur /projets : catalogue complet. */
  mode?: "preview" | "full";
};

export function CaseStudiesSection({ mode = "preview" }: CaseStudiesSectionProps) {
  return (
    <section id="projets" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8 md:pt-32">
        <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-medium tracking-[-0.03em] text-ink">
          {mode === "full" ? "Tous nos projets." : "Études de cas."}
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted">
          {mode === "full"
            ? "Chaque mission a sa propre architecture et sa propre mise en page."
            : "Trois architectures. Trois mises en page. Une même exigence d\'ingénierie."}
        </p>
      </div>
      <ProjectKoumale />
      <ProjectHevecam />
      <ProjectMesPoches />

      {mode === "preview" && (
        <div className="mx-auto flex max-w-7xl justify-center px-6 pb-24 lg:px-8">
          <Link
            href="/projets"
            className="group inline-flex items-center gap-3 rounded-full border border-ink bg-transparent px-8 py-4 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-ink hover:text-background"
          >
            Voir tous les projets
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      )}
    </section>
  );
}
