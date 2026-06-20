"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    q: "Can we customize the logo and colours?",
    a: "Yes. Every TwinCaps is produced as your branded product — your logo and artwork, matched to your exact brand colours rather than the nearest stock tone.",
  },
  {
    q: "Can we order branded samples first?",
    a: "Yes, and we recommend it. Approve a branded sample for print, colour and finish before committing to a bulk run.",
  },
  {
    q: "What quantities are possible?",
    a: "From samples to high-volume national campaigns — typical ranges run from 1,000 up to 50,000+ pieces. Share your target volume for an exact quote.",
  },
  {
    q: "Can it include NFC?",
    a: "Yes. NFC is an optional add-on. Order TwinCaps as a purely physical product, or embed a chip for digital activation.",
  },
  {
    q: "What can the NFC open?",
    a: "Any web destination you choose: campaign pages, product launches, coupons, loyalty signup, digital menus, event pages, social media, contests, brand stories or limited-edition drops.",
  },
  {
    q: "Does it work without an app?",
    a: "Yes. The customer simply taps the cover with their phone — no app to download, on either side.",
  },
  {
    q: "What can be customized?",
    a: "Logo and artwork, brand colours, campaign editions, packaging, and the optional NFC destination.",
  },
  {
    q: "Can we create campaign-specific editions?",
    a: "Yes. Run limited editions per launch, season, region or sponsorship — each with its own artwork and, optionally, its own NFC destination.",
  },
  {
    q: "Can it be used for events and festivals?",
    a: "Absolutely. Outdoor venues are where covering an open can matters most, which makes it a natural fit for festival, stadium and sponsorship activations.",
  },
  {
    q: "Is it reusable?",
    a: "Yes. The covers are designed to be reused and washed — and that daily reuse is what keeps the brand in the customer’s hand.",
  },
  {
    q: "Are different can sizes supported?",
    a: "It is designed for common beverage can sizes — 250, 330 and 500 ml. Confirm your exact formats when you request an offer.",
  },
  {
    q: "Does it include an opener?",
    a: "Yes. An opener is integrated into the keychain, which is part of what makes it genuinely useful day to day.",
  },
  {
    q: "Can TwinCaps help open a can without damaging nails?",
    a: "Yes. The integrated opening function can help lift the tab more easily, which is especially useful for long or manicured nails.",
  },
  {
    q: "Does TwinCaps make the can spill-proof?",
    a: "No. TwinCaps is not a sealed bottle cap and should not be presented as fully leak-proof. It helps cover the opening and reduce everyday splashes, especially when the can stays upright.",
  },
  {
    q: "Does TwinCaps protect the drink from insects or unwanted contact?",
    a: "It helps keep the can opening covered and reduces exposure to insects, dust, sand and unwanted contact. It should not be marketed as certified anti-tampering protection.",
  },
  {
    q: "What information do you need for a quote?",
    a: "Your brand and campaign, estimated quantity, whether you want NFC, your markets and your timeline. Artwork can follow once we are in touch.",
  },
  {
    q: "Can you support agencies and private-label campaigns?",
    a: "Yes. We work with advertising agencies and support private-label and client campaigns produced under your branding.",
  },
  {
    // TODO: confirm exact material and food-contact compliance wording with legal.
    q: "What compliance details must be confirmed before bulk orders?",
    a: "Material and food-contact compliance, packaging and any market-specific requirements are confirmed per order before production, and finalised with you during the offer stage.",
  },
];

function Item({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const reduce = useReducedMotion();
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-line">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-6 py-5 text-left"
        >
          <span className="text-base font-medium text-cream sm:text-lg">{q}</span>
          <span
            className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-2 text-champagne transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            <Plus className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-6 pr-12 text-sm leading-relaxed text-mist sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Buyer FAQ. With `withHeader` (default) it shows its own two-column heading;
 * on a dedicated /faq page the page hero supplies the heading, so it renders
 * a single calm column instead.
 */
export default function FAQ({ withHeader = true }: { withHeader?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = FAQS.map((item, i) => (
    <Item
      key={item.q}
      index={i}
      q={item.q}
      a={item.a}
      open={openIndex === i}
      onToggle={() => setOpenIndex(openIndex === i ? null : i)}
    />
  ));

  if (!withHeader) {
    return (
      <section id="faq" className="scroll-mt-24 px-6 pb-24 sm:px-8 sm:pb-28 lg:pb-32">
        <div className="mx-auto max-w-3xl">{items}</div>
      </section>
    );
  }

  return (
    <section id="faq" className="rule-top scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers for buyers"
            description="The practical and commercial details brand, agency and procurement teams ask before requesting an offer."
          />
          <div className="lg:pt-2">{items}</div>
        </div>
      </div>
    </section>
  );
}
