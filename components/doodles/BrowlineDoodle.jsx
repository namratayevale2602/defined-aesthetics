export default function BrowlineDoodle({ className = "", width = 150 }) {
  return (
    <svg
      width={width}
      height="40"
      viewBox="0 0 150 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Primary brow arch */}
      <path
        d="M10 30 C30 30 40 10 75 8 C110 6 120 20 140 22"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Shadow / secondary arch — softer, offset */}
      <path
        d="M20 32 C35 32 45 14 75 12 C105 10 118 24 135 26"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Fine detail line at tail */}
      <path
        d="M118 21 C126 20 133 22 140 22"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}
