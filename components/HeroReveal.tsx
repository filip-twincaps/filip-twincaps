"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import Button from "./Button";

const SPECS = [
  "Custom colours",
  "Integrated opener",
  "Optional NFC",
  "B2B bulk orders",
];

/**
 * Hero opening: `false` shows the static image (/twincaps-premium-01.png),
 * `true` plays the video. Flip this back to `true` to restore the video —
 * the <video> element and its fallback are both kept intact below.
 */
const HERO_VIDEO_ENABLED = false;

/**
 * White-first homepage opening. The TwinCaps2 product film plays full-width
 * directly under the header as a cinematic opening — no headline, copy or CTA
 * over it. The headline, subheadline, spec line and CTAs follow in a calm
 * ivory content block below the video.
 */
export default function HeroReveal() {
  const [videoFailed, setVideoFailed] = useState(false);
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section id="top" className="relative w-full">
      {/* Full-width TwinCaps2 film — the cinematic opening, directly under the
          fixed 72px header. No text, no CTA and no heavy overlay over it.
          Mobile keeps the native 16:9 frame so the product never crops badly;
          desktop fills the viewport for a true opening shot. */}
      <div className="pt-[72px]">
        <div className="relative aspect-video w-full overflow-hidden bg-coal lg:aspect-auto lg:h-[calc(100vh_-_72px)]">
          {HERO_VIDEO_ENABLED && !videoFailed ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="metadata"
              poster="/twincaps-premium-01.png"
              onError={() => setVideoFailed(true)}
              aria-label="TwinCaps reusable can covers being placed on open beverage cans"
              tabIndex={-1}
            >
              <source src="/twincaps.mp4" type="video/mp4" />
            </video>
          ) : (
            <Image
              src="/twincaps-premium-01.png"
              alt="TwinCaps reusable branded can covers on premium beverage cans"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
        </div>
      </div>

      {/* Content — headline, subheadline, specs and CTAs sit BELOW the video */}
      <div className="px-6 pb-20 pt-16 sm:px-8 sm:pt-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={item} className="eyebrow justify-center">
            <span className="h-px w-8 bg-champagne/70" />
            Reusable branded can-cover system
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-[clamp(2.3rem,5.2vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-cream text-balance"
          >
            The can stays covered.
            <br />
            <span className="metal-text">The brand stays visible.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-mist sm:text-lg"
          >
            TwinCaps is a reusable branded can-cover system for beverage
            campaigns — with integrated opener, optional NFC and B2B production
            for samples and bulk orders.
          </motion.p>

          <motion.ul
            variants={item}
            className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] font-medium text-mist"
          >
            {SPECS.map((label, i) => (
              <li key={label} className="flex items-center gap-3">
                {i > 0 && (
                  <span
                    className="h-1 w-1 rounded-full bg-champagne-soft"
                    aria-hidden="true"
                  />
                )}
                {label}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="/contact" variant="primary" withArrow>
              Request B2B Offer
            </Button>
            <Button href="/product" variant="secondary">
              View Product
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
