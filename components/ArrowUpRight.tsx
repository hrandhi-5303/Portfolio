/** A single monochrome navigation glyph; direction keeps other link cues consistent. */
export default function ArrowUpRight({
  direction = "up-right",
}: {
  direction?: "up-right" | "right" | "down" | "left";
}) {
  return (
    <svg
      className={`nav-arrow nav-arrow-${direction}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 19 19 5 M7 5h12v12" />
    </svg>
  );
}
