"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  OPEN_SERVICE_EVENT,
  PREFERRED_SERVICE_STORAGE_KEY,
  SERVICES,
  type ServiceOffer,
} from "@/lib/constants";

function PriceCard({ offer, index }: { offer: ServiceOffer; index: number }) {
  const ref = useRef<HTMLElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--gy", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`group relative flex flex-col overflow-hidden border bg-surface p-7 md:p-8 ${
        offer.featured ? "border-accent/45" : "border-border"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--gx, 50%) var(--gy, 50%), color-mix(in srgb, var(--accent) 12%, transparent), transparent 55%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
          {offer.tag}
        </span>
        <div className="text-right">
          {offer.priceHint && (
            <p className="font-mono text-[10px] tracking-wider text-muted uppercase">
              {offer.priceHint}
            </p>
          )}
          <p className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {offer.priceLabel}
          </p>
        </div>
      </div>

      <h3 className="relative mt-5 text-xl font-semibold tracking-tight text-ink md:text-2xl">
        {offer.title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted">
        {offer.description}
      </p>

      <ul className="relative mt-6 flex flex-1 flex-col gap-2.5">
        {offer.includes.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm leading-snug text-foreground/75"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>

      {offer.delivery && (
        <p className="relative mt-6 font-mono text-[11px] tracking-wide text-accent">
          {offer.delivery}
        </p>
      )}

      <a
        href="#contact"
        className="relative mt-8 inline-flex text-sm font-medium tracking-wide text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
        onClick={(e) => {
          e.preventDefault();
          try {
            sessionStorage.setItem(PREFERRED_SERVICE_STORAGE_KEY, offer.id);
          } catch {
            /* ignore */
          }
          window.dispatchEvent(
            new CustomEvent(OPEN_SERVICE_EVENT, { detail: offer.id })
          );
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Choisir cette offre →
      </a>
    </motion.article>
  );
}

export function PricingCards() {
  return (
    <section id="tarifs" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-medium tracking-[-0.03em] text-ink">
            Nos Solutions & Tarification.
          </h2>
          <p className="mt-4 text-base text-muted">
            Sélectionnez
            celle qui correspond à votre besoin — nous finalisons ensemble dans
            la section contact.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((offer, i) => (
            <PriceCard key={offer.id} offer={offer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
