import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { ScrollToTop } from "./ScrollToTop";
import { DefaultSchema } from "./DefaultSchema";
import { usePageViews } from "../../hooks/usePageViews";

export function Layout({ children }: { children: ReactNode }) {
  usePageViews();
  return (
    <div className="relative min-h-screen bg-ivory">
      <DefaultSchema />
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
