import Reveal from "../Reveal";
import PremiumImage from "../PremiumImage";

type Moment = {
  n: string;
  src: string;
  alt: string;
  fallback: string;
  title: string;
  text: string;
};

const MOMENTS: Moment[] = [
  {
    n: "01",
    src: "/twincaps-premium-07.png",
    alt: "A TwinCaps cover lifting a can tab open without using a fingernail",
    fallback: "Open",
    title: "Open without risking your nails.",
    text: "The integrated opening function helps lift the tab cleanly.",
  },
  {
    n: "02",
    src: "/twincaps-premium-06.png",
    alt: "A covered TwinCaps can keeping insects and dust away from the drink",
    fallback: "Cover",
    title: "Keep the drink covered.",
    text: "Reduce exposure to insects, dust, sand and unwanted contact.",
  },
  {
    n: "03",
    src: "/twincaps-premium-08.png",
    alt: "A TwinCaps-covered can resting in a car cup holder",
    fallback: "Move",
    title: "Less splash on the move.",
    text: "Keep the opened can covered in cup holders and everyday movement.",
  },
];

/**
 * Three premium advertising panels — large imagery, minimal copy, alternating
 * sides. Built as campaign spreads, not feature cards.
 */
export default function ConceptMoments() {
  return (
    <section className="px-6 sm:px-8">
      <div className="mx-auto max-w-[1280px] space-y-28 sm:space-y-40">
        {MOMENTS.map((m, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={m.n}>
              <figure className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <div
                  className={`relative overflow-hidden rounded-[1.75rem] border border-line ${
                    flip ? "lg:order-2" : ""
                  }`}
                >
                  <PremiumImage
                    src={m.src}
                    alt={m.alt}
                    className="aspect-[5/4] w-full"
                    sizes="(max-width: 1024px) 100vw, 620px"
                    fallbackLabel={m.fallback}
                  />
                </div>

                <figcaption className={flip ? "lg:order-1" : ""}>
                  <span className="index-numeral block text-[clamp(3rem,6vw,5rem)] text-champagne-soft">
                    {m.n}
                  </span>
                  <h3 className="mt-5 max-w-md font-serif text-[clamp(2rem,3.6vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.015em] text-cream text-balance">
                    {m.title}
                  </h3>
                  <p className="mt-5 max-w-sm text-pretty text-lg leading-relaxed text-mist">
                    {m.text}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
