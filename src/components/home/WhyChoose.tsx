import { Clock, Gem, Award, Cpu, HeartHandshake, Users } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Counter } from "../ui/Counter";

const reasons = [
  { icon: Gem, title: "Luxury Environment", description: "Editorial-grade interiors designed for total comfort and calm." },
  { icon: Clock, title: "Open 24 Hours", description: "Book treatments any time — day or night, around your schedule." },
  { icon: Award, title: "Experienced Professionals", description: "Certified specialists trained in advanced aesthetic techniques." },
  { icon: Cpu, title: "Premium Equipment", description: "The latest medical-grade technology for safe, visible results." },
  { icon: HeartHandshake, title: "Personalized Care", description: "Every treatment plan is tailored specifically to your goals." },
  { icon: Users, title: "Thousands of Happy Clients", description: "Trusted across Port Harcourt and Warri for consistent results." },
];

const stats = [
  { value: 4.7, suffix: "★", label: "Google Rating", decimals: true },
  { value: 5000, suffix: "+", label: "Clients Served" },
  { value: 13, suffix: "+", label: "Signature Treatments" },
  { value: 24, suffix: "/7", label: "Open Every Day" },
];

export function WhyChoose() {
  return (
    <section className="bg-cream/60 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="The Luxe Standard" title="Why Clients Choose Luxe" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <div className="flex h-full gap-5 rounded-3xl bg-white/70 p-7 shadow-sm ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-dark to-gold text-white">
                  <r.icon size={20} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-medium text-lg text-ink">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{r.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 rounded-[32px] bg-ink px-8 py-12 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl italic text-gold-light sm:text-5xl">
                {s.decimals ? s.value.toFixed(1) : <Counter value={s.value} />}
                {s.suffix}
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-cream/60">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
