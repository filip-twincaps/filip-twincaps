import Reveal from "./Reveal";
import PremiumImage from "./PremiumImage";

const EXPOSURE = [
  "Insects",
  "Dust & sand",
  "Spills & dirt",
  "Lost carbonation",
  "Unfinished drinks",
];

export default function ProblemStory() {
  return (
    <section
      id="problem"
      className="rule-top scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-champagne">
              <span className="h-px w-8 bg-champagne/70" />
              The moment after
            </p>
            <h2 className="font-serif text-[clamp(1.9rem,3.8vw,3.1rem)] font-medium leading-[1.08] tracking-[-0.01em] text-cream text-balance">
              The can is opened. The brand moment should not end there.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-mist sm:text-lg">
              A beverage brand invests heavily to get the can into the
              customer’s hand. But the instant it is opened, the experience
              becomes vulnerable — and the branded packaging is on its way to
              the bin.
            </p>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-mist">
              Outdoors especially, an open can is exposed to insects, dust and
              spills, loses its carbonation, and is often left unfinished. The
              brand’s most expensive moment quietly disappears.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {EXPOSURE.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-4 py-1.5 text-sm text-mist"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <PremiumImage
              src="/twincaps-premium-04.png"
              alt="A hand placing a TwinCaps cover onto an open beverage can"
              className="aspect-[4/3] w-full rounded-3xl border border-line"
              sizes="(max-width: 1024px) 100vw, 560px"
              fallbackLabel="Open can, exposed"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
