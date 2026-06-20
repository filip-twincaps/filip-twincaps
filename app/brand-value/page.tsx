import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProblemStory from "@/components/ProblemStory";
import WhyBrands from "@/components/WhyBrands";
import Comparison from "@/components/Comparison";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import PremiumImage from "@/components/PremiumImage";

export const metadata: Metadata = {
  title: "Brand Value",
  description:
    "Why beverage brands choose TwinCaps: the brand moment continues after the can is opened, giveaway retention rises, and a useful object keeps a visible logo in daily use.",
};

function EventActivation() {
  return (
    <section id="events" className="rule-top scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <PremiumImage
              src="/twincaps-premium-08.png"
              alt="A TwinCaps-covered can carried through an outdoor event"
              className="aspect-[4/3] w-full rounded-3xl border border-line"
              sizes="(max-width: 1024px) 100vw, 560px"
              fallbackLabel="Event activation"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-champagne">
              <span className="h-px w-8 bg-champagne/70" />
              Event activation
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium leading-[1.1] tracking-[-0.01em] text-cream text-balance">
              A branded object that walks home from the event.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-mist sm:text-lg">
              Festivals, stadiums and beach clubs are exactly where an open can
              needs covering — and where sponsor visibility travels home with the
              crowd.
            </p>
            <Link
              href="/use-cases"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-champagne transition-colors hover:text-champagne-deep"
            >
              See where TwinCaps fits
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function BrandValuePage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Brand value"
        title="The brand moment does not end after opening."
        description="A reusable, useful object keeps your logo in daily use long after the can is empty — and the campaign budget keeps working."
        primary={{ label: "Request B2B Offer", href: "/contact" }}
        secondary={{ label: "View Product", href: "/product" }}
      />
      <ProblemStory />
      <WhyBrands />
      <EventActivation />
      <Comparison />
      <CTASection
        title="Put the budget behind an object customers keep."
        primary={{ label: "Request B2B Offer", href: "/contact" }}
        secondary={{ label: "Explore Use Cases", href: "/use-cases" }}
      />
    </main>
  );
}
