import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { heroImages } from "../../data/images";
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5 shrink-0", className)} aria-label="Luxe Aesthetics Spa Saloon home">
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border font-display text-lg italic",
          light ? "border-gold-light/60 text-gold-light" : "border-gold/50 text-gold-dark"
        )}
      >
        <img src={heroImages.logo} alt="" />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[19px] italic tracking-wide",
            light ? "text-ivory" : "text-ink"
          )}
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
