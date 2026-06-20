import Reveal from "./Reveal";
import Button from "./Button";

type CTA = { label: string; href: string };

type CTASectionProps = {
  title: string;
  description?: string;
  primary: CTA;
  secondary?: CTA;
};

/**
 * Final, centered call-to-action band. Reused as the closing section on the
 * homepage and every subpage to keep the offer request one click away.
 */
export default function CTASection({
  title,
  description,
  primary,
  secondary,
}: CTASectionProps) {
  return (
    <section className="rule-top px-6 py-24 sm:px-8 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1180px] text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-serif text-[clamp(1.9rem,4vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.01em] text-cream text-balance">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-mist sm:text-lg">
              {description}
            </p>
          )}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primary.href} variant="primary" withArrow>
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
