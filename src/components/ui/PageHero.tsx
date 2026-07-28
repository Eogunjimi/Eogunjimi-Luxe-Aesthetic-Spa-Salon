import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-dark pt-32">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
      <Container className="relative pb-20">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            <span className="h-px w-8 bg-current opacity-60" /> {eyebrow}
          </span>
          <h1 className="max-w-3xl text-[36px] font-medium leading-[1.1] text-ivory sm:text-[52px]">{title}</h1>
          {description && <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">{description}</p>}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
