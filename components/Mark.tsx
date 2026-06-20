type MarkProps = {
  className?: string;
};

/**
 * TwinCaps brand mark: a key ring above two overlapping can-cover discs.
 * Uses `currentColor` so it inherits text colour / metallic gradients.
 */
export default function Mark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      role="img"
      aria-label="TwinCaps mark"
    >
      {/* key ring */}
      <circle
        cx="20"
        cy="7"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      {/* two overlapping covers */}
      <circle
        cx="15"
        cy="25"
        r="9.5"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.55"
      />
      <circle cx="24" cy="25" r="9.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="25" r="3" fill="currentColor" />
    </svg>
  );
}
