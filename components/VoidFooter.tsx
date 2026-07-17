"use client";

import { useEffect, useRef, useState } from "react";
import { AGENCY_NAME } from "@/lib/constants";

function FooterLines({ className }: { className: string }) {
  return (
    <p className={className}>
      <span className="block">LANCEZ UN PROJET</span>
      <span className="block">AVEC NOUS</span>
    </p>
  );
}

export function VoidFooter() {
  const ref = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !isDesktop) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    return () => el.removeEventListener("pointermove", onMove);
  }, [isDesktop]);

  const textClass =
    "w-full text-center text-[clamp(1.75rem,9vw,6.5rem)] leading-[0.95] font-semibold tracking-[-0.04em]";

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-black py-28 md:py-40"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      <div className="pointer-events-none relative select-none px-4">
        {/* Mobile : texte entièrement éclairé */}
        <FooterLines className={`${textClass} text-white md:hidden`} />

        {/* Desktop : spotlight au curseur */}
        <div className="hidden md:block">
          <FooterLines className={`${textClass} text-white/10`} />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle 160px at var(--mx) var(--my), #000 20%, transparent 70%)",
              maskImage:
                "radial-gradient(circle 160px at var(--mx) var(--my), #000 20%, transparent 70%)",
            }}
          >
            <FooterLines className={`${textClass} text-white`} />
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-7xl px-6 text-center text-xs tracking-wider text-white/35 uppercase lg:px-8">
        <p>
          © {new Date().getFullYear()} {AGENCY_NAME} — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
