"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Button from "./Button";
import Mark from "./Mark";
import { MENU, MegaPanel } from "./MegaMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setActiveKey(null);
    setMobileOpen(false);
    setMobileGroup(null);
  };

  const active = MENU.find((m) => m.key === activeKey) ?? null;
  const solid = scrolled || mobileOpen || activeKey !== null;

  return (
    <header
      onMouseLeave={() => setActiveKey(null)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setActiveKey(null);
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-line bg-night/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          onClick={closeAll}
          className="flex items-center gap-2.5"
          aria-label="TwinCaps — home"
        >
          <Mark className="h-7 w-7 text-champagne-soft" />
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-cream">Twin</span>
            <span className="metal-text">Caps</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {MENU.map((item) =>
            item.panel ? (
              <div
                key={item.key}
                className="flex items-center"
                onMouseEnter={() => setActiveKey(item.key)}
              >
                <Link
                  href={item.href}
                  onFocus={() => setActiveKey(item.key)}
                  onClick={closeAll}
                  className={`rounded-full py-2 pl-3.5 pr-1.5 text-sm font-medium transition-colors ${
                    activeKey === item.key
                      ? "text-cream"
                      : "text-mist hover:text-cream"
                  }`}
                >
                  {item.label}
                </Link>
                <button
                  type="button"
                  onFocus={() => setActiveKey(item.key)}
                  onClick={() =>
                    setActiveKey(activeKey === item.key ? null : item.key)
                  }
                  aria-haspopup="true"
                  aria-expanded={activeKey === item.key}
                  aria-label={`${item.label} menu`}
                  className={`rounded-full py-2 pl-1 pr-2.5 transition-colors ${
                    activeKey === item.key
                      ? "text-cream"
                      : "text-mist hover:text-cream"
                  }`}
                >
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      activeKey === item.key ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </button>
              </div>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                onMouseEnter={() => setActiveKey(null)}
                onClick={closeAll}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-mist transition-colors hover:text-cream"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" onClick={closeAll} className="px-5 py-2.5">
            Request Offer
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-cream lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" strokeWidth={1.75} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          )}
        </button>
      </div>

      {/* Desktop mega panel — a wide, white product catalogue. */}
      <AnimatePresence>
        {active?.panel && (
          <motion.div
            key={active.key}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-surface/97 shadow-[0_40px_80px_-48px_rgba(28,24,18,0.35)] backdrop-blur-xl lg:block"
          >
            <MegaPanel section={active} onNavigate={closeAll} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-night/97 backdrop-blur-md lg:hidden"
          >
            <nav
              className="mx-auto max-h-[calc(100dvh-72px)] max-w-[1240px] overflow-y-auto px-6 py-5"
              aria-label="Mobile"
            >
              {MENU.map((item) =>
                item.panel ? (
                  <div key={item.key} className="border-b border-line">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileGroup(
                          mobileGroup === item.key ? null : item.key,
                        )
                      }
                      aria-expanded={mobileGroup === item.key}
                      className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-cream"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 text-mist transition-transform duration-300 ${
                          mobileGroup === item.key ? "rotate-180" : ""
                        }`}
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileGroup === item.key && (
                        <motion.ul
                          initial={
                            reduce ? { opacity: 0 } : { opacity: 0, height: 0 }
                          }
                          animate={
                            reduce
                              ? { opacity: 1 }
                              : { opacity: 1, height: "auto" }
                          }
                          exit={
                            reduce ? { opacity: 0 } : { opacity: 0, height: 0 }
                          }
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pb-2"
                        >
                          {item.panel.tiles.map((tile) => (
                            <li key={tile.label}>
                              <Link
                                href={tile.href}
                                onClick={closeAll}
                                className="flex items-baseline justify-between gap-3 py-2.5 pl-3 text-sm text-mist transition-colors hover:text-cream"
                              >
                                <span className="text-cream">{tile.label}</span>
                                <span className="text-xs text-mist-2">
                                  {tile.sub}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={closeAll}
                    className="block border-b border-line py-4 text-base font-medium text-cream"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Button
                href="/contact"
                withArrow
                className="mt-5 w-full"
                onClick={closeAll}
              >
                Request Offer
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
