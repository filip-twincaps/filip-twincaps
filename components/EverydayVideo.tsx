"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function EverydayVideo() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      id="everyday"
      className="rule-top scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="In everyday use"
          title="See how TwinCaps works in everyday use."
          description="A simple object with multiple roles: open the can, cover the drink, carry the brand, and connect the customer through optional NFC."
        />

        <Reveal delay={0.1}>
          <div className="relative mt-12 aspect-video w-full overflow-hidden rounded-3xl border border-line bg-coal">
            {!videoFailed ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                poster="/twincaps-premium-01.png"
                onError={() => setVideoFailed(true)}
                aria-label="TwinCaps in everyday use"
                tabIndex={-1}
              >
                <source src="/twincaps2.mp4" type="video/mp4" />
              </video>
            ) : (
              <Image
                src="/twincaps-premium-01.png"
                alt="TwinCaps reusable branded can covers"
                fill
                sizes="(max-width: 1180px) 100vw, 1180px"
                className="object-cover"
              />
            )}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
