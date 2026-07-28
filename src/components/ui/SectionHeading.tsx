import { cn } from "../../utils/cn";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em]",
              light ? "text-gold-light" : "text-gold-dark"
            )}
          >
            <span className="h-px w-8 bg-current opacity-60" />
            {eyebrow}
            <span className="h-px w-8 bg-current opacity-60" />
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "text-[34px] leading-[1.15] sm:text-[42px] lg:text-[46px] font-medium",
            light ? "text-ivory" : "text-ink",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className={cn("mt-5 text-base sm:text-lg leading-relaxed", light ? "text-cream/80" : "text-ink/65")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
