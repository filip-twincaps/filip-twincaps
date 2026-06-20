import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import UseCaseVideo from "@/components/UseCaseVideo";
import UseCases from "@/components/UseCases";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Where TwinCaps makes sense: energy drink launches, soft drink campaigns, beer and RTD, festivals, concerts, stadiums, beach clubs, sampling, retail promotions, agencies and corporate gifts.",
};

export default function UseCasesPage() {
  return (
    <main id="main">
      <PageHero
        id="top"
        eyebrow="Use cases"
        title="Made for the brands that compete for attention."
        description="From energy drink launches to stadium sponsorships, TwinCaps fits wherever cans are opened and brands want to be remembered."
        primary={{ label: "Request B2B Offer", href: "/contact" }}
        secondary={{ label: "See Brand Value", href: "/brand-value" }}
      />
      <UseCaseVideo />
      <UseCases />
      <CTASection
        title="Find the fit for your next activation."
        primary={{ label: "Request B2B Offer", href: "/contact" }}
        secondary={{ label: "View Product", href: "/product" }}
      />
    </main>
  );
}
