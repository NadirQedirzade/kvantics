/**
 * Motion tokens. Springs follow the "response + damping" mindset from Apple's
 * fluid-interface guidance, expressed through Motion's `duration` + `bounce`:
 *   bounce 0   -> critically damped (damping ratio 1.0): the default for UI
 *   bounce 0.2 -> damping ~0.8: only for gestures that carried momentum
 */
export const springs = {
  /** Button press feedback: instant, no overshoot. */
  press: { type: "spring", duration: 0.2, bounce: 0 },
  /** Popovers and menus anchored to a trigger. */
  menu: { type: "spring", duration: 0.25, bounce: 0 },
  /** Sheets and drawers entering. */
  sheet: { type: "spring", duration: 0.45, bounce: 0 },
  /** Moving an element between positions (nav indicator). */
  move: { type: "spring", duration: 0.4, bounce: 0 },
  /** After a flick/drag release: a little life is appropriate here. */
  release: { type: "spring", duration: 0.35, bounce: 0.2 },
} as const;

/** Exit curve: strong ease-out, fast. */
export const exitTween = { duration: 0.14, ease: [0.23, 1, 0.32, 1] } as const;

/**
 * Where a gesture is "going": projects release velocity (px/s) forward using
 * exponential deceleration, so a flick dismisses like a throw.
 */
export function project(velocity: number, deceleration = 0.998): number {
  return ((velocity / 1000) * deceleration) / (1 - deceleration);
}
