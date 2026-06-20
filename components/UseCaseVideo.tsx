"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Wide, premium TwinCaps2 film for the Use Cases page — sits between the page
 * opening and the "Made for the brands that compete for attention" section.
 * A large contained cinematic frame in the site's white-first style: no player
 * chrome, autoplaying and muted, with a graceful poster fallback.
 */
export default function UseCaseVideo() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="px-6 pb-16 sm:px-8 sm:pb-20">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-line bg-coal shadow-[0_40px_90px_-56px_rgba(28,24,18,0.45)]">
            {!videoFailed ? (
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
                aria-label="TwinCaps reusable can covers in everyday campaign use"
                tabIndex={-1}
              >
                <source src="/twincaps2.mp4" type="video/mp4" />
              </video>
            ) : (
              <Image
                src="/twincaps-premium-01.png"
                alt="TwinCaps reusable branded can covers on premium beverage cans"
                fill
                sizes="(max-width: 1180px) 100vw, 1180px"
                className="object-cover"
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
