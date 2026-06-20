import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PremiumImage from "./PremiumImage";

export type MegaTile = {
  src: string;
  alt: string;
  label: string;
  sub: string;
  href: string;
};

export type MegaSection = {
  key: string;
  label: string;
  href: string;
  panel?: {
    blurb: string;
    tiles: MegaTile[];
    cta: { label: string; href: string };
  };
};

/**
 * Primary navigation + mega-menu content. Each entry resolves to a real
 * subpage; every panel is a row of large image tiles — a premium product
 * catalogue rather than a dense web dropdown. Tiles deep-link into sections.
 */
export const MENU: MegaSection[] = [
  {
    key: "product",
    label: "Product",
    href: "/product",
    panel: {
      blurb: "A reusable branded can-cover system — not a giveaway.",
      tiles: [
        {
          src: "/twincaps-premium-07.png",
          alt: "A TwinCaps cover lifting a can tab open",
          label: "Open",
          sub: "Integrated opener",
          href: "/product#opening",
        },
        {
          src: "/twincaps-premium-06.png",
          alt: "A covered TwinCaps can keeping insects out",
          label: "Cover",
          sub: "Keep the drink covered",
          href: "/product#covered",
        },
        {
          src: "/twincaps-premium-08.png",
          alt: "A TwinCaps-covered can in a car cup holder",
          label: "Carry",
          sub: "On the move",
          href: "/product#on-the-move",
        },
        {
          src: "/twincaps-premium-05.png",
          alt: "A phone tapping the NFC chip in a TwinCaps cover",
          label: "Connect",
          sub: "Optional NFC",
          href: "/nfc",
        },
      ],
      cta: { label: "Explore the product", href: "/product" },
    },
  },
  {
    key: "brand-value",
    label: "Brand Value",
    href: "/brand-value",
    panel: {
      blurb: "Why serious beverage brands keep it in the budget.",
      tiles: [
        {
          src: "/twincaps-premium-01.png",
          alt: "TwinCaps covers on two premium beverage cans",
          label: "Useful enough to keep",
          sub: "Daily-use object",
          href: "/brand-value",
        },
        {
          src: "/twincaps-premium-02.png",
          alt: "Two TwinCaps can covers, one lifted from an open can",
          label: "Visible after opening",
          sub: "The brand stays present",
          href: "/brand-value#retention",
        },
        {
          src: "/twincaps-premium-09.png",
          alt: "Three TwinCaps colourways with the opener clip detail",
          label: "Better than giveaways",
          sub: "Compare the budget",
          href: "/brand-value#comparison",
        },
      ],
      cta: { label: "See the brand case", href: "/brand-value" },
    },
  },
  {
    key: "nfc",
    label: "NFC",
    href: "/nfc",
    panel: {
      blurb: "Optional NFC turns each cover into a campaign entry point.",
      tiles: [
        {
          src: "/twincaps-premium-05.png",
          alt: "A phone tapping the optional NFC chip in a TwinCaps cover to open a campaign",
          label: "Tap2Campaign",
          sub: "No app required",
          href: "/nfc#tap",
        },
      ],
      cta: { label: "Explore NFC", href: "/nfc" },
    },
  },
  {
    key: "use-cases",
    label: "Use Cases",
    href: "/use-cases",
    panel: {
      blurb: "Wherever cans are opened and brands want to be remembered.",
      tiles: [
        {
          src: "/twincaps-premium-10.png",
          alt: "Branded TwinCaps covers across a range of campaign use cases",
          label: "Use Cases",
          sub: "Where TwinCaps fits",
          href: "/use-cases#top",
        },
        {
          src: "/twincaps-premium-11.png",
          alt: "A TwinCaps-covered can held by a fan at an outdoor concert",
          label: "Festivals & Concerts",
          sub: "Outdoor crowds",
          href: "/use-cases#festivals-concerts",
        },
        {
          src: "/twincaps-premium-12.png",
          alt: "TwinCaps covers used in an in-store retail promotion",
          label: "Retail Promotions",
          sub: "On-pack & gift-with-purchase",
          href: "/use-cases#retail-promotions",
        },
      ],
      cta: { label: "Browse use cases", href: "/use-cases" },
    },
  },
  {
    key: "shop",
    label: "Shop",
    href: "/shop",
    panel: {
      blurb: "Two editions, both made to your brand. Price on request.",
      tiles: [
        {
          src: "/twincaps-premium-01.png",
          alt: "TwinCaps Classic covers on two beverage cans",
          label: "TwinCaps Classic",
          sub: "The can-cover system",
          href: "/shop#classic",
        },
        {
          src: "/twincaps-premium-05.png",
          alt: "TwinCaps NFC Edition with a phone tapping the chip",
          label: "TwinCaps NFC Edition",
          sub: "The connected edition",
          href: "/shop#nfc",
        },
      ],
      cta: { label: "Browse the shop", href: "/shop" },
    },
  },
];

/** Desktop full-width white catalogue panel. */
export function MegaPanel({
  section,
  onNavigate,
}: {
  section: MegaSection;
  onNavigate: () => void;
}) {
  if (!section.panel) return null;
  const { blurb, tiles, cta } = section.panel;

  return (
    <div className="mx-auto max-w-[1240px] px-6 py-9 sm:px-8">
      <div className="flex items-end justify-between gap-6">
        <p className="max-w-md font-serif text-xl leading-snug text-cream">
          {blurb}
        </p>
        <Link
          href={cta.href}
          onClick={onNavigate}
          className="hidden shrink-0 items-center gap-2 text-sm font-medium text-champagne transition-colors hover:text-champagne-deep sm:inline-flex"
        >
          {cta.label}
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </Link>
      </div>

      <div
        className={`mt-7 grid gap-4 ${
          tiles.length >= 4
            ? "grid-cols-2 lg:grid-cols-4"
            : tiles.length === 3
              ? "grid-cols-1 sm:grid-cols-3"
              : tiles.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:max-w-md"
        }`}
      >
        {tiles.map((tile) => (
          <Link
            key={tile.label}
            href={tile.href}
            onClick={onNavigate}
            className="group/tile block overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-champagne-soft"
          >
            <div className="overflow-hidden">
              <PremiumImage
                src={tile.src}
                alt={tile.alt}
                className="aspect-[4/3] w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tile:scale-[1.04]"
                sizes="(max-width: 1024px) 50vw, 280px"
                fallbackLabel={tile.label}
              />
            </div>
            <div className="flex items-center justify-between gap-3 px-4 py-3.5">
              <div>
                <p className="font-serif text-base leading-tight text-cream">
                  {tile.label}
                </p>
                <p className="mt-0.5 text-xs text-mist">{tile.sub}</p>
              </div>
              <ArrowRight
                className="h-4 w-4 shrink-0 -translate-x-1 text-champagne opacity-0 transition-all duration-300 group-hover/tile:translate-x-0 group-hover/tile:opacity-100"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
