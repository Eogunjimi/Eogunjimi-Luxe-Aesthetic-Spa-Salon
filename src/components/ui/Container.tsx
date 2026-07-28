import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[100rem]",
        size === "narrow" && "max-w-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
