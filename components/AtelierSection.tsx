import Image from "next/image";

const SHOTS = [
  {
    src: "/images/atelier-1.webp",
    alt: "Session de conception UI — CL Agency",
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[4/5] md:aspect-auto md:h-full",
    sizes: "(max-width: 768px) 100vw, 58vw",
  },
  {
    src: "/images/atelier-2.webp",
    alt: "Développement en cours — CL Agency",
    span: "md:col-span-5",
    aspect: "aspect-[3/4] md:aspect-[4/3]",
    sizes: "(max-width: 768px) 100vw, 42vw",
  },
  {
    src: "/images/atelier-3.webp",
    alt: "Revue d'équipe — CL Agency",
    span: "md:col-span-5",
    aspect: "aspect-[3/4] md:aspect-[4/3]",
    sizes: "(max-width: 768px) 100vw, 42vw",
  },
];

export function AtelierSection() {
  return (
    <section id="atelier" className="border-t border-border py-24 md:py-32">
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2">
          {SHOTS.map((shot) => (
            <figure
              key={shot.src}
              className={`group relative overflow-hidden border border-border bg-muted/20 ${shot.span} ${shot.aspect}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes={shot.sizes}
                quality={80}
                loading="lazy"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
