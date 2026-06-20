import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import PremiumImage from "./PremiumImage";

/**
 * Block 4 — NFC micro-reveal. The one place the energetic mineral-blue accent
 * is allowed to lead, signalling the connected, digital layer.
 */
export default function NfcReveal() {
  return (
    <section className="rule-top px-6 py-24 sm:px-8 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-accent-deep">
              <span className="h-px w-8 bg-accent" />
              NFC · optional
            </p>
            <h2 className="mt-7 max-w-xl font-serif text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.04] tracking-[-0.015em] text-cream text-balance">
              Tap. Connect. Continue the campaign.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-mist">
              Optional NFC can open a campaign page, coupon, loyalty signup,
              menu, product story or event activation — without an app.
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
            {/* Faint accent wash anchors the connected moment. */}
            <div
              className="absolute -inset-4 -z-10 rounded-[2.5rem] opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 70% 30%, var(--color-accent-soft), transparent)",
              }}
              aria-hidden="true"
            />
            <PremiumImage
              src="/twincaps-premium-05.png"
              alt="A phone tapping the optional NFC chip in a TwinCaps cover"
              className="aspect-[4/3] w-full rounded-[2rem] border border-line shadow-[0_40px_90px_-60px_rgba(28,24,18,0.5)]"
              sizes="(max-width: 1024px) 100vw, 580px"
              fallbackLabel="Tap to connect"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
