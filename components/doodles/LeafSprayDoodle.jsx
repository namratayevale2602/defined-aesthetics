export default function LeafSprayDoodle({ className = "", size = 100 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main stem */}
      <path
        d="M50 95 C50 80 48 65 45 50 C42 35 38 22 35 12"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Left leaf - lower */}
      <path
        d="M47 70 C38 65 30 60 28 50 C35 52 42 58 47 70Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      {/* Left leaf vein - lower */}
      <path
        d="M47 70 C40 62 34 56 28 50"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Left leaf - upper */}
      <path
        d="M44 52 C35 45 28 38 30 28 C36 32 42 42 44 52Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      {/* Left leaf vein - upper */}
      <path
        d="M44 52 C38 44 32 36 30 28"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Right leaf - lower */}
      <path
        d="M45 78 C54 72 62 66 64 56 C57 58 50 65 45 78Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      {/* Right leaf vein - lower */}
      <path
        d="M45 78 C52 70 58 64 64 56"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Right leaf - upper */}
      <path
        d="M42 60 C50 52 58 44 56 34 C50 38 44 50 42 60Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      {/* Right leaf vein - upper */}
      <path
        d="M42 60 C49 52 55 44 56 34"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Top flower bud */}
      <circle cx="35" cy="12" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Bud sepal left */}
      <path
        d="M35 8 C33 5 30 3 28 5"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Bud sepal right */}
      <path
        d="M35 8 C37 5 40 3 42 5"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Small side branch */}
      <path
        d="M40 36 C44 30 48 26 50 20"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Small bud on branch */}
      <circle cx="50" cy="20" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6" />
    </svg>
  );
}
