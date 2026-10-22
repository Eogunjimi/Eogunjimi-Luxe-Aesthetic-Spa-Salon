// Generate public/sitemap.xml from the site's route structure.
// Reads src/data/treatments.ts and src/data/content.ts to pull slugs.
// Site URL precedence:
//   1. SITE_URL env var (CLI or CI)
//   2. VITE_SITE_URL env var (from .env.local / Vercel)
//   3. VERCEL_URL (Vercel preview auto-URL)
//   4. https://example.com (fallback)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Manually load .env.local if it exists (Vite auto-loads it for the build
// but our prebuild Node script doesn't go through Vite, so we do it here).
function loadDotEnv() {
  const tryLoad = (file) => {
    try {
      const p = path.join(ROOT, file);
      if (!fs.existsSync(p)) return;
      const text = fs.readFileSync(p, "utf8");
      for (const line of text.split(/\r?\n/)) {
        const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/i);
        if (!m) continue;
        const k = m[1];
        let v = m[2];
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
          v = v.slice(1, -1);
        }
        if (process.env[k] === undefined) process.env[k] = v;
      }
    } catch (_) {
      /* ignore */
    }
  };
  tryLoad(".env.production");
  tryLoad(".env.local");
  tryLoad(".env");
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
loadDotEnv();

function read(p) {
  return fs.readFileSync(path.join(ROOT, p), "utf8");
}

// We deliberately avoid importing TS at build time — extract slugs with regex.
function extractSlugsFromConst(src, constName) {
  const re = new RegExp(`export const ${constName}[^[]*\\[([\\s\\S]*?)\\];`);
  const m = src.match(re);
  if (!m) return [];
  return [...m[1].matchAll(/slug:\s*"([^"]+)"/g)].map((x) => x[1]);
}

const treatments = extractSlugsFromConst(read("src/data/treatments.ts"), "treatments");
const blogPosts = extractSlugsFromConst(read("src/data/content.ts"), "blogPosts");

const coreRoutes = ["", "/about", "/treatments", "/before-after", "/blog", "/contact"];

const urls = [
  ...coreRoutes.map((p) => ({ loc: p, priority: p === "" ? "1.0" : "0.8", changefreq: "weekly" })),
  ...treatments.map((slug) => ({ loc: `/treatments/${slug}`, priority: "0.7", changefreq: "monthly" })),
  ...blogPosts.map((slug) => ({ loc: `/blog/${slug}`, priority: "0.6", changefreq: "monthly" })),
];

// Determine base URL.
let siteUrl =
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  (process.env.VERCEL_URL
    ? process.env.VERCEL_ENV === "production" && process.env.PRODUCTION_URL
      ? `https://${process.env.PRODUCTION_URL}`
      : `https://${process.env.VERCEL_URL}`
    : undefined);

if (!siteUrl) {
  console.warn(
    "⚠️  No SITE_URL / VITE_SITE_URL / VERCEL_URL set — sitemap will use https://example.com as placeholder."
  );
  siteUrl = "https://example.com";
}

const base = siteUrl.replace(/\/$/, "");

const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>
    <loc>${base}${u.loc}${u.loc === "" ? "/" : ""}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, "public/sitemap.xml"), xml);
console.log(`✅ sitemap.xml generated (${urls.length} URLs, base=${base})`);
