"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed right-5 bottom-5 z-50 md:right-8 md:bottom-8">
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            aria-label="Remonter en haut de page"
            initial={
              reduced
                ? { opacity: 0 }
                : { opacity: 0, y: 32, scale: 0.75, rotate: -12 }
            }
            animate={
              reduced
                ? { opacity: 1 }
                : { opacity: 1, y: 0, scale: 1, rotate: 0 }
            }
            exit={
              reduced
                ? { opacity: 0 }
                : { opacity: 0, y: 24, scale: 0.8, rotate: 8 }
            }
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 28,
              mass: 0.65,
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="pointer-events-auto group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-border bg-surface/90 text-ink shadow-[0_10px_36px_rgba(0,0,0,0.16)] backdrop-blur-md"
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 transition-colors duration-300 group-hover:from-accent/25 group-hover:to-accent/10"
            />
            <motion.span
              aria-hidden
              className="relative block"
              whileHover={reduced ? undefined : { y: -3 }}
              whileTap={reduced ? undefined : { y: 0, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 500, damping: 22 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5" />
                <path d="m5 12 7-7 7 7" />
              </svg>
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
