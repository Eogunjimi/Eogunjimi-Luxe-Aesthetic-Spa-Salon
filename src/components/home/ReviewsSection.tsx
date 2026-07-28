import { Quote } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { StarRating } from "../ui/StarRating";
import { Reveal } from "../ui/Reveal";
import { Badge } from "../ui/Badge";
import { testimonials } from "../../data/content";
import { business } from "../../data/business";

export function ReviewsSection() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Client Love" title="Loved By Clients Across Port Harcourt & Warri" />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Badge icon={<StarRating rating={5} size={12} />}>{business.rating} Google Reviews</Badge>
          <Badge>#1 TripAdvisor Reviews</Badge>
          <Badge>Facebook Reviews</Badge>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className="relative flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe-sm">
                <Quote className="absolute right-7 top-7 text-gold/15" size={44} />
                <StarRating rating={t.rating} />
                <p className="relative mt-5 flex-1 text-[15px] leading-relaxed text-ink/75">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-ink/8 pt-5">
                  <img src={t.image} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
