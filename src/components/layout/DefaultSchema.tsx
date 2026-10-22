import { useEffect } from "react";
import { defaultPageSchema } from "../../utils/schema";

/**
 * Injects site-wide JSON-LD (Organization, WebSite, two LocalBusiness entries
 * for Port Harcourt & Warri) on every page. Page-specific schema (Service,
 * Article, FAQPage, BreadcrumbList) is added in individual routes via useSeo.
 */
export function DefaultSchema() {
  useEffect(() => {
    const schemas = defaultPageSchema();
    const scripts: HTMLScriptElement[] = [];

    for (const [i, obj] of schemas.entries()) {
      const existing = document.head.querySelector(
        `script[data-default-schema="${i}"]`
      );
      if (existing) continue;
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-default-schema", String(i));
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
      scripts.push(s);
    }

    return () => {
      // These are site-wide and cheap to leave in place across route changes,
      // so we do NOT remove them on unmount (Layout mounts once).
    };
  }, []);

  return null;
}
