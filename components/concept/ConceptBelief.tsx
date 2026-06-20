import Reveal from "../Reveal";

/**
 * One belief sentence, set as an oversized editorial statement with maximum
 * negative space. Left-aligned to break the centered rhythm of the hero.
 */
export default function ConceptBelief() {
  return (
    <section className="px-6 py-32 sm:px-8 sm:py-40 lg:py-52">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-champagne/70" />
            The belief
          </p>
          <h2 className="mt-8 max-w-5xl font-serif text-[clamp(2rem,5vw,4.25rem)] font-medium leading-[1.06] tracking-[-0.02em] text-balance">
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
