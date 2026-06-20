import Reveal from "./Reveal";

/**
 * Block 2 — a single, oversized editorial sentence. Maximum negative space,
 * left-aligned to break the centered-brochure rhythm.
 */
export default function ProblemLine() {
  return (
    <section className="rule-top px-6 py-28 sm:px-8 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-champagne/70" />
            The opportunity
          </p>
          <h2 className="mt-8 max-w-5xl font-serif text-[clamp(1.9rem,4.6vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.015em] text-balance">
            <span className="text-mist">
              Beverage brands spend millions to win the can moment.
            </span>{" "}
            <span className="text-cream">
              TwinCaps keeps that moment alive after the can is opened.
            </span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
