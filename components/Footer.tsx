import Link from "next/link";
import { Mail } from "lucide-react";
import Mark from "./Mark";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from "@/lib/site";

const NAV = [
  { label: "Product", href: "/product" },
  { label: "Brand Value", href: "/brand-value" },
  { label: "NFC", href: "/nfc" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Shop", href: "/shop" },
  { label: "FAQ", href: "/faq" },
  { label: "Request Offer", href: "/contact" },
];

// TODO: replace with real legal pages once available.
const LEGAL = [
  { label: "Imprint", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rule-top bg-coal">
      <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Mark className="h-7 w-7 text-champagne-soft" />
              <span className="text-lg font-semibold tracking-tight">
                <span className="text-cream">Twin</span>
                <span className="metal-text">Caps</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Reusable branded can-cover system for beverage campaigns.
            </p>
            <a
              href={CONTACT_EMAIL_HREF}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cream transition-colors hover:text-champagne"
            >
              <Mail className="h-4 w-4 text-champagne" strokeWidth={1.75} aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist-2">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist-2">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5">
              {LEGAL.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TODO: only state "Patent protected" once legally confirmed. */}
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-xs text-mist-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} TwinCaps. All rights reserved.</p>
          <p>Reusable branded can covers for beverage campaigns.</p>
        </div>
      </div>
    </footer>
  );
}
