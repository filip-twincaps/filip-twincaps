import { Check, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const OLD = [
  "Often forgotten",
  "Not connected to the product",
  "No real use after the event",
  "No digital continuation",
  "Low perceived value",
];

const NEW = [
  "Used exactly when the can is opened",
  "Protects the drink the brand sells",
  "Brand stays visible on the can",
  "Carried every day on the keys",
  "Optional NFC connection",
  "Reusable — sampled, then produced in bulk",
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="rule-top scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="The difference"
          title="The same budget. A different kind of return."
          description="Set TwinCaps beside the usual promotional giveaway, and the distinction is quiet but complete."
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-line md:grid-cols-2 md:divide-x md:divide-line">
          <Reveal className="p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist-2">
              The usual giveaway
            </p>
            <h3 className="mt-2 font-serif text-2xl text-mist">
              Spent, then forgotten
            </h3>
            <ul className="mt-7 space-y-4">
              {OLD.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Minus
                    className="mt-0.5 h-4 w-4 shrink-0 text-mist-2"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-[0.975rem] leading-relaxed text-mist">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="bg-surface/40 p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-champagne">
              With TwinCaps
            </p>
            <h3 className="mt-2 font-serif text-2xl text-cream">
              Kept, used and seen
            </h3>
            <ul className="mt-7 space-y-4">
              {NEW.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-champagne"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-[0.975rem] leading-relaxed text-cream">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
