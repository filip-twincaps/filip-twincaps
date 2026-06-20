import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "accent";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  // Monochrome ink — the premium default brand CTA.
  primary:
    "bg-cream text-night hover:bg-[#37322b] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-line-2 text-cream hover:border-champagne/60 hover:bg-cream/[0.04] hover:-translate-y-0.5 active:translate-y-0",
  // The single energetic accent — reserved for NFC / connected moments.
  accent:
    "bg-accent-deep text-white hover:bg-accent hover:-translate-y-0.5 active:translate-y-0",
};

/**
 * Primary / secondary / accent CTA. Renders a Next.js Link so hash and
 * cross-route navigation both work with client-side routing.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
