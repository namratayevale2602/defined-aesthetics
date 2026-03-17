export default function DiamondLineDoodle({ className = "", width = 200 }) {
  const cx = width / 2;
  return (
    <svg
      width={width}
      height="20"
      viewBox={`0 0 ${width} 20`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left line */}
      <line
        x1="0"
        y1="10"
        x2={cx - 14}
        y2="10"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
      {/* Center diamond */}
      <path
        d={`M${cx - 10} 10 L${cx} 4 L${cx + 10} 10 L${cx} 16 Z`}
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        opacity="0.7"
      />
      {/* Right line */}
      <line
        x1={cx + 14}
        y1="10"
        x2={width}
        y2="10"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
  );
}
