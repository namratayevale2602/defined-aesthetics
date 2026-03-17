export default function SparklesDoodle({ className = "", size = 80 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Large central sparkle — 4-pointed star */}
      <path
        d="M40 10 L42 36 L68 38 L42 40 L40 66 L38 40 L12 38 L38 36 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Inner subtle cross */}
      <line x1="40" y1="28" x2="40" y2="48" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="30" y1="38" x2="50" y2="38" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />

      {/* Small sparkle — top right */}
      <path
        d="M64 8 L65 18 L75 19 L65 20 L64 30 L63 20 L53 19 L63 18 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Tiny sparkle — bottom left */}
      <path
        d="M15 55 L15.8 61 L22 61.8 L15.8 62.5 L15 68 L14.2 62.5 L8 61.8 L14.2 61 Z"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Accent dots */}
      <circle cx="70" cy="60" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="10" cy="20" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="55" cy="70" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="72" cy="42" r="0.8" fill="currentColor" opacity="0.35" />
      <circle cx="25" cy="72" r="0.8" fill="currentColor" opacity="0.35" />
    </svg>
  );
}
