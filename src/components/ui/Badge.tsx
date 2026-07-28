import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export function Badge({ children, className, icon }: { children: ReactNode; className?: string; icon?: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-4 py-2 text-xs font-medium tracking-wide text-ink/80 backdrop-blur-sm",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
