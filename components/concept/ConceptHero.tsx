"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import Button from "../Button";

const SPECS = [
  "Custom colours",
  "Integrated opener",
  "Optional NFC",
  "B2B bulk orders",
];

/**
 * Executive, white-first hero. The product film sits in a cinematic canvas
 * that expands from an inset, rounded frame toward full width as the hero
 * scrolls — a calm, premium reveal.
 *
 * The scroll-driven clip-path expansion is adapted from the 21st.dev
 * "Animated Video on Scroll" pattern (ContainerInset), restyled entirely to
 * the TwinCaps ivory system and stripped of its dark/neon treatment. All
 * useTransform input ranges are monotonically increasing.
 */
export default function ConceptHero() {
  const reduce = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const insetY = useTransform(scrollYProgress, [0, 0.55], [6, 0]);
  const insetX = useTransform(scrollYProgress, [0, 0.55], [5, 0]);
  const radius = useTransform(scrollYProgress, [0, 1], [30, 16]);
  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${radius}px)`;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section ref={ref} className="relative w-full">
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-32 sm:px-8 sm:pt-40">
        {/* Editorial headline block — calm, centered, gallery-like */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p variants={item} className="eyebrow justify-center">
            <span className="h-px w-8 bg-champagne/70" />
            Reusable branded can-cover system
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 font-serif text-[clamp(2.7rem,6.6vw,5.75rem)] font-medium leading-[0.98] tracking-[-0.02em] text-cream text-balance"
          >
            The can stays covered.
            <br />
            <span className="metal-text">The brand stays visible.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-mist sm:text-xl"
          >
            TwinCaps is a reusable branded can-cover system for beverage
            campaigns — with integrated opener, optional NFC and B2B production
            for samples and bulk orders.
          </motion.p>

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

          <motion.ul
            variants={item}
            className="mx-auto mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-sm font-medium text-mist"
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
        </motion.div>
      </div>

      {/* Cinematic product canvas — expands on scroll */}
      <div className="mx-auto mt-14 w-full max-w-[1340px] px-6 sm:mt-16 sm:px-8">
        <motion.div
          style={reduce ? undefined : { clipPath }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] border border-line bg-coal shadow-[0_60px_120px_-60px_rgba(28,24,18,0.5)] sm:aspect-[16/9]"
        >
          {!videoFailed ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/twincaps-premium-01.png"
              onError={() => setVideoFailed(true)}
              aria-label="TwinCaps reusable can covers in use"
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
        </motion.div>
      </div>
    </section>
  );
}
