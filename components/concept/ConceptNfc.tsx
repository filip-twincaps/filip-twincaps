"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Reveal from "../Reveal";

/**
 * NFC reveal — the one section where the mineral-blue accent leads, signalling
 * the connected layer. Uses the secondary product film with a still fallback.
 */
export default function ConceptNfc() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="px-6 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-accent-deep">
              <span className="h-px w-8 bg-accent" />
              NFC · optional
            </p>
            <h2 className="mt-7 max-w-xl font-serif text-[clamp(2.2rem,4.6vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.02em] text-cream text-balance">
              Tap. Connect. Continue the campaign.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-mist">
              Optional NFC can open campaign pages, coupons, loyalty signups,
              menus, product stories or event activations — without an app.
            </p>
            <Link
              href="/nfc"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent-deep transition-colors hover:text-accent"
            >
              Explore NFC
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[3rem] opacity-80 blur-3xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 65% 35%, var(--color-accent-soft), transparent)",
              }}
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-line bg-coal shadow-[0_50px_100px_-65px_rgba(28,24,18,0.5)]">
              {!videoFailed ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/twincaps-premium-05.png"
                  onError={() => setVideoFailed(true)}
                  aria-label="TwinCaps NFC cover being tapped"
                  tabIndex={-1}
                >
                  <source src="/twincaps2.mp4" type="video/mp4" />
                </video>
              ) : (
                <Image
                  src="/twincaps-premium-05.png"
                  alt="A phone tapping the optional NFC chip in a TwinCaps cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 580px"
                  className="object-cover"
                />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
