import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductExplainer from "@/components/ProductExplainer";
import RealMoments from "@/components/RealMoments";
import EverydayVideo from "@/components/EverydayVideo";
import LifestyleSection from "@/components/LifestyleSection";
import B2BProduction from "@/components/B2BProduction";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Product",
  description:
    "How TwinCaps works: a reusable can-cover system with two covers for 250, 330 and 500 ml cans, an integrated opener, nail-friendly opening, drink covering, optional NFC and custom B2B production.",
};

export default function ProductPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Product"
        title="A can-cover system, made to your brand."
        description="Two reusable covers for common can sizes, an integrated opener, and optional NFC — produced in your colours, sampled before bulk."
        primary={{ label: "Request B2B Offer", href: "/contact" }}
        secondary={{ label: "Order Branded Samples", href: "/contact" }}
      />
      <ProductExplainer />
      <RealMoments />
      <EverydayVideo />
      <LifestyleSection />
      <B2BProduction />
      <CTASection
        title="Bring TwinCaps to your next beverage campaign."
        primary={{ label: "Request B2B Offer", href: "/contact" }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </main>
  );
}
