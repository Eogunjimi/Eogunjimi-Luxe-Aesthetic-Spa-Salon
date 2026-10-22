import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { heroImages } from "../../data/images";
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      className={cn("flex shrink-0 items-center gap-2.5", className)}
      aria-label="Luxe Aesthetics Spa Saloon home"
    >
      <span className="inline-flex h-10 w-14 items-center justify-center">
        <img src={heroImages.logo} alt="Luxe Aesthetics logo" className="h-9 w-auto" />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[19px] italic tracking-wide",
            light ? "text-ivory" : "text-ink"
          )}
          style={{ textShadow: light ? "2px 2px 4px rgba(0,0,0,0.5)" : undefined }}
        >
          Luxe Aesthetics
        </span>
        <span
          className={cn(
            "block text-[9px] font-semibold uppercase tracking-[0.35em]",
            light ? "text-gold-light/80" : "text-gold-dark/80"
          )}
        >
          Spa Saloon
        </span>
      </span>
    </Link>
  );
}
