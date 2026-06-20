export type ProductCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  badge?: string;
  ctas: ProductCta[];
};

// No prices: TwinCaps is sold as a B2B offer. Use "Price on request".
export const PRODUCTS: Product[] = [
  {
    id: "classic",
    name: "TwinCaps Classic",
    tagline: "The reusable branded can-cover system",
    description:
      "A custom branded reusable can-cover keychain with two covers and an integrated opener — produced in your brand colours with custom artwork.",
    features: [
      "Two reusable covers for common can sizes",
      "Integrated opener, keychain format",
      "Custom logo and brand colour matching",
      "Reusable and washable",
    ],
    image: "/twincaps-premium-01.png",
    imageAlt: "TwinCaps Classic covers on a black and a silver beverage can",
    ctas: [
      { label: "Request Sample", href: "/contact", variant: "secondary" },
      { label: "Request Bulk Offer", href: "/contact", variant: "primary" },
    ],
  },
  {
    id: "nfc",
    name: "TwinCaps NFC Edition",
    tagline: "The connected campaign edition",
    description:
      "A custom branded reusable can-cover keychain with an optional NFC chip for campaign pages, coupons, menus, loyalty or social activation — the brand controls every destination.",
    features: [
      "Everything in TwinCaps Classic",
      "Embedded NFC chip, tap-to-open",
      "Pre-linked campaign destination",
      "No app required for the customer",
    ],
    image: "/twincaps-premium-05.png",
    imageAlt: "A phone tapping the NFC chip in a TwinCaps NFC Edition cover",
    badge: "NFC",
    ctas: [
      { label: "Request NFC Sample", href: "/contact", variant: "secondary" },
      { label: "Request Campaign Offer", href: "/contact", variant: "primary" },
    ],
  },
];
