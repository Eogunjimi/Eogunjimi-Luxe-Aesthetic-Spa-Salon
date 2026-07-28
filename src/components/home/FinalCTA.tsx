import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { whatsappLink } from "../../data/business";
import { stock } from "../../data/images";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark py-28 sm:py-36">
      <img src={stock.wellness[0]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[150px]" />

      <Container className="relative text-center">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            <span className="h-px w-8 bg-current opacity-60" /> Experience The Luxe Difference <span className="h-px w-8 bg-current opacity-60" />
          </span>
          <h2 className="mx-auto max-w-3xl text-[32px] leading-tight text-ivory sm:text-[44px]">
            Experience Beauty, Wellness &amp; Confidence Like Never Before.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" size="lg" icon={<ArrowRight size={16} />}>
              Book Appointment
            </Button>
            <Button
              href={whatsappLink()}
              variant="secondary"
              size="lg"
              className="border-cream/30 text-cream hover:border-gold-light hover:text-gold-light"
              icon={<MessageCircle size={16} />}
            >
              WhatsApp Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
