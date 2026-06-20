import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import PremiumImage from "./PremiumImage";

export default function LifestyleSection() {
  return (
    <section
      id="lifestyle"
      className="rule-top scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <SectionHeading
          eyebrow="The object"
          title="Premium enough to sit beside the products people love."
          description="A considered, tactile object in matte black, brushed metal and champagne — finished to your brand, not to a giveaway budget."
        />

        <Reveal delay={0.08} className="mt-12">
          <figure>
            <PremiumImage
              src="/twincaps-premium-01.png"
              alt="TwinCaps covers on a matte-black and a brushed-silver beverage can"
              className="aspect-[16/9] w-full rounded-3xl border border-line"
              sizes="(max-width: 1180px) 100vw, 1180px"
              fallbackLabel="TwinCaps, finished to your brand"
            />
            <figcaption className="mt-5 font-serif text-xl text-cream sm:text-2xl">
              Made to live in your customer’s world.
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <Reveal delay={0.04}>
            <PremiumImage
              src="/twincaps-premium-03.png"
              alt="Three TwinCaps colourways shown together"
              className="aspect-[4/3] w-full rounded-2xl border border-line"
              sizes="(max-width: 640px) 100vw, 580px"
              fallbackLabel="Colourways"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PremiumImage
              src="/twincaps-premium-05.png"
              alt="A phone tapping a TwinCaps cover to open a campaign"
              className="aspect-[4/3] w-full rounded-2xl border border-line"
              sizes="(max-width: 640px) 100vw, 580px"
              fallbackLabel="Tap to connect"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
