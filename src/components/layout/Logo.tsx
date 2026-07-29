import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { heroImages } from "../../data/images";
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5 shrink-0", className)} aria-label="Luxe Aesthetics Spa Saloon home">
      <span
        className="rounded-full h-10 w-15 "     
      >
        <img src={heroImages.logo} alt=""  />
       {/* h-10 w-15
       
       
       className=" h-8 w-14"*/}

      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[19px] italic tracking-wide [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]", 
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
