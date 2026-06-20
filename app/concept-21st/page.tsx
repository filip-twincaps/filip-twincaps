import type { Metadata } from "next";
import ConceptHero from "@/components/concept/ConceptHero";
import ConceptBelief from "@/components/concept/ConceptBelief";
import ConceptMoments from "@/components/concept/ConceptMoments";
import ConceptCanMoment from "@/components/concept/ConceptCanMoment";
import ConceptNfc from "@/components/concept/ConceptNfc";
import ConceptProducts from "@/components/concept/ConceptProducts";
import ConceptClosing from "@/components/concept/ConceptClosing";

export const metadata: Metadata = {
  title: "Concept",
  description:
    "An experimental, art-directed concept for TwinCaps — a reusable branded can-cover system for beverage campaigns. The can stays covered. The brand stays visible.",
  robots: { index: false, follow: false },
};

/**
 * /concept-21st — an experimental, white-first concept route. Self-contained;
 * reuses the shared Header/Footer (from app/layout) and shared primitives.
 * The current site is untouched.
 */
export default function ConceptPage() {
  return (
    <main id="main">
      <ConceptHero />
      <ConceptBelief />
      <ConceptMoments />
      <ConceptCanMoment />
      <ConceptNfc />
      <ConceptProducts />
      <ConceptClosing />
    </main>
  );
}
