"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SHOTS = [
  {
    src: "/images/atelier-1.jpg",
    alt: "Session de conception UI — CL Agency",
    caption: "Conception & wireframes",
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[4/5] md:aspect-auto md:min-h-[520px]",
  },
  {
    src: "/images/atelier-2.jpg",
    alt: "Développement en cours — CL Agency",
    caption: "Ingénierie produit",
    span: "md:col-span-5",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/atelier-3.jpg",
    alt: "Revue d'équipe — CL Agency",
    caption: "Revue & itération",
    span: "md:col-span-5",
    aspect: "aspect-[16/10]",
  },
] as const;

export function AtelierSection() {
  return (
    <section
      id="atelier"
      className="border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            Dans l&apos;atelier
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-medium tracking-[-0.03em] text-ink">
            Nous, en plein travail.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Derrière chaque livraison : des sessions de conception, du code
            soigné et des échanges constants avec vos équipes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {SHOTS.map((shot, i) => (
            <motion.figure
              key={shot.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`group relative overflow-hidden border border-border bg-surface ${shot.span} ${shot.aspect}`}
            >
              {/* Remplacez les SVG par vos photos (jpg/png/webp) dans /public/images/ */}
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                unoptimized
              />
              {/* <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-5 py-4 text-sm text-white">
                {shot.caption}
              </figcaption> */}
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
