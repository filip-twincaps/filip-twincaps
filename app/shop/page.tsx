import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { PRODUCTS } from "@/components/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "TwinCaps Classic and the TwinCaps NFC Edition — custom branded reusable can covers for beverage campaigns. No checkout: request a sample or a B2B offer. Price on request.",
};

const STEPS = [
  { step: "01", label: "Request a branded sample" },
  { step: "02", label: "Approve your edition" },
  { step: "03", label: "Receive your B2B offer" },
];

export default function ShopPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Shop"
        title="Two editions. Both made to your brand."
        description="Every order is a B2B offer — there is no checkout and no fixed price. Request a sample or an offer, and we prepare your quote."
      />

      <section className="px-6 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-3 md:grid-cols-2">
          {PRODUCTS.map((product, i) => (
            <Reveal
              key={product.id}
              delay={i * 0.08}
              className="scroll-mt-28"
            >
              <div id={product.id}>
                <ProductCard product={product} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rule-top px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <div className="grid grid-cols-1 gap-6 rounded-3xl border border-line bg-surface/50 p-8 sm:grid-cols-3 sm:p-10">
              {STEPS.map(({ step, label }) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="font-serif text-2xl text-champagne">{step}</span>
                  <span className="mt-1 text-sm font-medium leading-snug text-cream">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Request a sample, then scale to bulk."
        primary={{ label: "Request B2B Offer", href: "/contact" }}
        secondary={{ label: "How it works", href: "/product" }}
      />
    </main>
  );
}
