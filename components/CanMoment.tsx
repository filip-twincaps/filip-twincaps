"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import PremiumImage from "./PremiumImage";

type CanState = {
  n: string;
  label: string;
  src: string;
  alt: string;
  title: string;
  text: string;
};

const STATES: CanState[] = [
  {
    n: "01",
    label: "Open",
    src: "/twincaps-premium-07.png",
    alt: "A TwinCaps cover lifting a can tab open without using a fingernail",
    title: "Open without risking your nails.",
    text: "The integrated opening function helps lift the tab cleanly.",
  },
  {
    n: "02",
    label: "Cover",
    src: "/twincaps-premium-06.png",
    alt: "A covered TwinCaps can keeping insects and dust away from the drink",
    title: "Keep the drink covered.",
    text: "Reduce exposure to insects, dust, sand and unwanted contact.",
  },
  {
    n: "03",
    label: "Move",
    src: "/twincaps-premium-08.png",
    alt: "A TwinCaps-covered can resting in a car cup holder",
    title: "Less splash on the move.",
    text: "Keep the opened can covered in cup holders and everyday movement.",
  },
];

/**
 * The signature homepage interaction: one can stays pinned while the user
 * scrolls, transforming through Open → Cover → Move. Cross-fades use opacity
 * only (GPU-friendly). Falls back to a calm stacked layout on mobile and
 * whenever reduced motion is requested.
 */
export default function CanMoment() {
  const reduce = useReducedMotion();
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setPinned(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [reduce]);

  return pinned ? <PinnedSequence /> : <StackedSequence />;
}

function PinnedSequence() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const o0 = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
  const o1 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const o2 = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);
  const opacities = [o0, o1, o2];

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = v < 0.36 ? 0 : v < 0.66 ? 1 : 2;
    setActive((prev) => (prev === next ? prev : next));
  });

  return (
    <section
      ref={ref}
      aria-label="The Can Moment"
      className="rule-top relative h-[320vh]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-2 items-center gap-12 px-8">
          {/* Pinned visual stage */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line bg-coal shadow-[0_50px_100px_-60px_rgba(28,24,18,0.5)]">
            {STATES.map((s, i) => (
              <motion.div
                key={s.n}
                style={{ opacity: opacities[i] }}
                className="absolute inset-0"
              >
                <PremiumImage
                  src={s.src}
                  alt={s.alt}
                  className="h-full w-full"
                  sizes="(max-width: 1280px) 50vw, 560px"
                  fallbackLabel={s.label}
                />
              </motion.div>
            ))}

            {/* Progress rail */}
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 bg-gradient-to-t from-cream/20 to-transparent px-7 py-6">
              {STATES.map((s, i) => (
                <div key={s.n} className="flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                      active === i ? "bg-white" : "bg-white/40"
                    }`}
                  />
                  <span
                    className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
                      active === i ? "text-white" : "text-white/55"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Swapping caption */}
          <div className="relative">
            <p className="eyebrow">
              <span className="h-px w-8 bg-champagne/70" />
              The Can Moment
            </p>
            <div className="relative mt-6 min-h-[18rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="index-numeral block text-[clamp(3rem,5vw,4.5rem)] text-champagne-soft">
                    {STATES[active].n}
                  </span>
                  <h2 className="mt-5 max-w-md font-serif text-[clamp(2rem,3.4vw,3rem)] font-medium leading-[1.05] tracking-[-0.015em] text-cream text-balance">
                    {STATES[active].title}
                  </h2>
                  <p className="mt-5 max-w-sm text-pretty text-lg leading-relaxed text-mist">
                    {STATES[active].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StackedSequence() {
  return (
    <section className="rule-top px-6 py-24 sm:px-8 sm:py-28" aria-label="The Can Moment">
      <div className="mx-auto max-w-[1240px]">
        <p className="eyebrow">
          <span className="h-px w-8 bg-champagne/70" />
          The Can Moment
        </p>
        <div className="mt-12 space-y-20">
          {STATES.map((s, i) => (
            <motion.figure
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid items-center gap-8 sm:grid-cols-2 sm:gap-12"
            >
              <PremiumImage
                src={s.src}
                alt={s.alt}
                className={`aspect-[4/5] w-full rounded-[1.75rem] border border-line ${
                  i % 2 === 1 ? "sm:order-2" : ""
                }`}
                sizes="(max-width: 640px) 100vw, 50vw"
                fallbackLabel={s.label}
              />
              <figcaption className={i % 2 === 1 ? "sm:order-1" : ""}>
                <span className="index-numeral block text-5xl text-champagne-soft">
                  {s.n}
                </span>
                <h2 className="mt-4 font-serif text-[clamp(1.8rem,5vw,2.5rem)] font-medium leading-[1.06] tracking-[-0.015em] text-cream text-balance">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-sm text-pretty text-base leading-relaxed text-mist">
                  {s.text}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
