import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { heroImages } from "../../data/images";
import { business, whatsappLink } from "../../data/business";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-dark pt-28">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImages.home}
          alt="Client relaxing during a luxury facial treatment at Luxe Aesthetics Spa Saloon"
          className="h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-transparent to-dark/40" />
      </motion.div>

      <div className="pointer-events-none absolute right-[8%] top-[22%] hidden h-64 w-64 rounded-full border border-gold-light/20 lg:block animate-float" />

      <Container className="relative pb-20 pt-16 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold-light/30 bg-white/10 px-5 py-2.5 backdrop-blur-md"
        >
          <span className="flex items-center gap-1 text-gold-light">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} className="fill-gold-light text-gold-light" />
            ))}
          </span>
          <span className="text-xs font-medium tracking-wide text-cream/90">
            Rated {business.rating} on Google &nbsp;•&nbsp; #1 Spa in Port Harcourt
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-[40px] font-medium leading-[1.08] text-ivory sm:text-[56px] lg:text-[66px]"
        >
          Luxury Beauty, Medical Aesthetics &amp; Wellness{" "}
          <span className="text-gradient-gold font-display italic">— All Under One Roof.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
        >
          Experience advanced aesthetic treatments, rejuvenating spa therapies, luxury salon services, and
          personalized wellness care in Port Harcourt &amp; Warri's premier beauty destination.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button to="/contact" size="lg" icon={<ArrowRight size={16} />}>
            Book Appointment
          </Button>
          <Button to="/treatments" variant="secondary" size="lg" className="border-cream/30 text-cream hover:border-gold-light hover:text-gold-light">
            Explore Treatments
          </Button>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold-light"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
