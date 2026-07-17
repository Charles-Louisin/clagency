"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
  { label: "Villages couverts", value: "19" },
  { label: "Synchronisation", value: "Temps réel" },
  { label: "Modules métiers", value: "12+" },
  { label: "Disponibilité", value: "60%" },
] as const;

export function ProjectHevecam() {
  return (
    <article
      className="border-b border-border py-24 md:py-32"
      aria-labelledby="hevecam-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            SaaS / Système de Gestion Hospitalière
            <span className="mx-2.5 text-foreground/25" aria-hidden>
              —
            </span>
            <span className="text-ink/70 normal-case tracking-normal">
              En cours
            </span>
          </p>
          <h3
            id="hevecam-title"
            className="mt-3 text-4xl font-medium tracking-[-0.03em] text-ink md:text-5xl"
          >
            HEVECAM
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="relative min-h-[280px] overflow-hidden border border-border bg-surface md:col-span-8 md:min-h-[360px]"
          >
            <Image
              src="/images/hevecam-dashboard.png"
              alt="Dashboard SaaS HEVECAM — gestion hospitalière"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover opacity-80"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute right-4 bottom-4 left-4 md:right-6 md:bottom-6 md:left-6">
              <p className="font-mono text-[10px] tracking-wider text-accent-bright uppercase">
                Infrastructure multi-sites
              </p>
              <p className="mt-1 text-sm text-white/80">
                Opérations synchronisées sur 19 villages
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:col-span-4 md:grid-rows-2">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.05 * i }}
                className="flex flex-col justify-between border border-border bg-surface p-5"
              >
                <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
                  {stat.label}
                </span>
                <span className="mt-6 text-2xl font-medium tracking-tight text-ink md:text-3xl">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8 border border-border bg-surface p-8 md:col-span-5 md:p-10">
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-accent uppercase">
                Le Défi
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                Unifier et moderniser la gestion sanitaire d&apos;un réseau
                médical étendu, en abandonnant les processus manuels pour une
                infrastructure centralisée.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-accent uppercase">
                Notre Solution
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                Nous avons architecturé et développé un système de gestion
                complet, pensé pour être extrêmement robuste et sécurisé. La
                plateforme digitalise et synchronise les opérations médicales et
                administratives à travers 19 villages différents.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-end border border-border bg-surface p-8 md:col-span-7 md:p-10">
            <h4 className="text-sm font-semibold tracking-wide text-accent uppercase">
              Le Résultat
            </h4>
            <p className="mt-2 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl">
              Une plateforme métier haute performance démontrant notre capacité
              à structurer des flux de données critiques sur de multiples sites
              physiques simultanément.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
