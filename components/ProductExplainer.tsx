import { Check, KeyRound, Layers, Ruler, Wifi } from "lucide-react";
import Reveal from "./Reveal";
import PremiumImage from "./PremiumImage";

const SPECS = [
  { icon: Layers, title: "Two reusable covers", note: "For the everyday can" },
  { icon: Ruler, title: "250 · 330 · 500 ml", note: "Common can sizes" },
  { icon: KeyRound, title: "Keychain + opener", note: "Carried, and useful" },
  { icon: Wifi, title: "Optional NFC chip", note: "Tap-to-connect ready" },
];

const FEATURES = [
  "Custom logo and campaign artwork",
  "Matched to your exact brand colours",
  "Reusable and washable",
  "Campaign-specific editions",
  "Designed for B2B bulk orders",
];

export default function ProductExplainer() {
  return (
    <section
      id="product"
      className="rule-top scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <PremiumImage
              src="/twincaps-premium-03.png"
              alt="Three TwinCaps colourways with the opener clip in detail"
              className="aspect-[4/3] w-full rounded-3xl border border-line"
              sizes="(max-width: 1024px) 100vw, 560px"
              fallbackLabel="TwinCaps colourways"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-champagne">
                <span className="h-px w-8 bg-champagne/70" />
                What is TwinCaps
              </p>
              <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.08] tracking-[-0.01em] text-cream text-balance">
                A branded can-cover system, made to your brand.
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-mist sm:text-lg">
                TwinCaps is a reusable campaign object, not a disposable
                gadget. Two covers fit common can sizes, an integrated opener
                makes it genuinely useful, and the keychain format keeps it with
                the customer. Produced in your brand colours with custom artwork
                — and, optionally, an NFC chip that turns it into a physical
                brand activation tool.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {FEATURES.map((f, i) => (
                <Reveal key={f} delay={i * 0.04}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-champagne/40 text-champagne">
                      <Check className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="text-[0.975rem] leading-relaxed text-mist">
                      {f}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* specs strip */}
        <Reveal delay={0.1}>
          <div
            id="sizes"
            className="mt-14 grid scroll-mt-24 grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4"
          >
            {SPECS.map(({ icon: Icon, title, note }) => (
              <div key={title} className="bg-night p-7">
                <Icon
                  className="h-5 w-5 text-champagne"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="mt-4 font-serif text-lg text-cream">{title}</p>
                <p className="mt-1 text-sm text-mist-2">{note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
