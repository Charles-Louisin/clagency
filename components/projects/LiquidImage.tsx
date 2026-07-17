"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type LiquidImageProps = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Distorsion liquide légère via canvas 2D (pas de Three.js) —
 * plus fluide et moins lourd pour une seule image.
 */
export function LiquidImage({ src, alt, className = "" }: LiquidImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5, active: false });
  const [ready, setReady] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || reduced) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = new window.Image();
    img.src = src;
    let raf = 0;
    let running = true;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const draw = () => {
      if (!running || !ctx) return;
      const { width: w, height: h } = canvas;
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, w, h);

      if (!img.complete || !img.naturalWidth) {
        raf = requestAnimationFrame(draw);
        return;
      }

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const strength = mouse.current.active ? 18 : 6;
      const time = performance.now() * 0.001;

      // Découpe en bandes pour un effet liquide léger
      const bands = 28;
      const bandH = h / bands;
      for (let i = 0; i < bands; i++) {
        const sy = i * bandH;
        const wave =
          Math.sin(sy * 0.02 + time * 1.4 + mx * 4) *
          strength *
          (1 - Math.abs(i / bands - my));
        ctx.drawImage(
          img,
          0,
          (sy / h) * img.naturalHeight,
          img.naturalWidth,
          (bandH / h) * img.naturalHeight + 1,
          wave,
          sy,
          w,
          bandH + 1
        );
      }
      raf = requestAnimationFrame(draw);
    };

    img.onload = () => {
      setReady(true);
      resize();
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;
      mouse.current.active = true;
    };
    const onLeave = () => {
      mouse.current.active = false;
    };

    wrap.addEventListener("pointermove", onMove, { passive: true });
    wrap.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, [src, reduced]);

  if (reduced) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />
    );
  }

  return (
    <div ref={wrapRef} className={`relative h-full w-full ${className}`}>
      {!ready && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-label={alt}
        role="img"
      />
    </div>
  );
}
