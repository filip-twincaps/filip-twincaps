import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import PremiumImage from "./PremiumImage";

type Moment = {
  id: string;
  headline: string;
  copy: string;
  src: string;
  alt: string;
  fallbackLabel: string;
  tags: string[];
};

const MOMENTS: Moment[] = [
  {
    id: "opening",
    headline: "Open the can without risking your nails.",
    copy: "TwinCaps is designed around real drinking moments. The integrated opening function helps lift the can tab cleanly — useful for long nails, manicures and anyone who wants to open a can without a struggle.",
    src: "/twincaps-premium-07.png",
    alt: "A TwinCaps cover lifting a can tab open without using a fingernail",
    fallbackLabel: "Nail-friendly opening",
    tags: ["Long nails", "Manicures", "No asking for help", "Everyday ease"],
  },
  {
    headline: "Keep the drink covered when the moment gets busy.",
    id: "covered",
    copy: "Open cans are vulnerable — especially outdoors, at events and in crowded venues. TwinCaps helps keep the drinking opening covered, reducing exposure to insects, dust, sand and unwanted contact while keeping the brand visible.",
    src: "/twincaps-premium-06.png",
    alt: "A covered TwinCaps can with an insect kept away from the opening",
    fallbackLabel: "Covered drink confidence",
    tags: ["Festivals", "Clubs", "Stadiums", "Beaches"],
  },
  {
    headline: "Less splash. More confidence on the move.",
    id: "on-the-move",
    copy: "In a cup holder, at the beach, on a walk or during a busy event, an opened can is easy to knock or splash. TwinCaps helps keep the can covered and reduces everyday spill risk while the branded surface stays visible.",
    src: "/twincaps-premium-08.png",
    alt: "A TwinCaps-covered can resting in a car cup holder",
    fallbackLabel: "Less splash on the move",
    tags: ["Cup holders", "Commuting", "Travel", "Outdoor days"],
  },
];

export default function RealMoments() {
  return (
    <section
      id="moments"
      className="rule-top scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <SectionHeading
          eyebrow="Real moments"
          title="Designed around real drinking moments."
          description="TwinCaps is valuable because it solves small everyday problems exactly where beverage brands want to stay present — after the can is opened."
        />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {MOMENTS.map((moment, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={moment.headline}
                id={moment.id}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal
                  className={flip ? "lg:order-2" : "lg:order-1"}
                  delay={0.05}
                >
                  <PremiumImage
                    src={moment.src}
                    alt={moment.alt}
                    className="aspect-[4/3] w-full rounded-3xl border border-line"
                    sizes="(max-width: 1024px) 100vw, 560px"
                    fallbackLabel={moment.fallbackLabel}
                  />
                </Reveal>

                <Reveal className={flip ? "lg:order-1" : "lg:order-2"}>
                  <h3 className="font-serif text-2xl font-medium leading-[1.12] tracking-[-0.01em] text-cream text-balance sm:text-[1.85rem]">
                    {moment.headline}
                  </h3>
                  <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-mist">
                    {moment.copy}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2.5">
                    {moment.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-3.5 py-1 text-xs text-mist"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* B2B-safe wording: no exaggerated protection or leak-proof claims. */}
        <Reveal delay={0.1}>
          <p className="mt-16 max-w-3xl text-sm leading-relaxed text-mist-2">
            TwinCaps helps cover an opened can and reduce everyday exposure and
            splashes. It is not a sealed lid — it is not leak-proof, is not
            spill-proof if the can is inverted, and is not certified
            anti-tampering protection.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
