export default function FloralDoodle({ className = "", size = 120 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Center circle */}
      <circle cx="60" cy="55" r="8" stroke="currentColor" strokeWidth="1.2" fill="none" />

      {/* Petal 1 - top */}
      <path
        d="M60 47 C55 37 42 33 40 43 C38 53 50 57 60 55"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Petal 2 - top right */}
      <path
        d="M68 51 C78 46 82 33 72 31 C62 29 58 41 60 55"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Petal 3 - bottom right */}
      <path
        d="M66 62 C76 67 88 62 84 52 C80 42 68 46 60 55"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Petal 4 - bottom */}
      <path
        d="M54 64 C49 74 54 86 64 82 C74 78 70 66 60 55"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Petal 5 - left */}
      <path
        d="M52 57 C42 53 32 59 36 69 C40 79 52 75 60 55"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Outer petal layer - top */}
      <path
        d="M60 40 C56 28 44 22 42 30 C40 38 52 44 60 47"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Outer petal - top right */}
      <path
        d="M72 46 C82 40 88 28 78 26 C68 24 64 36 68 51"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Outer petal - right */}
      <path
        d="M70 62 C82 68 92 62 88 50 C84 38 72 44 66 62"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Stem */}
      <path
        d="M60 63 C58 74 55 83 52 95"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Left leaf */}
      <path
        d="M57 76 C50 72 44 74 42 80 C48 80 54 78 57 76Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      {/* Right leaf */}
      <path
        d="M55 86 C60 82 66 84 67 90 C62 90 57 88 55 86Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
