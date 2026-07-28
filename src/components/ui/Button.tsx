import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "md" | "lg" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide uppercase transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-white shadow-luxe-sm hover:shadow-luxe hover:brightness-105 hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-gold hover:text-gold-dark hover:-translate-y-0.5",
  ghost: "bg-transparent text-gold-dark hover:text-gold underline-offset-4 hover:underline",
  dark: "bg-dark text-cream hover:bg-ink hover:-translate-y-0.5 shadow-luxe-sm",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-5 py-2.5",
  md: "text-xs px-7 py-3.5",
  lg: "text-sm px-9 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; to?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined };

type ButtonAsLink = CommonProps & { to: string; href?: undefined };

export function Button(props: ButtonAsButton | ButtonAsAnchor | ButtonAsLink) {
  const { variant = "primary", size = "md", children, className, icon, ...rest } = props as CommonProps & {
    [key: string]: unknown;
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if ("to" in props && props.to) {
    const { to, ...linkRest } = rest as { to: string };
    return (
      <Link to={to} className={classes} {...(linkRest as any)}>
        {children}
        {icon}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as { href: string };
    return (
      <a href={href} className={classes} {...(anchorRest as any)}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon}
    </button>
  );
}
