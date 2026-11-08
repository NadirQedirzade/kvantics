/**
 * A template re-mounts on every navigation, so each page gets one gentle entrance
 * (opacity + 6px rise, 320ms, strong ease-out). Reduced motion: a plain fade.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
