import { Star } from "lucide-react";
import { cn } from "../../utils/cn";

export function StarRating({ rating = 5, className, size = 16 }: { rating?: number; className?: string; size?: number }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "fill-gold text-gold" : "fill-transparent text-ink/20"}
        />
      ))}
    </div>
  );
}
