"use client";

import { useTheme } from "@/components/theme/ThemeProvider";

type LogoProps = {
  className?: string;
};

/** Logo = fragments géométriques uniquement (sans fond, viewBox resserré). */
export function Logo({ className = "h-10 w-10" }: LogoProps) {
  const { theme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";
  const uid = "logo";

  const monolithStops = isDark
    ? ["#FFFFFF", "#A3A3A3", "#404040"]
    : ["#0A0A0C", "#404040", "#A3A3A3"];

  const strokeColor = isDark ? "#E6E8EE" : "#0A0A0C";
  const accentColor = isDark ? "#3ECFBA" : "#00C4A8";
  const neonStops = isDark
    ? ["#3ECFBA", "#7B2CBF"]
    : ["#00C4A8", "#7B2CBF"];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="155 100 200 205"
      className={className}
      aria-label="Logo CL Agency"
      role="img"
    >
      <defs>
        <linearGradient id={`${uid}-monolith`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={monolithStops[0]} />
          <stop offset="55%" stopColor={monolithStops[1]} />
          <stop offset="100%" stopColor={monolithStops[2]} />
        </linearGradient>
        <linearGradient id={`${uid}-neon`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={neonStops[0]} />
          <stop offset="100%" stopColor={neonStops[1]} />
        </linearGradient>
        <filter id={`${uid}-glow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M 250,130 L 330,270 L 170,250 Z"
        fill={`url(#${uid}-neon)`}
        opacity="0.35"
        filter={`url(#${uid}-glow)`}
      />
      <path
        d="M 250,110 L 320,260 L 220,290 Z"
        fill={`url(#${uid}-monolith)`}
      />
      <path
        d="M 160,210 L 250,110 L 200,280 Z"
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeOpacity={isDark ? 0.7 : 0.55}
        strokeDasharray="4 2"
      />
      <circle
        cx="340"
        cy="190"
        r="5"
        fill={accentColor}
        filter={`url(#${uid}-glow)`}
      />
      <line
        x1="250"
        y1="110"
        x2="340"
        y2="190"
        stroke={strokeColor}
        strokeDasharray="2 8"
        strokeOpacity={isDark ? 0.45 : 0.35}
        strokeWidth="1.5"
      />
    </svg>
  );
}
