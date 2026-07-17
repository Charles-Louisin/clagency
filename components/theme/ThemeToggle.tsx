"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

const PAD = 4; // p-1
const KNOB = 32; // h-8 w-8

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const reduced = useReducedMotion();
  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? isDark
            ? "Activer le thème clair"
            : "Activer le thème sombre"
          : "Changer de thème"
      }
      className="group relative h-10 w-[4.5rem] shrink-0 rounded-full border border-border bg-surface/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-500 hover:border-accent/40"
    >
      {!mounted ? (
        <span
          className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/8"
          aria-hidden
        />
      ) : (
        <>
          <motion.span
            className="absolute top-1 z-0 h-8 w-8 rounded-full bg-gradient-to-br from-accent/35 to-accent/10 shadow-[0_2px_10px_rgba(0,0,0,0.12)]"
            initial={false}
            animate={{
              left: isDark ? `calc(100% - ${PAD + KNOB}px)` : `${PAD}px`,
            }}
            transition={
              reduced
                ? { duration: 0 }
                : { type: "spring", stiffness: 380, damping: 32, mass: 0.7 }
            }
            aria-hidden
          />
          <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between px-2.5">
            <SunIcon
              className={`h-3.5 w-3.5 transition-colors duration-500 ${!isDark ? "text-accent" : "text-muted"}`}
            />
            <MoonIcon
              className={`h-3.5 w-3.5 transition-colors duration-500 ${isDark ? "text-accent" : "text-muted"}`}
            />
          </span>
        </>
      )}
    </button>
  );
}
