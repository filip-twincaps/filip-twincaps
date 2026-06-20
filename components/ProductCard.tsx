import { Check } from "lucide-react";
import Button from "./Button";
import PremiumImage from "./PremiumImage";
import type { Product } from "./products";

/**
 * B2B product card — no cart, no price. Sample / offer CTAs only.
 */
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-300 hover:border-champagne-soft">
      <div className="relative overflow-hidden">
        <PremiumImage
          src={product.image}
          alt={product.imageAlt}
          className="aspect-[4/3] w-full transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 560px"
          fallbackLabel={product.name}
        />
        {product.badge && (
          <span className="absolute right-4 top-4 rounded-full border border-accent/30 bg-surface/85 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent-deep backdrop-blur-sm">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist-2">
          {product.tagline}
        </p>
        <div className="mt-2 flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl text-cream">{product.name}</h3>
          <span className="shrink-0 text-sm text-champagne">
            Price on request
          </span>
        </div>

        <p className="mt-4 text-pretty text-sm leading-relaxed text-mist">
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
              <span className="text-sm leading-relaxed text-mist">{f}</span>
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
    </div>
  );
}
