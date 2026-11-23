import paths from "@/lib/logo-paths.json";
import type { Lang } from "@/lib/i18n";

// Brand guide 1.3 colour variations: pick by the background the logo sits on.
//   light  → orange mark + navy wordmark (white / light backgrounds)
//   dark   → orange mark + white wordmark (navy backgrounds)
//   orange → all white (orange backgrounds)
const TONES = {
  light: { mark: "#fc5302", word: "#172532" },
  dark: { mark: "#fc5302", word: "#ffffff" },
  orange: { mark: "#ffffff", word: "#ffffff" },
} as const;
export type LogoTone = keyof typeof TONES;

const ratio = (vb: string) => { const [, , w, h] = vb.split(" ").map(Number); return w / h; };

/** Full logo (mark + wordmark). Arabic pages use the Arabic version (guide 1.2). Min width 200px (guide 1.5). */
export function Logo({ lang = "en", tone = "dark", width = 200, className = "" }: { lang?: Lang; tone?: LogoTone; width?: number; className?: string }) {
  const p = lang === "ar" ? paths.ar : paths.en;
  const w = Math.max(width, 200);
  const c = TONES[tone];
  return (
    <svg role="img" aria-label={lang === "ar" ? "فيرتكس" : "Vertex"} viewBox={p.viewBox} width={w} height={w / ratio(p.viewBox)} className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill={c.mark} d={p.mark} />
      <path fill={c.word} d={p.word} />
    </svg>
  );
}

/** Logomark only. Min height 40px (guide 1.5). */
export function LogoMark({ color = "#fc5302", height = 120, className = "" }: { color?: string; height?: number; className?: string }) {
  const p = paths.markOnly;
  const h = Math.max(height, 40);
  return (
    <svg aria-hidden="true" viewBox={p.viewBox} height={h} width={h * ratio(p.viewBox)} className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d={p.mark} />
    </svg>
  );
}
