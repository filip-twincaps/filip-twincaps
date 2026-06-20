import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const SITE_TITLE =
  "TwinCaps — Reusable Branded Can Covers for Beverage Campaigns";
const SITE_DESCRIPTION =
  "Custom branded reusable can-cover keychains with optional NFC for beverage brands, events, promotions and high-volume B2B campaigns.";

export const metadata: Metadata = {
  // TODO: confirm the production domain; used to resolve OG/Twitter image URLs.
  metadataBase: new URL("https://twincaps.eu"),
  title: {
    default: SITE_TITLE,
    template: "%s — TwinCaps",
  },
  description: SITE_DESCRIPTION,
  applicationName: "TwinCaps",
  keywords: [
    "branded can cover",
    "reusable can cover keychain",
    "NFC promotional product",
    "beverage brand activation",
    "B2B promotional products",
    "custom can lid",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: "TwinCaps",
    images: [
      {
        url: "/twincaps-premium-01.png",
        width: 1200,
        height: 900,
        alt: "TwinCaps reusable branded can covers on premium beverage cans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/twincaps-premium-01.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-night text-cream antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-night"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
