import type { Metadata } from "next";
import { Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a B2B Offer",
  description:
    "Request a TwinCaps B2B offer or branded sample. Tell us your brand, campaign, quantity and NFC preference — there is no checkout and no obligation.",
};

const NEED = [
  "Your brand and campaign",
  "Estimated quantity",
  "NFC: yes, no, or please advise",
  "Markets and timeline",
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Request your B2B offer."
        description="Tell us about your brand, campaign and volume. We’ll prepare a tailored offer and, if you’d like, a branded sample first — there is no checkout and no obligation."
      />

      <section className="px-6 pb-24 sm:px-8 sm:pb-28 lg:pb-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist-2">
                  What helps us quote
                </p>
                <ul className="mt-4 space-y-2.5">
                  {NEED.map((n) => (
                    <li
                      key={n}
                      className="flex items-center gap-2.5 text-sm text-mist"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-champagne" />
                      {n}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-10 border-t border-line pt-7">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist-2">
                    Prefer email?
                  </p>
                  <a
                    href={CONTACT_EMAIL_HREF}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cream transition-colors hover:text-champagne"
                  >
                    <Mail
                      className="h-4 w-4 text-champagne"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
