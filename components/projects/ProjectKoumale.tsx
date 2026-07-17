"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ProjectKoumale() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yPhone = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [8, -6]);

  return (
    <article
      ref={ref}
      className="border-b border-border py-24 md:py-32"
      aria-labelledby="koumale-title"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative flex justify-center lg:order-2">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--accent)_15%,transparent),transparent_65%)]" />
          <motion.div
            style={{ y: yPhone, rotate }}
            className="relative w-[240px] will-change-transform md:w-[280px]"
          >
            <div className="rounded-[2.5rem] border border-white/15 bg-[#111114] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.25)]">
              <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-[#16161a]">
                <div className="absolute top-0 left-1/2 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#111114]" />
                <Image
                  src="/images/koumale-mobile.webp"
                  alt="Interface mobile KOUMALE — marketplace multi-vendeurs"
                  fill
                  sizes="280px"
                  quality={75}
                  loading="lazy"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-4 bottom-6 rounded-2xl border border-white/10 bg-[#0A0A0C]/85 p-4 backdrop-blur-sm">
                  <p className="font-mono text-[10px] tracking-wider text-accent-bright uppercase">
                    WhatsApp direct
                  </p>
                  <p className="mt-1 text-xs text-white/80">
                    Commande finalisée chez le vendeur
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:order-1">
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            Marketplace Multi-vendeurs
          </p>
          <h3
            id="koumale-title"
            className="mt-3 text-4xl font-medium tracking-[-0.03em] text-ink md:text-5xl"
          >
            KOUMALE
          </h3>

          <div className="mt-10 space-y-8">
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-accent uppercase">
                Le Défi
              </h4>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Digitaliser les commerçants locaux tout en respectant les
                habitudes des acheteurs, pour qui les systèmes de paiement en
                ligne traditionnels représentent souvent un obstacle.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-accent uppercase">
                Notre Solution
              </h4>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Nous avons conçu et déployé une marketplace sur mesure,
                ultra-rapide sur mobile. La force de notre architecture ? Un
                tunnel de conversion direct. L&apos;acheteur parcourt le
                catalogue et finalise sa commande directement dans la messagerie
                privée WhatsApp du vendeur, sans aucun module de paiement en
                ligne complexe à configurer.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-accent uppercase">
                Le Résultat
              </h4>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Des ventes accélérées, une relation client instantanée, et une
                technologie robuste.
              </p>
            </div>
          </div>

          <p className="mt-10 border border-accent/30 bg-accent/5 px-5 py-4 text-sm leading-relaxed text-foreground">
            <span className="font-semibold text-ink">Licence disponible.</span>{" "}
            L&apos;architecture KOUMALE est proposée à la vente / exploitation
            commerciale.{" "}
            <a
              href="/#tarifs"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              Voir les licences
            </a>
            {" · "}
            <a
              href="/#contact"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              Nous contacter
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
