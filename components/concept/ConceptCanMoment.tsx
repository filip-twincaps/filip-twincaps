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
import PremiumImage from "../PremiumImage";

type Stage = {
  n: string;
  label: string;
  src: string;
  alt: string;
  title: string;
  text: string;
};

const STAGES: Stage[] = [
  {
    n: "01",
    label: "Open",
    src: "/twincaps-premium-07.png",
    alt: "A TwinCaps cover lifting a can tab open without using a fingernail",
    title: "Open.",
    text: "The integrated opening function helps lift the tab cleanly — no nails.",
  },
  {
    n: "02",
    label: "Cover",
    src: "/twincaps-premium-06.png",
    alt: "A covered TwinCaps can keeping insects and dust away from the drink",
    title: "Cover.",
    text: "Reduce exposure to insects, dust, sand and unwanted contact.",
  },
  {
    n: "03",
    label: "Carry",
    src: "/twincaps-premium-08.png",
    alt: "A TwinCaps-covered can resting in a car cup holder",
    title: "Carry.",
    text: "Keep the opened can covered in cup holders and everyday movement.",
  },
  {
    n: "04",
    label: "Connect",
    src: "/twincaps-premium-05.png",
    alt: "A phone tapping the optional NFC chip in a TwinCaps cover",
    title: "Connect.",
    text: "Optional NFC opens a campaign the moment the cover is tapped — no app.",
  },
  {
    n: "05",
    label: "Brand stays visible",
    src: "/twincaps-premium-01.png",
    alt: "TwinCaps branded covers on two premium beverage cans",
    title: "The brand stays visible.",
    text: "A physical touchpoint that carries the campaign long after the can.",
  },
];

/**
 * The memorable interaction: one product stays pinned while the story moves
 * through Open → Cover → Carry → Connect → Brand stays visible. Cross-fades use
 * opacity only. All useTransform input ranges are monotonically increasing —
 * no "offsets must be monotonically non-decreasing" error. Falls back to a calm
 * stacked layout on mobile and under reduced motion.
 */
export default function ConceptCanMoment() {
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

  return pinned ? <Pinned /> : <Stacked />;
}

function Pinned() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Monotonically increasing input ranges for every stage.
  const o0 = useTransform(scrollYProgress, [0, 0.16, 0.22], [1, 1, 0]);
  const o1 = useTransform(
    scrollYProgress,
    [0.16, 0.22, 0.36, 0.42],
    [0, 1, 1, 0],
  );
  const o2 = useTransform(
    scrollYProgress,
    [0.36, 0.42, 0.56, 0.62],
    [0, 1, 1, 0],
  );
  const o3 = useTransform(
    scrollYProgress,
    [0.56, 0.62, 0.76, 0.82],
    [0, 1, 1, 0],
  );
  const o4 = useTransform(scrollYProgress, [0.76, 0.82, 1], [0, 1, 1]);
  const opacities = [o0, o1, o2, o3, o4];

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next =
      v < 0.2 ? 0 : v < 0.4 ? 1 : v < 0.6 ? 2 : v < 0.8 ? 3 : 4;
    setActive((prev) => (prev === next ? prev : next));
  });

  return (
    <section ref={ref} aria-label="The Can Moment" className="relative h-[460vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-2 items-center gap-14 px-8">
          {/* Caption */}
          <div className="relative">
            <p className="eyebrow">
              <span className="h-px w-8 bg-champagne/70" />
              The Can Moment
            </p>
            <div className="relative mt-7 min-h-[20rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="index-numeral block text-[clamp(3rem,5vw,4.5rem)] text-champagne-soft">
                    {STAGES[active].n}
                  </span>
                  <h2 className="mt-5 max-w-md font-serif text-[clamp(2.2rem,3.6vw,3.25rem)] font-medium leading-[1.02] tracking-[-0.02em] text-cream text-balance">
                    {STAGES[active].title}
                  </h2>
                  <p className="mt-5 max-w-sm text-pretty text-lg leading-relaxed text-mist">
                    {STAGES[active].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress rail */}
            <div className="mt-10 flex items-center gap-2.5">
              {STAGES.map((s, i) => (
                <span
                  key={s.n}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    active === i ? "w-10 bg-accent" : "w-5 bg-line-2"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          {/* Pinned visual */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line bg-coal shadow-[0_60px_120px_-65px_rgba(28,24,18,0.5)]">
            {STAGES.map((s, i) => (
              <motion.div
                key={s.n}
                style={{ opacity: opacities[i] }}
                className="absolute inset-0"
              >
                <PremiumImage
                  src={s.src}
                  alt={s.alt}
                  className="h-full w-full"
                  sizes="(max-width: 1280px) 50vw, 600px"
                  fallbackLabel={s.label}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stacked() {
  return (
    <section
      aria-label="The Can Moment"
      className="px-6 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <p className="eyebrow">
          <span className="h-px w-8 bg-champagne/70" />
          The Can Moment
        </p>
        <div className="mt-12 space-y-20">
          {STAGES.map((s, i) => (
            <motion.figure
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
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
                <h2 className="mt-4 font-serif text-[clamp(1.9rem,5vw,2.6rem)] font-medium leading-[1.04] tracking-[-0.02em] text-cream text-balance">
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
