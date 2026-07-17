"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Audit & Stratégie",
    body: "Nous analysons vos processus et vos enjeux business pour définir l'architecture technologique exacte dont vous avez besoin.",
    span: "md:col-span-7",
  },
  {
    n: "02",
    title: "Conception UI/UX",
    body: "Nous créons des interfaces modernes, fluides et centrées sur l'utilisateur pour garantir la meilleure expérience possible.",
    span: "md:col-span-5",
  },
  {
    n: "03",
    title: "Développement & Tests",
    body: "Nous écrivons un code propre, performant et soumis à un contrôle qualité rigoureux avant chaque livraison.",
    span: "md:col-span-5",
  },
  {
    n: "04",
    title: "Déploiement",
    body: "Nous assurons une mise en production sécurisée et une intégration parfaite au cœur de votre activité.",
    span: "md:col-span-7",
  },
] as const;

function StepCard({
  n,
  title,
  body,
  span,
}: {
  n: string;
  title: string;
  body: string;
  span: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "center center", "end 0.2"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 1, 0.35]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.08, 0.35, 0.08]);

  return (
    <motion.article
      ref={ref}
      style={{ opacity }}
      className={`group relative bg-surface p-8 md:p-10 ${span}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 border-2 border-accent"
        style={{ opacity: borderOpacity }}
      />
      <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
        {n}
      </span>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink md:text-2xl">
        {title}
      </h3>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        {body}
      </p>
      <div className="mt-8 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-accent/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  );
}

export function MethodologyGrid() {
  return (
    <section
      id="processus"
      className="relative border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-16 max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-medium tracking-[-0.03em] text-ink">
          Notre processus d&apos;ingénierie.
        </h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-12">
          {STEPS.map((step) => (
            <StepCard key={step.n} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
