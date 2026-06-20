import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Button from "./Button";

type CTA = { label: string; href: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  primary?: CTA;
  secondary?: CTA;
  /** Optional anchor id, e.g. "top" for in-page deep links from the menu. */
  id?: string;
};

/**
 * Calm, generous top section for a subpage. One large serif title, a short
 * supporting line and optional CTAs — sized to clear the fixed header.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  id,
}: PageHeroProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 px-6 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40"
    >
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-champagne">
            <span className="h-px w-8 bg-champagne/70" />
            {eyebrow}
          </p>
          <h1 className="max-w-3xl font-serif text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.04] tracking-[-0.015em] text-cream text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-mist sm:text-xl">
              {description}
            </p>
          )}
          {(primary || secondary) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              {primary && (
                <Button href={primary.href} variant="primary" withArrow>
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button href={secondary.href} variant="secondary">
                  {secondary.label}
                </Button>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
