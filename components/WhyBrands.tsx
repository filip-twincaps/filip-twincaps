import { CupSoda, Eye, Hand, Repeat, Sun, Wifi } from "lucide-react";
import SectionHeading from "./SectionHeading";
import BenefitCard from "./BenefitCard";
import Reveal from "./Reveal";
import Button from "./Button";

const BENEFITS = [
  {
    icon: Hand,
    title: "Genuinely used",
    description:
      "It earns its place by being useful — so it gets kept and reused, not discarded.",
  },
  {
    icon: Repeat,
    title: "Higher retention",
    description:
      "Useful objects outlive the event. Your logo stays in circulation long after.",
  },
  {
    icon: CupSoda,
    title: "The beverage moment",
    description:
      "It activates exactly when a can is opened — your product, in the customer’s hand.",
  },
  {
    icon: Eye,
    title: "A visible brand area",
    description:
      "A clean, ownable surface for your logo and campaign artwork, seen every day.",
  },
  {
    icon: Sun,
    title: "Made for the outdoors",
    description:
      "Beaches, festivals and stadiums are exactly where it proves its worth.",
  },
  {
    icon: Wifi,
    title: "Optional NFC",
    description:
      "Continue the moment digitally when the campaign calls for it — entirely optional.",
  },
];

export default function WhyBrands() {
  return (
    <section
      id="brand-value"
      className="rule-top scroll-mt-24 bg-coal py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <SectionHeading
          eyebrow="Brand value"
          title="Useful enough to keep. Visible enough to matter."
          description="The reasons serious beverage brands choose a reusable touchpoint over another disposable giveaway."
        />

        <div
          id="retention"
          className="mt-14 grid scroll-mt-28 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BENEFITS.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.06}>
              <BenefitCard
                icon={
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                }
                title={title}
                description={description}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-surface/50 p-7 sm:flex-row sm:items-center sm:p-8">
            <p className="font-serif text-xl text-cream">
              Sample first, then scale to bulk.
            </p>
            <Button href="/contact" variant="secondary" withArrow>
              Order Branded Samples
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
