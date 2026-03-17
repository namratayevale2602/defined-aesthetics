/**
 * DAM — Defined Aesthetics by Mayuri
 * Pure SVG logo component — no image file dependency.
 *
 * Props:
 *   variant  : "light" (gold/cream, for dark backgrounds)
 *            | "dark"  (green/gold, for light/cream backgrounds)
 *   layout   : "stacked"    (vertical monogram — Hero, Footer)
 *            | "horizontal" (compact horizontal — Navbar)
 *   width    : number (optional, controls rendered width)
 *   height   : number (optional)
 *   className: string
 */
export default function LogoSVG({
  variant = "light",
  layout = "stacked",
  width,
  height,
  className = "",
}) {
  const gold        = "#C9A435";
  const green       = "#0C3B2E";
  const cream       = "#E8D5A3";

  const c = {
    monogram  : variant === "light" ? gold  : green,
    tagline   : variant === "light" ? cream : green,
    italic    : gold,
    accent    : gold,
    brackets  : variant === "light" ? "rgba(201,164,53,0.42)" : "rgba(12,59,46,0.3)",
    arch      : variant === "light" ? "rgba(201,164,53,0.65)" : "rgba(201,164,53,0.75)",
    archDot   : gold,
    diamond   : gold,
    divLine   : variant === "light" ? "rgba(201,164,53,0.38)" : "rgba(12,59,46,0.25)",
  };

  /* ─────────────────────────────────────────────
     HORIZONTAL layout — for Navbar
     viewBox: 0 0 228 52
  ───────────────────────────────────────────── */
  if (layout === "horizontal") {
    return (
      <svg
        viewBox="0 0 228 52"
        width={width  || 228}
        height={height || 52}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="DAM — Defined Aesthetics by Mayuri"
        role="img"
      >
        {/* Small brow arch above DAM */}
        <path
          d="M 14,28 Q 58,10 102,28"
          stroke={c.arch}
          strokeWidth="1.3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="14"  cy="28" r="1.5" fill={c.archDot} opacity="0.55" />
        <circle cx="102" cy="28" r="1.5" fill={c.archDot} opacity="0.55" />

        {/* DAM */}
        <text
          x="58"
          y="42"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, Georgia, 'Times New Roman', serif"
          fontSize="30"
          fontWeight="600"
          letterSpacing="6"
          fill={c.monogram}
        >DAM</text>

        {/* Vertical gold divider */}
        <line x1="118" y1="8" x2="118" y2="44" stroke={c.accent} strokeWidth="0.7" opacity="0.35" />

        {/* DEFINED AESTHETICS */}
        <text
          x="127"
          y="24"
          textAnchor="start"
          fontFamily="Jost, Arial, Helvetica, sans-serif"
          fontSize="7.5"
          fontWeight="400"
          letterSpacing="3"
          fill={c.tagline}
          opacity="0.9"
        >DEFINED AESTHETICS</text>

        {/* by Mayuri */}
        <text
          x="127"
          y="38"
          textAnchor="start"
          fontFamily="Cormorant Garamond, Georgia, 'Times New Roman', serif"
          fontSize="12"
          fontStyle="italic"
          fontWeight="300"
          letterSpacing="1.2"
          fill={c.italic}
          opacity="0.88"
        >by Mayuri</text>
      </svg>
    );
  }

  /* ─────────────────────────────────────────────
     STACKED layout — for Hero & Footer
     viewBox: 0 0 280 158
  ───────────────────────────────────────────── */
  return (
    <svg
      viewBox="0 0 280 158"
      width={width  || 280}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DAM — Defined Aesthetics by Mayuri"
      role="img"
    >
      {/* Corner brackets — top left */}
      <path d="M 22,22 L 22,42 M 22,22 L 42,22" stroke={c.brackets} strokeWidth="1.3" strokeLinecap="round" />
      {/* Corner brackets — top right */}
      <path d="M 258,22 L 258,42 M 258,22 L 238,22" stroke={c.brackets} strokeWidth="1.3" strokeLinecap="round" />
      {/* Corner brackets — bottom left */}
      <path d="M 22,136 L 22,116 M 22,136 L 42,136" stroke={c.brackets} strokeWidth="1.3" strokeLinecap="round" />
      {/* Corner brackets — bottom right */}
      <path d="M 258,136 L 258,116 M 258,136 L 238,136" stroke={c.brackets} strokeWidth="1.3" strokeLinecap="round" />

      {/* Brow arch decoration above DAM — elegantly references the brand service */}
      <path
        d="M 82,40 Q 140,16 198,40"
        stroke={c.arch}
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="82"  cy="40" r="2.2" fill={c.archDot} opacity="0.55" />
      <circle cx="198" cy="40" r="2.2" fill={c.archDot} opacity="0.55" />

      {/* D  A  M — main monogram */}
      <text
        x="140"
        y="96"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, 'Times New Roman', serif"
        fontSize="60"
        fontWeight="600"
        letterSpacing="10"
        fill={c.monogram}
      >DAM</text>

      {/* Diamond divider */}
      <line x1="46"  y1="106" x2="118" y2="106" stroke={c.divLine} strokeWidth="0.9" />
      {/* Diamond */}
      <polygon points="140,99.5 147.5,106 140,112.5 132.5,106" fill={c.diamond} opacity="0.78" />
      <line x1="162" y1="106" x2="234" y2="106" stroke={c.divLine} strokeWidth="0.9" />

      {/* DEFINED AESTHETICS */}
      <text
        x="140"
        y="122"
        textAnchor="middle"
        fontFamily="Jost, Arial, Helvetica, sans-serif"
        fontSize="8.5"
        fontWeight="400"
        letterSpacing="3.5"
        fill={c.tagline}
        opacity="0.9"
      >DEFINED AESTHETICS</text>

      {/* by Mayuri */}
      <text
        x="140"
        y="138"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, 'Times New Roman', serif"
        fontSize="14"
        fontStyle="italic"
        fontWeight="300"
        letterSpacing="1.5"
        fill={c.italic}
        opacity="0.88"
      >by Mayuri</text>
    </svg>
  );
}
