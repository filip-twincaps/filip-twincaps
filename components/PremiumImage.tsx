"use client";

import Image from "next/image";
import { useState } from "react";
import Mark from "./Mark";

type PremiumImageProps = {
  src: string;
  alt: string;
  /** Applied to the positioned wrapper (set aspect ratio + radius here). */
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Small caption shown inside the fallback when the asset is missing. */
  fallbackLabel?: string;
};

/**
 * Product imagery with a graceful fallback. If the file is missing or fails
 * to load, a calm warm placeholder is shown instead of a broken image.
 * The wrapper is positioned, so callers only set aspect/rounding via className.
 */
export default function PremiumImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  fallbackLabel,
}: PremiumImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-coal ${className}`}>
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface-2 via-surface to-coal">
          <Mark className="h-12 w-12 text-mist-2" />
          {fallbackLabel && (
            <span className="px-4 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-mist-2">
              {fallbackLabel}
            </span>
          )}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
