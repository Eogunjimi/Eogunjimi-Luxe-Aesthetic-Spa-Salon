import { Award, GraduationCap, Sparkles } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { founderPortrait } from "../../data/images";

const credentials = [
  { icon: GraduationCap, label: "Licensed Aesthetic Physician" },
  { icon: Award, label: "10+ Years in Medical Aesthetics" },
  { icon: Sparkles, label: "Trained in Advanced Body Contouring" },
];

export function FounderSection() {
  return (
    <section className="overflow-hidden bg-cream/50 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal direction="scale" className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] border border-gold/25" />
              <img
                src={founderPortrait}
                alt="Dr. Evelyn Ejaife, Founder and Medical Director of Luxe Aesthetics Spa Saloon"
                className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-luxe"
              />
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-ink px-6 py-4 text-center shadow-luxe-sm">
                <p className="font-display text-2xl italic text-gold-light">10+</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-cream/70">Years Experience</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
                <span className="h-px w-8 bg-current opacity-60" /> Meet The Founder
              </span>
              <h2 className="text-[32px] leading-tight text-ink sm:text-[40px]">
                Dr. Eve Ejaife
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 leading-relaxed text-ink/65">
                After years of practicing medical aesthetics across leading clinics, Dr. Eve founded Luxe Aesthetics
                Spa Saloon with a singular vision: to bring world-class beauty, wellness and medical aesthetic care
                to Port Harcourt and Warri — without ever leaving Nigeria for premium treatment.
              </p>
              <p className="mt-4 leading-relaxed text-ink/65">
                Today, she leads a team of certified specialists dedicated to helping clients look and feel their
                absolute best, one personalized treatment at a time.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 space-y-3">
                {credentials.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                      <c.icon size={16} />
                    </span>
                    <span className="text-sm font-medium text-ink/80">{c.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9">
                <Button to="/about" variant="secondary" size="md">
                  Meet Our Team
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
