import { Check } from "lucide-react";
import Reveal from "../Reveal";
import Button from "../Button";
import PremiumImage from "../PremiumImage";
import { PRODUCTS } from "../products";

/**
 * Two B2B product objects presented as gallery pieces — large image, minimal
 * detail, "Price on request". No cart, no checkout, no e-commerce chrome.
 */
export default function ConceptProducts() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-champagne/70" />
            Two editions · price on request
          </p>
          <h2 className="mt-7 max-w-2xl font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.02em] text-cream text-balance">
            Both made to your brand.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-surface transition-colors duration-300 hover:border-champagne-soft">
                <div className="relative overflow-hidden">
                  <PremiumImage
                    src={product.image}
                    alt={product.imageAlt}
                    className="aspect-[16/11] w-full transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 620px"
                    fallbackLabel={product.name}
                  />
                  {product.badge && (
                    <span className="absolute right-4 top-4 rounded-full border border-accent/30 bg-surface/85 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent-deep backdrop-blur-sm">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-8 sm:p-9">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist-2">
                    {product.tagline}
                  </p>
                  <div className="mt-2 flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-[clamp(1.6rem,2.4vw,2rem)] text-cream">
                      {product.name}
                    </h3>
                    <span className="shrink-0 text-sm text-champagne">
                      Price on request
                    </span>
                  </div>

                  <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-mist">
                    {product.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-champagne"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-relaxed text-mist">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                    {product.ctas.map((cta) => (
                      <Button
                        key={cta.label}
                        href={cta.href}
                        variant={cta.variant}
                        className="flex-1"
                      >
                        {cta.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
