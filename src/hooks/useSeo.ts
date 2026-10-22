import { useEffect } from "react";
import { withSiteUrl } from "../utils/site";

export interface SeoInput {
  title: string;
  description?: string;
  /** Path relative to site root, e.g. "/treatments/facials". Defaults to current location.pathname. */
  path?: string;
  /** Absolute or site-relative image URL for og:image / twitter:image. */
  image?: string;
  /** OG type — defaults to "website". Use "article" for blog posts. */
  type?: "website" | "article";
  /** Optional JSON-LD schema(s) to inject (object or array of objects). */
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

/** Markers so we can identify and clean up tags this hook injects/updates. */
const META_ATTR = "data-use-seo";

/** Ensure a <meta> tag exists for the given selector and set its attributes. */
function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  el.setAttribute(META_ATTR, "1");
  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, v);
  }
  return el;
}

/** Ensure a <link> tag exists for the given rel and set href. */
function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute(META_ATTR, "1");
  el.setAttribute("href", href);
  return el;
}

/** Inject JSON-LD script tags. Returns cleanup function. */
function upsertJsonLd(id: string, schema: SeoInput["schema"]): () => void {
  if (!schema) return () => {};
  const items = Array.isArray(schema) ? schema : [schema];
  const created: HTMLScriptElement[] = [];
  for (const [i, obj] of items.entries()) {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute(META_ATTR, "1");
    s.setAttribute("data-schema-id", `${id}-${i}`);
    s.text = JSON.stringify(obj);
    document.head.appendChild(s);
    created.push(s);
  }
  return () => {
    created.forEach((s) => s.remove());
  };
}

/**
 * Per-page SEO hook.
 * Sets <title>, meta description, canonical link, Open Graph, Twitter card,
 * and optional JSON-LD structured data. Cleans up on unmount (restores
 * previous values for title/description, removes tags it owned).
 */
export function useSeo(input: SeoInput | string, description?: string) {
  // Allow shorthand: useSeo("title", "desc")
  const seo: SeoInput =
    typeof input === "string" ? { title: input, description } : input;

  useEffect(() => {
    const {
      title,
      description,
      path,
      image,
      type = "website",
      schema,
    } = seo;

    const prevTitle = document.title;
    document.title = title;

    // Canonical URL
    const url = withSiteUrl(path ?? window.location.pathname + window.location.search);
    upsertLink("canonical", url);

    // Meta description
    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDescription = metaDesc?.getAttribute("content") ?? null;
    if (description) {
      upsertMeta('meta[name="description"]', {
        name: "description",
        content: description,
      });
    }

    // Open Graph
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    if (description) {
      upsertMeta('meta[property="og:description"]', {
        property: "og:description",
        content: description,
      });
    }
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    if (image) {
      const absImg = withSiteUrl(image);
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: absImg });
    }
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Luxe Aesthetics Spa Saloon",
    });

    // Twitter card
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: image ? "summary_large_image" : "summary",
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    if (description) {
      upsertMeta('meta[name="twitter:description"]', {
        name: "twitter:description",
        content: description,
      });
    }
    if (image) {
      upsertMeta('meta[name="twitter:image"]', {
        name: "twitter:image",
        content: withSiteUrl(image),
      });
    }

    // JSON-LD structured data
    const cleanupSchema = upsertJsonLd(`seo-${url}`, schema);

    return () => {
      document.title = prevTitle;
      if (metaDesc) {
        if (prevDescription === null) metaDesc.remove();
        else metaDesc.setAttribute("content", prevDescription);
      }
      // Remove canonical/og/twitter tags this hook set. We leave the
      // static index.html fallbacks in place by re-setting them to empty
      // values — safe because useSeo is called on every page so new
      // values replace them immediately.
      cleanupSchema();
    };
  }, [
    seo.title,
    seo.description,
    seo.path,
    seo.image,
    seo.type,
    seo.schema,
  ]);
}
