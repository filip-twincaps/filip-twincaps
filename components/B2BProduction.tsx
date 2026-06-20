import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";

const VOLUMES = [
  "Sample",
  "1,000 – 5,000 pcs",
  "5,000 – 10,000 pcs",
  "10,000 – 30,000 pcs",
  "30,000 – 50,000 pcs",
  "50,000+ pcs",
];

const INCLUDED = [
  "Custom logo & campaign artwork",
  "Brand colour matching",
  "Campaign-specific editions",
  "Optional NFC chip",
  "Multiple packaging options",
  "Branded samples before bulk",
];

// User-facing values are intentionally non-committal until business data is
// confirmed. Do not invent exact figures.
const SPECS = [
  // TODO: confirm MOQ
  { label: "Minimum order", value: "On request" },
  // TODO: confirm production lead time
  { label: "Lead time", value: "On request" },
  // TODO: confirm material and food-contact compliance wording
  { label: "Material & compliance", value: "Confirmed per order" },
  // TODO: confirm packaging options
  { label: "Packaging", value: "Options on request" },
];

export default function B2BProduction() {
  return (
    <section id="b2b" className="rule-top scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <SectionHeading
          eyebrow="B2B production"
          title="Built for samples, campaigns and high-volume B2B orders."
          description="A straightforward path for marketing and procurement teams: approve a branded sample, lock the edition, then produce at the volume your campaign needs."
        />

        <div className="mt-14 grid grid-cols-1 gap-3 lg:grid-cols-2">
          {/* volumes */}
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-surface/50 p-7 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist-2">
                Order volumes
              </p>
              <ul className="mt-5 divide-y divide-line">
                {VOLUMES.map((v, i) => (
                  <li
                    key={v}
                    className="flex items-center justify-between py-3.5"
                  >
                    <span className="text-[0.975rem] text-cream">{v}</span>
                    <span className="font-serif text-sm text-champagne">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* included */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-7 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist-2">
                Every order includes
              </p>
              <ul className="mt-5 space-y-3.5">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-champagne/40 text-champagne">
                      <Check className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="text-[0.975rem] leading-relaxed text-mist">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <Button href="/contact" variant="primary" withArrow>
                  Request B2B Offer
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* specifications */}
        <Reveal delay={0.1}>
          <div className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {SPECS.map(({ label, value }) => (
              <div key={label} className="bg-night p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-mist-2">
                  {label}
                </p>
                <p className="mt-2 text-[0.975rem] text-cream">{value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
