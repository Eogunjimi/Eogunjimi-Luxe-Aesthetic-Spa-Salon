import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none" | "scale";
  once?: boolean;
};

/** Wraps content in a tasteful scroll-triggered reveal animation. */
export function Reveal({ children, className, delay = 0, direction = "up", once = true }: RevealProps) {
  const variants = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    scale: { initial: { opacity: 0, scale: 0.94 }, animate: { opacity: 1, scale: 1 } },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
