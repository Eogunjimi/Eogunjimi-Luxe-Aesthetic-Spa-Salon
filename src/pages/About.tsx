import { Award, ShieldCheck, Sparkles } from "lucide-react";
import { useSeo } from "../hooks/useSeo";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { WhyChoose } from "../components/home/WhyChoose";
import { FounderSection } from "../components/home/FounderSection";
import { ConsultationCTA } from "../components/home/ConsultationCTA";
import { heroImages, facilityReception } from "../data/images";
import { coreValues, teamMembers } from "../data/content";
import { breadcrumbSchema } from "../utils/schema";

const awards = [
  { title: "#1 Spa — TripAdvisor", detail: "Ranked the leading spa destination in Port Harcourt." },
  { title: "4.7★ Google Rating", detail: "Rated by hundreds of verified clients across two locations." },
  { title: "Certified Medical Aesthetics", detail: "Treatments performed by licensed, certified professionals." },
];

export default function About() {
  useSeo({
    title: "About Us | Luxe Aesthetics Spa Saloon, Port Harcourt & Warri",
    description: "Discover the story, mission and team behind Luxe Aesthetics Spa Saloon — Port Harcourt & Warri's leading luxury med spa and beauty destination.",
    path: "/about",
    schema: [breadcrumbSchema([{"name":"Home","path":"/"},{"name":"About","path":"/about"}])],
  });

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Redefining Luxury Beauty & Wellness in Nigeria"
        description="Luxe Aesthetics Spa Saloon was founded on a simple belief — that world-class medical aesthetics and luxury wellness should be accessible without leaving home."
        image={heroImages.about}
      />

      {/* Brand story */}
      <section className="bg-ivory py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal direction="scale">
              <img
                src={facilityReception}
                alt="Luxe Aesthetics reception lounge"
                className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-luxe"
              />
            </Reveal>
            <div>
              <SectionHeading align="left" eyebrow="Brand Story" title="Beauty, Redefined" className="mx-0" />
              <p className="mt-6 leading-relaxed text-ink/65">
                What began as a single vision to elevate the beauty and wellness experience in Rivers State has grown
                into two flagship locations — Port Harcourt and Warri — offering the full spectrum of medical
                aesthetics, spa therapy, salon artistry and holistic wellness under one exceptional roof.
              </p>
              <p className="mt-4 leading-relaxed text-ink/65">
                We built Luxe Aesthetics for professionals, executives and everyday clients who refuse to compromise
                on quality — combining advanced technology, certified expertise and genuine hospitality in every
                single visit.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-cream/60 p-6">
                  <Sparkles className="text-gold-dark" size={22} />
                  <h3 className="mt-3 font-medium text-ink">Our Mission</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    To deliver world-class aesthetic, wellness and beauty care that helps clients feel confident,
                    radiant and cared for.
                  </p>
                </div>
                <div className="rounded-2xl bg-cream/60 p-6">
                  <ShieldCheck className="text-gold-dark" size={22} />
                  <h3 className="mt-3 font-medium text-ink">Our Vision</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    To be Africa's most trusted destination for luxury medical aesthetics, spa and wellness
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core values */}
      <section className="bg-cream/40 py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="What Guides Us" title="Our Core Values" />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-ink/5">
                  <span className="font-display text-3xl italic text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-medium text-lg text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <WhyChoose />
      <FounderSection />

      {/* Team */}
      <section className="bg-ivory py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Our Specialists" title="Meet The Team" />
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.07}>
                <div className="group">
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-medium text-ink">{member.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{member.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Awards */}
      <section className="bg-ink py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Recognition" title="Awards & Certifications" light />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="flex h-full flex-col items-center gap-4 rounded-3xl border border-cream/10 bg-white/[0.04] p-8 text-center">
                  <Award className="text-gold-light" size={28} />
                  <h3 className="font-medium text-ivory">{a.title}</h3>
                  <p className="text-sm text-cream/60">{a.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
