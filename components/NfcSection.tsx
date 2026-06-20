import { Smartphone, Sparkles, Wifi } from "lucide-react";
import Reveal from "./Reveal";
import PremiumImage from "./PremiumImage";

const POINTS = [
  { icon: Wifi, label: "No app required" },
  { icon: Smartphone, label: "Customer taps with a phone" },
  { icon: Sparkles, label: "The brand controls the destination" },
];

const DESTINATIONS = [
  "Campaign page",
  "Product launch page",
  "Coupon",
  "Loyalty signup",
  "Digital menu",
  "Event landing page",
  "Social media",
  "Contest",
  "Brand story",
  "Limited edition drop",
];

export default function NfcSection() {
  return (
    <section id="nfc" className="rule-top scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <PremiumImage
              src="/twincaps-premium-05.png"
              alt="A phone held to a TwinCaps cover, opening a brand page via NFC"
              className="aspect-[4/3] w-full rounded-3xl border border-line"
              sizes="(max-width: 1024px) 100vw, 560px"
              fallbackLabel="Tap to connect"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-champagne">
                <span className="h-px w-8 bg-champagne/70" />
                NFC · optional
              </p>
              <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.08] tracking-[-0.01em] text-cream text-balance">
                Add NFC and every TwinCaps becomes a digital campaign entry
                point.
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-mist sm:text-lg">
                A discreet chip inside the cover links the physical product to
                your digital world. It is entirely optional — and when you use
                it, you decide exactly where each tap leads.
              </p>
            </Reveal>

            <ul id="tap" className="mt-8 scroll-mt-28 space-y-3">
              {POINTS.map(({ icon: Icon, label }, i) => (
                <Reveal key={label} delay={i * 0.05}>
                  <li className="flex items-center gap-3 text-[0.975rem] text-cream">
                    <Icon
                      className="h-4 w-4 shrink-0 text-champagne"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    {label}
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <div
                id="destinations"
                className="mt-8 scroll-mt-28 border-t border-line pt-7"
              >
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist-2">
                  A tap can open
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {DESTINATIONS.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2.5 text-sm text-mist"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-champagne" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p
                  id="tracking"
                  className="mt-6 scroll-mt-28 text-sm leading-relaxed text-mist-2"
                >
                  Trackable campaign interactions can be prepared depending on
                  the campaign setup.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
