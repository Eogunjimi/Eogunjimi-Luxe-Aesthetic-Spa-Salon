import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "../../utils/cn";

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="py-2">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "text-lg sm:text-xl font-medium transition-colors",
                  isOpen ? "text-gold-dark" : "text-ink group-hover:text-gold-dark"
                )}
              >
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-all duration-300",
                  isOpen && "rotate-45 border-gold bg-gold text-white"
                )}
              >
                <Plus size={16} />
              </span>
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 text-ink/65 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
