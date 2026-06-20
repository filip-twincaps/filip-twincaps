import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import NfcSection from "@/components/NfcSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "NFC",
  description:
    "Optional NFC turns each TwinCaps cover into a digital campaign bridge — no app required. Tap to a campaign page, coupon, loyalty signup, digital menu, contest or social media.",
};

export default function NfcPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="NFC · optional"
        title="An optional digital bridge for your campaign."
        description="Add an NFC chip and every cover becomes a tap-to-open entry point — no app required, with the brand in control of every destination."
        primary={{ label: "Request NFC Sample", href: "/contact" }}
        secondary={{ label: "View Product", href: "/product" }}
      />
      <NfcSection />
      <CTASection
        title="Connect the physical object to your digital campaign."
        description="Trackable campaign interactions can be prepared depending on the campaign setup."
        primary={{ label: "Request Campaign Offer", href: "/contact" }}
        secondary={{ label: "See the Shop", href: "/shop#nfc" }}
      />
    </main>
  );
}
