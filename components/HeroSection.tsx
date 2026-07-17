"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { AGENCY_NAME } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const HeroScene = dynamic(
  () => import("./hero/HeroScene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null }
);

const TITLE = "Des plateformes web qui propulsent votre entreprise.";

const words = TITLE.split(" ");

export function HeroSection() {
  const mouse = useRef({ x: 0, y: 0 });
  const [show3d, setShow3d] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => setShow3d(true), { timeout: 1200 });
    } else {
      timeoutId = setTimeout(() => setShow3d(true), 400);
    }

    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 md:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="hero-bg-gradient absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-[0.04] [mask-image:linear-gradient(180deg,#000_0%,#000_55%,transparent_100%)]" />
        {!reduced && show3d && (
          <div className="absolute inset-0 opacity-55 md:opacity-75 [mask-image:linear-gradient(180deg,#000_0%,#000_60%,transparent_100%)]">
            <HeroScene mouse={mouse} />
          </div>
        )}
        <div className="hero-fade-bottom absolute inset-x-0 bottom-0 h-40 md:h-56" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-6 py-24 md:items-center md:text-center lg:px-8">
        <p className="mb-4 font-mono text-[12px] tracking-[0.2em] text-muted uppercase">
          Agence de Développement & Ingénierie Web
        </p>

        <motion.p
          className="mb-6 text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-ink"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {AGENCY_NAME}
        </motion.p>

        <h1 className="max-w-2xl text-[clamp(1.5rem,3.2vw,2.35rem)] leading-[1.2] font-medium tracking-[-0.02em] text-foreground">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="mr-[0.28em] inline-block"
              initial={reduced ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: reduced ? 0 : 0.25 + 0.05 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="mt-10"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduced ? 0 : 1, duration: 0.45 }}
        >
          <MagneticButton href="#contact">Démarrer un projet</MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
