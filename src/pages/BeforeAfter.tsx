import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useSeo } from "../hooks/useSeo";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { ReviewsSection } from "../components/home/ReviewsSection";
import { heroImages } from "../data/images";
import { beforeAfterGallery, beforeAfterCategories } from "../data/content";
import { breadcrumbSchema } from "../utils/schema";

export default function BeforeAfter() {
  useSeo({
    title: "Before & After Gallery | Luxe Aesthetics Spa Saloon",
    description: "See real transformations from Luxe Aesthetics Spa Saloon clients — fat melting, body sculpting, facials, skin rejuvenation and more. Book your consultation.",
    path: "/before-after",
    schema: [breadcrumbSchema([{"name":"Home","path":"/"},{"name":"Before & After","path":"/before-after"}])],
  });

  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? beforeAfterGallery : beforeAfterGallery.filter((item) => item.category === active);

  return (
    <>
      <PageHero
        eyebrow="Proof, Not Promises"
        title="Real Transformations. Real Confidence."
        description="Every result tells a story. Explore genuine transformations from clients across our medical aesthetics, spa and beauty treatments."
        image={heroImages.about}
      />

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Filter Results" title="Browse By Category" />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {beforeAfterCategories.map((cat) => (
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

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Reveal key={item.title + i} delay={(i % 3) * 0.08} direction="scale">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-sm">
                  <img
                    src={item.image}
                    alt={`${item.category} before and after transformation`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                      {item.category}
                    </span>
                    <p className="mt-1 text-base font-medium text-ivory">{item.title}</p>
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    View Details
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ReviewsSection />

      <section className="bg-ink py-20 sm:py-24">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-3xl font-medium text-ivory sm:text-4xl">Ready to Write Your Own Story?</h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/65">
              Book a consultation today and let our specialists craft a personalized treatment plan for your goals.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/contact" size="lg" icon={<ArrowRight size={16} />}>
                Book Consultation
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
