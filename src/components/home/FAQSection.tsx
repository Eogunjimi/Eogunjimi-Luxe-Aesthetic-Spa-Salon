import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Accordion } from "../ui/Accordion";
import { faqs } from "../../data/content";

export function FAQSection({ id = "faqs" }: { id?: string }) {
  return (
    <section id={id} className="bg-ivory py-24 sm:py-32">
      <Container size="narrow">
        <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />
        <Reveal delay={0.1} className="mt-14">
          <Accordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}
