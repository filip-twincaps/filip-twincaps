import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers for brand, agency and procurement teams: customization, samples, quantities, NFC, can sizes, the integrated opener, reuse, compliance and what we need to quote.",
};

export default function FaqPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="FAQ"
        title="Answers for buyers."
        description="The practical and commercial details brand, agency and procurement teams ask before requesting an offer."
      />
      <FAQ withHeader={false} />
      <CTASection
        title="Still have a question? Ask the B2B team."
        primary={{ label: "Request B2B Offer", href: "/contact" }}
        secondary={{ label: "View Product", href: "/product" }}
      />
    </main>
  );
}
