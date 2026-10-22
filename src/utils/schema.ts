import { business } from "../data/business";
import { getSiteUrl } from "./site";

/**
 * Centralized schema builders for Luxe Aesthetics.
 * All output is plain JSON-LD ready to pass into useSeo({ schema }) or inject directly.
 *
 * Reference: https://schema.org
 */

const SITE = getSiteUrl();
const ORG_ID = `${SITE}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: business.name,
    alternateName: business.shortName,
    url: SITE,
    logo: `${SITE}/images/logo_final.png`,
    slogan: business.tagline,
    description:
      "Luxury 24/7 med spa, beauty salon and wellness destination in Port Harcourt and Warri, Nigeria.",
    telephone: business.phone,
    email: business.email,
    sameAs: [business.social.instagram, business.social.facebook, business.social.tiktok],
    aggregateRating: aggregateRatingSchema(),
  };
}

export function aggregateRatingSchema() {
  return {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
    bestRating: "5",
    worstRating: "1",
  };
}

export function localBusinessSchema(locationId: string) {
  const loc = business.locations.find((l) => l.id === locationId);
  if (!loc) throw new Error(`Unknown location id: ${locationId}`);
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "BeautySalon", "HealthAndBeautyBusiness"],
    "@id": `${SITE}/#${loc.id}`,
    name: `${business.name} — ${loc.city}`,
    parentOrganization: { "@id": ORG_ID },
    url: `${SITE}/contact`,
    telephone: business.phone,
    email: business.email,
    image: `${SITE}/images/salon_1.jpg`,
    priceRange: "₦₦",
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressRegion: loc.state,
      addressCountry: "NG",
    },
    geo: geoFromAddress(loc.city),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: aggregateRatingSchema(),
    sameAs: [business.social.instagram, business.social.facebook, business.social.tiktok],
  };
}

function geoFromAddress(city: string) {
  // Approximate coordinates for these cities — refine with exact GBP pins later.
  if (city === "Port Harcourt") {
    return { "@type": "GeoCoordinates", latitude: 4.8242, longitude: 7.0428 };
  }
  if (city === "Warri") {
    return { "@type": "GeoCoordinates", latitude: 5.532, longitude: 5.773 };
  }
  return undefined;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: business.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-NG",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/treatments?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: withAbs(item.path),
    })),
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  path: string;
  category?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    serviceType: args.name,
    category: args.category,
    url: withAbs(args.path),
    image: args.image ? withAbs(args.image) : `${SITE}/images/salon_1.jpg`,
    provider: { "@id": ORG_ID },
    areaServed: business.locations.map((l) => ({
      "@type": "City",
      name: l.city,
    })),
    availableLanguage: ["English"],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function articleSchema(args: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    url: withAbs(args.path),
    image: args.image ? withAbs(args.image) : `${SITE}/images/blog-hero.jpg`,
    datePublished: args.datePublished ?? new Date().toISOString().slice(0, 10),
    dateModified: args.dateModified ?? new Date().toISOString().slice(0, 10),
    author: {
      "@type": "Person",
      name: args.authorName ?? "Dr. Eve Ejaife",
    },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: withAbs(args.path),
    inLanguage: "en-NG",
  };
}

export function reviewSchema(args: {
  author: string;
  ratingValue: number;
  reviewBody: string;
}) {
  return {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: args.ratingValue,
      bestRating: "5",
    },
    author: { "@type": "Person", name: args.author },
    reviewBody: args.reviewBody,
    publisher: { "@id": ORG_ID },
  };
}

/** Core schema set every page should include. */
export function defaultPageSchema() {
  return [
    organizationSchema(),
    websiteSchema(),
    localBusinessSchema("port-harcourt"),
    localBusinessSchema("warri"),
  ];
}

function withAbs(p: string) {
  if (!p) return SITE;
  if (p.startsWith("http")) return p;
  return SITE + (p.startsWith("/") ? p : "/" + p);
}
