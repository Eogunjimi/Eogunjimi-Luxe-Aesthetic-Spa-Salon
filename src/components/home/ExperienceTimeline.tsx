import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { experienceSteps } from "../../data/content";

export function ExperienceTimeline() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="How It Works" title="Our Experience" light />

        <div className="relative mt-20">
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-gold-light/60 via-gold/30 to-transparent sm:block lg:left-1/2" />

          <div className="space-y-10 lg:space-y-0">
            {experienceSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div
                  className={`relative flex items-start gap-6 lg:items-center lg:gap-0 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } lg:mb-14`}
                >
                  <div className={`hidden lg:block lg:w-1/2 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <StepCard step={step} index={i} />
                  </div>

                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-light/40 bg-ink font-display text-xl italic text-gold-light lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    {i + 1}
                  </span>

                  <div className="flex-1 lg:hidden">
                    <StepCard step={step} index={i} />
                  </div>
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function StepCard({ step }: { step: { title: string; description: string }; index: number }) {
  return (
    <div className="rounded-2xl border border-cream/10 bg-white/[0.04] p-6">
      <h3 className="text-lg font-medium text-ivory">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-cream/60">{step.description}</p>
    </div>
  );
}
