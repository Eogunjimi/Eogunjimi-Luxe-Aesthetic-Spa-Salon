import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { beforeAfterGallery } from "../../data/content";

export function BeforeAfterPreview() {
  const items = beforeAfterGallery.slice(0, 6);

  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Proof, Not Promises" title="Real Transformations. Real Confidence." />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} direction="scale">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={`${item.category} transformation at Luxe Aesthetics`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                    {item.category}
                  </span>
                  <p className="mt-1 text-sm font-medium text-ivory">{item.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/before-after" variant="dark" size="lg">
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
