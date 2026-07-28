import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { facilityShowcase } from "../../data/content";

export function FacilityShowcase() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Step Inside" title="A Facility Built for Luxury" />

        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:gap-5 md:grid-cols-4">
          {facilityShowcase.map((item, i) => {
            const spanClass =
              i === 0 ? "col-span-2 row-span-2" : i === 3 ? "sm:row-span-2" : "";
            return (
              <Reveal key={item.title} delay={i * 0.05} className={spanClass}>
                <div className="group relative h-full overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={`${item.title} at Luxe Aesthetics Spa Saloon`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-80 transition-opacity group-hover:opacity-95" />
                  <span className="absolute bottom-4 left-4 text-sm font-medium text-ivory">{item.title}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
