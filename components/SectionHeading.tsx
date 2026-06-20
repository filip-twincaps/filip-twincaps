import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/**
 * Section header: small champagne eyebrow, large serif display title,
 * optional supporting paragraph. Calm reveal on scroll.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-5 flex items-center gap-3 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-champagne/70" />
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-champagne">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-serif text-[clamp(1.85rem,3.6vw,3rem)] font-medium leading-[1.08] tracking-[-0.01em] text-cream text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-relaxed text-mist sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
