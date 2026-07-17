"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PHONES = [
  {
    src: "/images/mes-poches-phone-1.PNG",
    alt: "Mes Poches — écran solde et aperçu financier",
    rotate: -8,
    yOffset: [60, -40] as [number, number],
    z: "z-20",
    delay: 0,
  },
  {
    src: "/images/mes-poches-phone-2.PNG",
    alt: "Mes Poches — liste des transactions",
    rotate: 8,
    yOffset: [100, -20] as [number, number],
    z: "z-10",
    delay: 0.08,
  },
] as const;

function PhoneFrame({
  src,
  alt,
  rotate,
  yOffset,
  z,
  delay,
  progress,
}: {
  src: string;
  alt: string;
  rotate: number;
  yOffset: [number, number];
  z: string;
  delay: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(progress, [0, 1], yOffset);

  return (
    <motion.div
      style={{ y, rotate }}
      initial={{ opacity: 0, y: 48, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${z} w-[min(42vw,220px)] will-change-transform sm:w-[240px] md:w-[260px]`}
    >
      {/* Glow aura */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-accent/8 opacity-40 blur-2xl"
      />

      <div className="rounded-[2.4rem] border border-white/15 bg-[#0B0F14] p-[10px] shadow-[0_30px_80px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.9rem] bg-[#11161d]">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#0B0F14]" />
          <Image
            src={src}
            alt={alt}
            fill
            sizes="260px"
            className="object-cover object-top"
            unoptimized
          />
          {/* Specular highlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/10"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectMesPoches() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <article
      ref={ref}
      className="overflow-hidden py-24 md:py-32"
      aria-labelledby="mespoches-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            Application Web / Gestion Financière
          </p>
          <h3
            id="mespoches-title"
            className="mt-3 text-4xl font-medium tracking-[-0.03em] text-ink md:text-5xl"
          >
            MES POCHES
          </h3>
        </div>

        {/* Dual phone stage */}
        <div className="relative mx-auto mt-16 flex max-w-3xl items-end justify-center gap-3 sm:gap-6 md:mt-20 md:gap-10">
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-[60%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl"
          />

          {PHONES.map((phone) => (
            <PhoneFrame
              key={phone.src}
              {...phone}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-10 md:mt-20 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-accent uppercase">
              Le Défi
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Transformer le suivi des finances quotidiennes en une expérience
              utilisateur intuitive et instantanée, sans friction.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-accent uppercase">
              Notre Solution
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Nous avons conçu une application web fluide, épurée à
              l&apos;essentiel. Déployée sur une infrastructure cloud moderne,
              elle garantit une sécurité maximale et des temps de chargement
              quasi nuls.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-accent uppercase">
              Le Résultat
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Un outil de gestion de trésorerie moderne, léger et redoutablement
              efficace au quotidien.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
