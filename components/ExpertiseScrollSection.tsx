"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BLOCKS = [
  {
    title: "Sites Vitrines & Visibilité.",
    body: "Votre présence en ligne ne doit pas être une simple carte de visite. Nous développons des vitrines ultra-rapides et optimisées, conçues spécifiquement pour transformer vos visiteurs en contacts qualifiés.",
  },
  {
    title: "Plateformes E-commerce.",
    body: "Nous créons des boutiques performantes, adaptées aux réalités de votre marché. Nous concevons des tunnels de vente sans friction pour maximiser votre chiffre d'affaires.",
  },
  {
    title: "Applications Métiers & SaaS.",
    body: "De l'outil interne de gestion au déploiement de logiciels complexes, nous digitalisons vos processus pour vous faire gagner en temps, en sécurité et en efficacité.",
  },
] as const;

function RevealBlock({ title, body }: { title: string; body: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "center center", "end 0.15"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.22, 1, 0.22]);

  return (
    <motion.div ref={ref} style={{ opacity }} className="max-w-xl">
      <h3 className="mb-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
        {title}
      </h3>
      <p className="text-lg leading-relaxed text-ink md:text-xl">
        {body}
      </p>
    </motion.div>
  );
}

export function ExpertiseScrollSection() {
  return (
    <section id="expertise" className="relative bg-background pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 lg:py-32">
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-medium tracking-[-0.03em] text-ink">
              Ce que nous construisons.
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-24 py-16 md:gap-32 lg:col-span-7 lg:py-48">
          {BLOCKS.map((block) => (
            <RevealBlock
              key={block.title}
              title={block.title}
              body={block.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
