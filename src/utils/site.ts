/**
 * Canonical site URL.
 *
 * Precedence:
 *   1. import.meta.env.VITE_SITE_URL (set in .env / Vercel env vars for the production domain)
 *   2. window.location.origin at runtime (works on Vercel preview URLs automatically)
 *
 * Use this for canonical URLs, og:url, schema @id, and sitemap generation.
 */
export function getSiteUrl(): string {
  const env = (import.meta as any).env?.VITE_SITE_URL as string | undefined;
  if (env && env.trim()) return env.replace(/\/$/, "");
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "https://example.com";
}

export function withSiteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path) return base + "/";
  if (path.startsWith("http")) return path;
  return base + (path.startsWith("/") ? path : "/" + path);
}
