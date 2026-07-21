"use client";

import { Logo } from "./Logo";

export function LoadingWithLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      aria-label="Chargement"
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Logo className="h-12 w-12 md:h-14 md:w-14" />
          <div className="pointer-events-none absolute inset-0 animate-pulse rounded-full bg-accent/10 blur-xl" />
        </div>
        <span className="sr-only">Chargement...</span>
      </div>
    </div>
  );
}

