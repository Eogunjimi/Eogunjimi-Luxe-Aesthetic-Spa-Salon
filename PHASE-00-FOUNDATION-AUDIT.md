# Phase 00 — Foundation Audit

**Date:** 2026-10-16
**Live URL (currently Vercel auto):** https://eogunjimi-luxe-aesthetic-spa-salon-three.vercel.app/
**Canonical domain:** TBD — must be set before launch (e.g. luxeaestheticsspa.com)
**Brand:** Luxe Aesthetics Spa Saloon — Port Harcourt & Warri, Nigeria
**Route:** New site (existing business, brand already has directory citations)

---

## 1. Content inventory

13 service detail pages + 6 blog posts + 6 core pages = **25 indexable routes**:

| Route | Type | Title tag | H1 |
|---|---|---|---|
| `/` | Home | Luxe Aesthetics Spa Saloon \| Luxury Med Spa in Port Harcourt & Warri | ✅ "Luxury Beauty, Medical Aesthetics" |
| `/about` | About | About Us \| Luxe Aesthetics Spa Saloon, Port Harcourt & Warri | ✅ |
| `/treatments` | Services index | Treatments & Services \| Luxe Aesthetics Spa Saloon | ✅ |
| `/treatments/massage-therapy` | Service | Dynamic | ✅ |
| `/treatments/facials` | Service | Dynamic | ✅ |
| `/treatments/skin-rejuvenation` | Service | Dynamic | ✅ |
| `/treatments/non-surgical-fat-melting` | Service | Dynamic | ✅ |
| `/treatments/body-contouring` | Service | Dynamic | ✅ |
| `/treatments/hair-salon` | Service | Dynamic | ✅ |
| `/treatments/nail-care` | Service | Dynamic | ✅ |
| `/treatments/lash-extensions` | Service | Dynamic | ✅ |
| `/treatments/microblading` | Service | Dynamic | ✅ |
| `/treatments/teeth-whitening` | Service | Dynamic | ✅ |
| `/treatments/waxing` | Service | Dynamic | ✅ |
| `/treatments/skin-tag-removal` | Service | Dynamic | ✅ |
| `/treatments/piercing` | Service | Dynamic | ✅ |
| `/before-after` | Gallery | Before & After Gallery \| Luxe Aesthetics Spa Saloon | ✅ |
| `/blog` | Blog index | Luxury Wellness & Aesthetic Journal \| Luxe Aesthetics Journal | ✅ |
| `/blog/non-surgical-fat-melting-guide` | Blog post | Dynamic | ✅ |
| `/blog/signs-your-skin-needs-a-facial` | Blog post | Dynamic | ✅ |
| `/blog/massage-therapy-benefits` | Blog post | Dynamic | ✅ |
| `/blog/choosing-the-right-hair-treatment` | Blog post | Dynamic | ✅ |
| `/blog/microblading-vs-brow-tinting` | Blog post | Dynamic | ✅ |
| `/blog/prepping-for-your-first-medspa-visit` | Blog post | Dynamic | ✅ |
| `/contact` | Booking | Book an Appointment \| Luxe Aesthetics Spa Saloon | ✅ |
| `*` | 404 | Page Not Found \| Luxe Aesthetics Spa Saloon | ✅ |

---

## 2. Critical issues (must fix before launch)

| # | Severity | Issue | Evidence |
|---|----------|-------|----------|
| C1 | 🔴 Blocker | **Deep routes return Vercel 404.** `vite-plugin-singlefile` bundles everything into one `index.html`, and there's no Vercel rewrite rule sending all paths to `/`. `/about`, `/treatments/*`, `/blog/*`, `/contact`, `/before-after` all return the Vercel "404: NOT_FOUND" page. Google can only see the homepage right now. | Fetching `/about`, `/treatments/facials` returns Vercel 404. |
| C2 | 🔴 Blocker | **No `robots.txt`** — returns Vercel 404. Crawlers have no directives, and no `Sitemap:` pointer. | `GET /robots.txt` → 404 |
| C3 | 🔴 Blocker | **No `sitemap.xml`** — returns Vercel 404. Google can't discover the 25 URLs. | `GET /sitemap.xml` → 404 |
| C4 | 🔴 High | **Zero JSON-LD structured data.** For a local med spa with 2 locations and 512 Google reviews, missing `LocalBusiness` (×2), `Organization`, `Service`, `AggregateRating`, `FAQPage`, `BreadcrumbList`, `Article` schema means no rich results (star ratings, service carousels, knowledge panel). | No `<script type="application/ld+json">` anywhere in source. |
| C5 | 🔴 High | **Per-page OG/social tags are JS-only** — Facebook/Twitter/WhatsApp/iMessage link unfurls and AI crawlers see only the static OG tags in `index.html`. Every shared URL shows homepage title/description and no og:image. | `useSeo` only updates `<title>` and `<meta name="description">`; og:title, og:description, og:image, og:url, twitter:card stay static. |
| C6 | 🔴 High | **No `<link rel="canonical">`** anywhere. Risk of duplicate-content issues once custom domain + Vercel URL are both live. | Not in `index.html` or added by `useSeo`. |
| C7 | 🔴 High | **Broken image: Instagram URL used as `<img src>`.** `stock.facials[2] = "https://www.instagram.com/p/DJHA5Dqs17J"` is an Instagram post page, not an image — will 403/blank in browsers, and hotlinking is blocked. It's referenced in blog content and the facials service. | `src/data/images.ts:71`; used in `src/data/content.ts:171, 209`. |
| C8 | 🟠 High | **NAP inconsistency between site and existing web citations.** Site's `business.ts` uses phone `+234 807 269 9566` and address "64A Diobu Street, GRA Phase 3", but existing directories (ranked.ng, askannie.tortoisepath, connectciti) list phone `+234 907 664 4630` and "Diobu Street, GRA Phase 3". Inconsistent NAP kills local pack rankings. Need to confirm the correct primary phone/address and update either the site or the directories. |
| C9 | 🟠 High | **No Google Business Profile link on site.** Footer claims "4.7★ Google Rating" but doesn't link to the GBP — can't drive "leave a review" traffic, and Google likes a GBP↔website reciprocal link. | Footer has Instagram/Facebook/TikTok but no Google link. |
| C10 | 🟠 High | **Footer "FAQs" link is broken** — points to `/treatments#faqs`, but the Treatments page FAQ section has no `id="faqs"` anchor. | `src/components/layout/Footer.tsx` links to `/treatments#faqs`; `FAQSection` doesn't set an id. |
| C11 | 🟠 High | **`<html lang="en">` only — no regional targeting for Nigeria.** Content is aimed at Nigeria (NGN context, Port Harcourt/Warri) but nothing declares that. Add `lang="en-NG"` or at least ensure content signals locality strongly. | `index.html:2`. |

## 3. Medium-priority issues

| # | Issue |
|---|---|
| M1 | ~20 `<img>` tags have `alt=""` (decorative, OK for pure-decor images) — but several content images (hero bg video poster, PageHero bg, Logo) have empty alt when they should be meaningful or swapped for CSS backgrounds. |
| M2 | No AI crawler policy in robots.txt. For AEO we should explicitly allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended so AI engines cite the site. |
| M3 | H1 on Home is cut off mid-sentence: "Luxury Beauty, Medical Aesthetics" (the rest is commented out). Reads as an incomplete sentence to users and search engines. |
| M4 | Booking form is client-only — `onSubmit` calls `setSubmitted(true)` with no backend integration. Form submissions don't go anywhere. (UX/business issue, not pure SEO, but will kill conversion.) |
| M5 | Blog posts don't show author byline or publish/updated date — hurts E-E-A-T for medical-aesthetics content (Your Money or Your Life topic). |
| M6 | Service detail pages don't list price, duration prominently, or FAQ section — missing commercial intent signals. |
| M7 | No `lang`/`hreflang` alternates (not needed now but worth noting for future). |
| M8 | Review avatars include a Pexels hotlink (Tamuno B. review uses `images.pexels.com/.../pexels-photo-17362827.jpeg`) — should be self-hosted to avoid broken images and improve load speed. |
| M9 | Hero is autoplay video (`hero-bg.mp4`) — check size (it's 4.5 MB which can hurt LCP on mobile). Consider poster image + lazy-load or compressed version. |

## 4. Good (already in place)

- Per-page unique `<title>` and meta description set for all 25 routes.
- Clear site structure: Home → Treatments → Service detail, plus About / Gallery / Blog / Contact.
- Internal linking is solid (nav + footer + home CTAs + footer popular treatments link to all 8 top services).
- Strong luxury brand positioning with consistent gold/ivory/dark visual language.
- Real client reviews displayed (6 named testimonials with photos).
- Two locations modeled cleanly in `business.ts` — easy to emit LocalBusiness schema from.
- 13 services + 6 blog posts = meaningful topical coverage at launch.
- Mobile responsive via Tailwind; preconnects for Google Fonts.
- Existing directory citations (ranked.ng, askannie.tortoisepath, connectciti, plus Facebook/Instagram/TikTok) — entity footprint started.
- WhatsApp floating CTA throughout for fast conversion.

## 5. Competitor snapshot (Port Harcourt)

Top competitors that actually rank:

| Competitor | Strengths to note |
|---|---|
| **Innermost Peace Body Spa** (innerpeacebodyspa.com) | Strong on-page SEO; claims "best luxury spa in Port Harcourt"; has schema with address + LocalBusiness; offers belly-fat-snatching (direct fat-melting competitor). |
| **Archangel Macsika Spa** (archangelmacsikaspa.com) | World-class positioning, concrete stats (2000 hair removal, 20K clients, 7.5K facials); offers electrolysis, body slimming, teeth whitening — overlaps with your medical-aesthetics category. |
| **Oriki Spa, Hadi Nature Spa, Laser Med Spa, Gingerblu, Maison Wellness** | Roundup lists (knownigeria.ng, wakaabuja.com) dominate "best spas in Port Harcourt" queries — need to get listed/featured there (Phase 04). |
| **Warri competition** | Very thin web presence — early opportunity to own Warri-specific queries ("spa in Warri", "facials Warri", "massage Warri") with minimal effort. |

## 6. Blocked (need data after launch)

- **Core Web Vitals field data (CrUX)** — need the live domain with real traffic.
- **Google Search Console rankings** — verify the final domain in GSC first; can then import clicks/impressions.
- **Google Analytics 4** — no GA4 tag installed yet (add in Phase 01).
- **Backlink profile** — tools like Ahrefs/Semrush needed for full picture; nothing visible yet for the Vercel auto URL.
- **AEO baseline** — can't test ChatGPT/Perplexity/Google AI Overviews citation of a brand that isn't yet on its canonical domain. Re-run in Phase 03/06.
- **Knowledge panel / Google Business Profile** — need to confirm & claim the GBP, link it to the final site.

---

## Immediate must-do list (kicks off Phase 01)

1. Fix Vercel deep-route 404s (add `vercel.json` rewrite or switch to per-page build).
2. Replace the broken Instagram image URL in `stock.facials[2]`.
3. Add `public/robots.txt` and `public/sitemap.xml`.
4. Add canonical URL, OG/Twitter tags to `useSeo`.
5. Add JSON-LD: Organization + 2×LocalBusiness + AggregateRating on every page; Service + BreadcrumbList on service pages; Article + FAQPage on blog posts.
6. Reconcile NAP (confirm correct primary phone number + exact address format) and add Google Business Profile link to footer.
7. Add GA4 + GSC verification tags.
