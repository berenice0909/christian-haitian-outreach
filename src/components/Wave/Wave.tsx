import styles from "./Wave.module.css";

type Props = {
  above: string; // color of the section above the curve
  below: string; // color of the curve (and of the section below, unless `soft` is set)
  soft?: boolean; // low, gentle curve whose color fades out just under its edge
};

const curve = "M0 34 C 240 0, 480 0, 720 30 C 960 60, 1200 60, 1440 26 L1440 60 L0 60 Z";

// The same curve as the filled wave, moved down by `dy`, for the soft version
function softCurve(dy: number) {
  return `M0 ${34 + dy} C 240 ${0 + dy}, 480 ${0 + dy}, 720 ${30 + dy} C 960 ${60 + dy}, 1200 ${60 + dy}, 1440 ${26 + dy}`;
}

// The same curve traced backwards, so two of them can enclose a thin strip
function softCurveBack(dy: number) {
  return `L1440 ${26 + dy} C 1200 ${60 + dy}, 960 ${60 + dy}, 720 ${30 + dy} C 480 ${0 + dy}, 240 ${0 + dy}, 0 ${34 + dy} Z`;
}

// Thin strips stacked under the edge, each a bit lighter, so the fade follows the curve
const FADE_STEPS = 10;
const STEP = 1.8;
const softStrips = Array.from({ length: FADE_STEPS }, (_, i) => ({
  d: `${softCurve(i * STEP)} ${softCurveBack((i + 1) * STEP)}`,
  opacity: 1 - i / FADE_STEPS,
}));

// A curved edge between two homepage sections
export default function Wave({ above, below, soft = false }: Props) {
  return (
    <svg
      className={soft ? styles.soft : styles.wave}
      viewBox={soft ? "0 0 1440 78" : "0 0 1440 60"}
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ background: above }}
    >
      {soft ? (
        softStrips.map((strip) => (
          <path key={strip.d} d={strip.d} style={{ fill: below, fillOpacity: strip.opacity }} />
        ))
      ) : (
        <path d={curve} style={{ fill: below }} />
      )}
    </svg>
  );
}
