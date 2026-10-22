import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useSeo } from "../hooks/useSeo";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { FAQSection } from "../components/home/FAQSection";
import { ExperienceTimeline } from "../components/home/ExperienceTimeline";
import { FinalCTA } from "../components/home/FinalCTA";
import { heroImages } from "../data/images";
import { treatments } from "../data/treatments";
import { breadcrumbSchema } from "../utils/schema";

const categories = ["All", ...Array.from(new Set(treatments.map((t) => t.category)))];

export default function Treatments() {
  useSeo({
    title: "Treatments & Services | Luxe Aesthetics Spa Saloon",
    description: "Explore medical aesthetics, spa, salon, body contouring & wellness treatments at Luxe Aesthetics Spa Saloon in Port Harcourt & Warri. Book your appointment today.",
    path: "/treatments",
    schema: [breadcrumbSchema([{"name":"Home","path":"/"},{"name":"Treatments","path":"/treatments"}])],
  });

  const [active, setActive] = useState("All");
  const filtered = active === "All" ? treatments : treatments.filter((t) => t.category === active);

  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="Treatments Crafted Around You"
        description="From medical aesthetics to spa rituals, salon artistry and total body wellness — every treatment is delivered with precision, care and a touch of luxury."
        image={heroImages.treatments}
      />

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Full Menu" title="Explore All Treatments" />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                  active === cat
                    ? "border-gold bg-gold text-white shadow-luxe-sm"
                    : "border-ink/15 text-ink/60 hover:border-gold hover:text-gold-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 3) * 0.08}>
                <Link
                  to={`/treatments/${t.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold-dark backdrop-blur-sm">
                      {t.category}
                    </span>
                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2.5 text-gold-dark">
                      <t.icon size={18} strokeWidth={1.6} />
                    </div>
                    <h3 className="mt-3 text-lg font-medium text-ink">{t.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{t.tagline}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-4 text-xs text-ink/50">
                      <span>{t.duration}</span>
                      <span className="font-semibold uppercase tracking-wide text-gold-dark">Book Now</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ExperienceTimeline />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
