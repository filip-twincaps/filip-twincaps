import {
  Beer,
  CupSoda,
  FlaskConical,
  Gift,
  type LucideIcon,
  Megaphone,
  Music,
  ShoppingBag,
  Sun,
  Trophy,
  Zap,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type UseCase = {
  icon: LucideIcon;
  title: string;
  text: string;
  /** Optional deep-link anchor target for the Use Cases mega menu. */
  id?: string;
};

const CASES: UseCase[] = [
  {
    icon: Zap,
    title: "Energy drink launches",
    text: "Hand-to-hand sampling that stays in the customer’s pocket.",
  },
  {
    icon: CupSoda,
    title: "Soft drink campaigns",
    text: "National promotions with a reusable, on-brand keepsake.",
  },
  {
    icon: Beer,
    title: "Beer & RTD promotions",
    text: "Beer gardens and RTD activations, kept dust- and insect-free.",
  },
  {
    icon: Music,
    title: "Festivals & concerts",
    text: "Branded utility for crowds drinking outdoors all day.",
    id: "festivals-concerts",
  },
  {
    icon: Trophy,
    title: "Stadiums & sports sponsorships",
    text: "Sponsor visibility that travels home with the fan.",
  },
  {
    icon: FlaskConical,
    title: "Sampling campaigns",
    text: "Turn a single sample into a lasting brand object.",
  },
  {
    icon: Sun,
    title: "Beach clubs & outdoor venues",
    text: "Sun, sand and open cans — exactly where it is needed.",
  },
  {
    icon: ShoppingBag,
    title: "Retail promotions",
    text: "On-pack and gift-with-purchase incentives that get used.",
    id: "retail-promotions",
  },
  {
    icon: Gift,
    title: "Corporate brand gifts",
    text: "A refined gift that reflects the brand, not the budget.",
  },
  {
    icon: Megaphone,
    title: "Advertising agencies",
    text: "A premium activation product to specify for clients.",
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="rule-top scroll-mt-24 bg-coal py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <SectionHeading
          eyebrow="Use cases"
          title="Made for the brands that compete for attention."
          description="From energy drink launches to stadium sponsorships, TwinCaps fits wherever cans are opened and brands want to be remembered."
        />

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CASES.map(({ icon: Icon, title, text, id }, i) => (
            <Reveal key={title} delay={(i % 2) * 0.05}>
              <div
                id={id}
                className={`group flex h-full items-start gap-4 rounded-2xl border border-line bg-night/40 p-6 transition-colors duration-300 hover:border-champagne/30 hover:bg-surface${
                  id ? " scroll-mt-28" : ""
                }`}
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-2 text-champagne transition-colors duration-300 group-hover:border-champagne/50">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-cream">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">
                    {text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
