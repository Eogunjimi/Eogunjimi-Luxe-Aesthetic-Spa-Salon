import { Check } from "lucide-react";
import { Container } from "../ui/Container";
import { trustBadges } from "../../data/business";

export function TrustStrip() {
  return (
    <section className="border-b border-ink/8 bg-ink py-5">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
          {trustBadges.map((item) => (
            <span key={item} className="flex items-center gap-2 text-[13px] font-medium text-cream/85">
              <Check size={14} className="text-gold-light" />
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
