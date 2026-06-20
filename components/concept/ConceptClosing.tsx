import { Mail } from "lucide-react";
import Reveal from "../Reveal";
import Button from "../Button";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from "@/lib/site";

/**
 * Final B2B moment — a generous, asymmetric closing band.
 */
export default function ConceptClosing() {
  return (
    <section className="px-6 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow">
                <span className="h-px w-8 bg-champagne/70" />
                Built for beverage campaigns
              </p>
              <h2 className="mt-7 max-w-2xl font-serif text-[clamp(2.2rem,5vw,4.25rem)] font-medium leading-[1.0] tracking-[-0.02em] text-cream text-balance">
                Ready to make every opened can a branded touchpoint?
              </h2>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/contact" variant="primary" withArrow>
                  Request B2B Offer
                </Button>
                <Button href="/shop" variant="secondary">
                  View Shop
                </Button>
              </div>
            </div>

            <div className="lg:pb-2">
              <p className="text-sm leading-relaxed text-mist">
                Sample first. Scale after approval. Custom colours, optional NFC
                and B2B bulk — quoted to your campaign.
              </p>
              <a
                href={CONTACT_EMAIL_HREF}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cream transition-colors hover:text-champagne"
              >
                <Mail
                  className="h-4 w-4 text-champagne"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
