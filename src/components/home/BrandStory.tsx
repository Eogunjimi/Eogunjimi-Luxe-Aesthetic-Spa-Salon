// import { Sparkles, Stethoscope, Scissors, Palette, HeartPulse,  } from "lucide-react";
import {
  Dumbbell,
  Sparkles,
  HeartHandshake,
  Waves,
  Brush,
  Eye,
  Scissors,
  Hand,
  Smile,
  ShieldPlus,
} from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

// const pillars = [
//   { icon: Sparkles, label: "Luxury Spa" },
//   { icon: Stethoscope, label: "Medical Aesthetics" },
//   { icon: Scissors, label: "Hair Salon" },
//   { icon: Palette, label: "Beauty Studio" },
//   { icon: HeartPulse, label: "Wellness" },
//   { icon: HeartPulse, label: "Wellness" }
// ];


const expertise = [
  {
    icon: Dumbbell,
    label: "Body Contouring",
  },
  {
    icon: Sparkles,
    label: "Skin Rejuvenation",
  },
  {
    icon: HeartHandshake,
    label: "Luxury Spa Therapy",
  },
  {
    icon: Waves,
    label: "Body Cavitation",
  },
  {
    icon: Brush,
    label: "Microblading",
  },
  {
    icon: Eye,
    label: "Lash Extensions",
  },
  {
    icon: Scissors,
    label: "Hair Treatments",
  },
  {
    icon: Hand,
    label: "Manicure & Pedicure",
  },
  {
    icon: Smile,
    label: "Teeth Whitening",
  },
  {
    icon: ShieldPlus,
    label: "Skin Treatments",
  },
];





export function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Our Expertise"
          title="We Specialise In"
          description="Expert treatments. Personalized care. Beautiful, natural-looking results you can feel confident about."
        />

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {expertise.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08} direction="scale">
              <div className="group flex flex-col items-center gap-4 rounded-3xl border border-gold/15 bg-white/60 px-6 py-10 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-luxe-sm">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cream to-gold-light/40 text-gold-dark transition-transform duration-500 group-hover:scale-110">
                  <p.icon size={26} strokeWidth={1.5} />
                </span>
                <span className="text-sm font-semibold text-ink">{p.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
