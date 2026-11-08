/**
 * Hero artwork. A precise, single-stroke construction of the Kvantics "K",
 * presented the way a technical drawing would: one line weight, one accent
 * color used only at the joints that matter, and corner crop-marks standing
 * in for the frame rather than an illustrated scene. It draws itself once
 * on load and then holds still — no orbiting particles, no glow, no node
 * network. Decorative: hidden from assistive tech.
 */
const STEM: [number, number][] = [
  [170, 110],
  [170, 370],
];
const ARM: [number, number][] = [
  [170, 260],
  [320, 110],
];
const LEG: [number, number][] = [
  [170, 260],
  [330, 370],
];

function pathOf(points: [number, number][]) {
  return points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" ");
}

/** A short perpendicular tick, the way a dimension line marks a point. */
function Tick({ x, y, angle, d }: { x: number; y: number; angle: number; d: string }) {
  const r = (angle * Math.PI) / 180;
  const dx = Math.cos(r) * 11;
  const dy = Math.sin(r) * 11;
  return (
    <line
      className="hg-fade"
      style={{ ["--d" as string]: d }}
      x1={x - dx}
      y1={y - dy}
      x2={x + dx}
      y2={y + dy}
      stroke="var(--color-blue)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  );
}

/** A small corner bracket, repeated at all four corners of the frame. */
function Corner({ x, y, rotate }: { x: number; y: number; rotate: number }) {
  return (
    <path
      d="M0 20 V2 Q0 0 2 0 H20"
      transform={`translate(${x} ${y}) rotate(${rotate})`}
      fill="none"
      stroke="var(--color-line-strong)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  );
}

export function HeroGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 480" className={className} role="presentation" aria-hidden="true" focusable="false">
      <Corner x={56} y={56} rotate={0} />
      <Corner x={424} y={56} rotate={90} />
      <Corner x={424} y={424} rotate={180} />
      <Corner x={56} y={424} rotate={270} />

      <g fill="none" stroke="var(--color-fg)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path className="hg-draw" style={{ ["--d" as string]: "0.05s" }} pathLength={1} d={pathOf(STEM)} />
        <path className="hg-draw" style={{ ["--d" as string]: "0.35s" }} pathLength={1} d={pathOf(ARM)} />
        <path className="hg-draw" style={{ ["--d" as string]: "0.35s" }} pathLength={1} d={pathOf(LEG)} />
      </g>

      {/* Ticks mark the three points that define the mark: where the stem
          starts, where the arm and leg meet it, and where each ends. */}
      <Tick x={170} y={110} angle={0} d="0.75s" />
      <Tick x={170} y={260} angle={45} d="0.85s" />
      <Tick x={320} y={110} angle={90} d="0.95s" />
      <Tick x={330} y={370} angle={90} d="1.05s" />
    </svg>
  );
}
