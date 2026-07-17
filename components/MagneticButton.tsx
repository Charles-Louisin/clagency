"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "outline" | "accent";
};

const VARIANTS = {
  dark: "border-ink bg-ink text-background hover:border-accent hover:bg-accent hover:text-ink",
  outline:
    "border-ink bg-transparent text-ink hover:bg-ink hover:text-background",
  accent:
    "border-accent bg-accent text-ink hover:border-ink hover:bg-ink hover:text-background",
} as const;

export function MagneticButton({
  href,
  children,
  className = "",
  variant = "dark",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.4 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.28);
    y.set(dy * 0.28);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgba(10,10,12,0.12)] transition-colors dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
