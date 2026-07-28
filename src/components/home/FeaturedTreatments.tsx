import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { treatmentCategories } from "../../data/treatments";

export function FeaturedTreatments() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Signature Treatments"
            title="Five Ways to Experience Luxe"
            light
            className="mx-0"
          />
          <Button to="/treatments" variant="secondary" className="border-cream/25 text-cream hover:border-gold-light hover:text-gold-light shrink-0">
            Explore All Treatments
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {treatmentCategories.map((cat, i) => (
            <Reveal key={cat.number} delay={i * 0.08} className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
              <Link
                to={`/treatments/${cat.slugs[0]}`}
                className={`group relative block h-full overflow-hidden rounded-[28px] ${
                  i === 0 ? "min-h-[420px] sm:min-h-[520px]" : "min-h-[240px] sm:min-h-[250px]"
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />

                <div className="relative flex h-full flex-col justify-between p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl italic text-gold-light">{cat.number}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <div>
                    <h3 className={`font-medium text-ivory ${i === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                      {cat.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-cream/70">{cat.description}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
