import type { DivisionId } from "@/lib/divisions";

/** Small, specific pictograms — one flat line-art language, no decorative
 *  nodes or particle connections. Each shape names what the division does. */
function Motif({ id }: { id: DivisionId }) {
  switch (id) {
    case "software":
      // A code bracket: </>
      return (
        <>
          <path className="motif-line" d="M78 44 L46 70 L78 96" />
          <path className="motif-line" d="M162 44 L194 70 L162 96" />
          <path className="motif-line motif-accent" d="M133 36 L107 104" />
        </>
      );
    case "robotics":
      // A robot head with a screen face and jointed limbs.
      return (
        <>
          <path className="motif-line" d="M94 58 H58 V34" />
          <path className="motif-line" d="M94 82 H44" />
          <path className="motif-line" d="M146 58 H182 V34" />
          <path className="motif-line" d="M146 82 H196 V106" />
          <path className="motif-line" d="M120 94 V118 H150" />
          <rect className="motif-fill" x="94" y="46" width="52" height="48" rx="8" />
          <rect className="motif-line motif-accent" x="106" y="58" width="28" height="24" rx="4" fill="none" />
        </>
      );
    case "competitions":
      // A podium with a pennant for first place.
      return (
        <>
          <path className="motif-line motif-dim" d="M52 112 H188" />
          <path className="motif-fill" d="M66 112 V92 H100 V112 Z" />
          <path className="motif-fill" d="M100 112 V62 H140 V112 Z" />
          <path className="motif-fill" d="M140 112 V100 H174 V112 Z" />
          <path className="motif-line motif-accent" d="M120 62 V34" />
          <path className="motif-fill motif-accent-fill" d="M120 34 L142 42 L120 50 Z" />
        </>
      );
    case "startups":
      // An upward trajectory, arrowhead at the end.
      return (
        <>
          <path className="motif-line motif-dim" d="M42 112 H198" />
          <path className="motif-line motif-accent" d="M44 108 C86 108 96 62 128 52 C150 45 172 38 196 30" />
          <path className="motif-line motif-accent" d="M178 29 L196 30 L191 46" />
        </>
      );
    case "events":
      // A simple clock face: the one thing every event has in common.
      return (
        <>
          <circle className="motif-line" cx="120" cy="70" r="40" />
          <path className="motif-line motif-dim" d="M120 36 V44 M120 96 V104 M86 70 H94 M146 70 H154" />
          <path className="motif-line motif-accent" d="M120 70 V48 M120 70 L138 80" />
        </>
      );
    case "education":
      // An open book.
      return (
        <>
          <path className="motif-fill" d="M120 40 C98 32 70 34 50 42 V98 C70 90 98 90 120 98 Z" />
          <path className="motif-fill" d="M120 40 C142 32 170 34 190 42 V98 C170 90 142 90 120 98 Z" />
          <path
            className="motif-line motif-dim"
            d="M64 58 C80 54 98 54 108 58 M64 72 C80 68 98 68 108 72 M132 58 C142 54 160 54 176 58 M132 72 C142 68 160 68 176 72"
          />
          <path className="motif-line motif-accent" d="M120 40 V98" />
        </>
      );
  }
}

export function DivisionMotif({ id, className = "" }: { id: DivisionId; className?: string }) {
  return (
    <div
      className={`relative aspect-[240/140] overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 240 140" className="absolute inset-0 h-full w-full" focusable="false">
        <Motif id={id} />
      </svg>
    </div>
  );
}
