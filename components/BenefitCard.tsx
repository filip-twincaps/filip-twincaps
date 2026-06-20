import type { ReactNode } from "react";

type BenefitCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

/**
 * Calm graphite card with a hairline border and a restrained hover —
 * the border warms and the surface lifts slightly. No glow, no jump.
 */
export default function BenefitCard({
  icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="group h-full rounded-2xl border border-line bg-surface/60 p-7 transition-colors duration-300 hover:border-champagne/30 hover:bg-surface-2">
      <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-2 text-champagne transition-colors duration-300 group-hover:border-champagne/50">
        {icon}
      </div>
      <h3 className="text-base font-semibold tracking-tight text-cream">
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-mist">{description}</p>
    </div>
  );
}
