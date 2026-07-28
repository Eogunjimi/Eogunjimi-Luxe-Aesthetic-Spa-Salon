import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { whatsappLink } from "../../data/business";
import { stock } from "../../data/images";

export function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-cream/60 py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 rounded-[36px] bg-white p-10 shadow-luxe-sm sm:p-16 lg:grid-cols-2">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
              <span className="h-px w-8 bg-current opacity-60" /> Start Your Journey
            </span>
            <h2 className="text-[30px] leading-tight text-ink sm:text-[38px]">
              Begin Your Personalized Beauty Journey
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink/65">
              Whether you're considering body contouring, skin rejuvenation, aesthetic treatments, or a relaxing spa
              day, every visit begins with understanding your goals and creating a plan tailored to you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" size="lg" icon={<ArrowRight size={16} />}>
                Book Consultation
              </Button>
              <Button href={whatsappLink()} variant="secondary" size="lg" icon={<MessageCircle size={16} />}>
                WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal direction="scale" delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <img src={stock.facials[1]} alt="Facial consultation" className="aspect-[3/4] rounded-2xl object-cover" />
              <img src={stock.wellness[2]} alt="Wellness consultation" className="mt-8 aspect-[3/4] rounded-2xl object-cover" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
