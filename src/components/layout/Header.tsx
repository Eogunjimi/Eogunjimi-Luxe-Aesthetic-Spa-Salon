import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "../ui/Button";
import { navLinks, whatsappLink } from "../../data/business";
import { cn } from "../../utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || open ? "glass shadow-[0_4px_30px_rgba(14,14,14,0.06)]" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[100rem] items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "relative text-[13px] font-medium uppercase tracking-[0.14em] text-ink/75 transition-colors hover:text-gold-dark",
                  isActive && "text-gold-dark"
                )
              }
            >
              {({ isActive }) => (
                <span className="relative pb-1">
                  {link.label}
                  {isActive && (
                    <motion.span layoutId="nav-underline" className="absolute -bottom-0 left-0 h-px w-full bg-gold" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
          <Button to="/contact" size="lg">
            Book Now
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden glass lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="border-b border-ink/10 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-ink/80"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-5 flex flex-col gap-3">
                <Button to="/contact" size="md" className="w-full">
                  Book Appointment
                </Button>
                <Button href={whatsappLink()} variant="secondary" size="md" className="w-full">
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
