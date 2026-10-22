import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Fires a Google Analytics page_view on every client-side route change.
 * GA4's default snippet only tracks the initial pageload; this ensures SPA
 * nav updates are counted as distinct pageviews.
 */
const GA_ID = "G-291KTH3VM5";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      send_to: GA_ID,
    });
  }, [location.pathname, location.search]);
}
