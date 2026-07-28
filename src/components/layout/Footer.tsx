import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "../ui/SocialIcons";
import { business, whatsappLink } from "../../data/business";
import { treatments } from "../../data/treatments";

const popularTreatments = treatments.slice(0, 8);

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark text-cream">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <Container className="relative py-20">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
              A luxury spa, medical aesthetics &amp; beauty destination — open 24 hours in Port Harcourt &amp; Warri.
              Experience the Luxe difference.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[
                { icon: InstagramIcon, href: business.social.instagram, label: "Instagram" },
                { icon: FacebookIcon, href: business.social.facebook, label: "Facebook" },
                { icon: TikTokIcon, href: business.social.tiktok, label: "TikTok" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold-light"
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">Treatments</h3>
            <ul className="mt-6 space-y-3">
              {popularTreatments.map((t) => (
                <li key={t.slug}>
                  <Link to={`/treatments/${t.slug}`} className="text-sm text-cream/65 transition-colors hover:text-gold-light">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">Quick Links</h3>
            <ul className="mt-6 space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Before & After", href: "/before-after" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "FAQs", href: "/treatments#faqs" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-cream/65 transition-colors hover:text-gold-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">Contact</h3>
            <ul className="mt-6 space-y-4 text-sm text-cream/65">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold-light" />
                <a href={business.phoneHref} className="hover:text-gold-light">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold-light" />
                <a href={`mailto:${business.email}`} className="hover:text-gold-light">
                  {business.email}
                </a>
              </li>
              {business.locations.map((loc) => (
                <li key={loc.id} className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold-light" />
                  <span>{loc.address}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light hover:text-gold"
            >
              Message on WhatsApp →
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-cream/10 pt-8 text-center text-xs text-cream/50 sm:flex-row sm:justify-between sm:text-left">
          <p>
            ★★★★★ {business.rating} Google Rating &nbsp;•&nbsp; #1 TripAdvisor Spa &nbsp;•&nbsp; Open 24/7 &nbsp;•&nbsp;
            Premium Luxury Experience
          </p>
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
