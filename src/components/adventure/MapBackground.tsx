import { View } from "react-native";
import Svg, { Circle, Path, G, Ellipse } from "react-native-svg";
import { WorldPalette } from "../../types/theme";

interface Props {
  worldId: string;
  palette: WorldPalette;
  height: number;
}

interface Placement {
  x: number; // percentage of width
  y: number; // percentage of height
  scale: number;
  type: "a" | "b"; // alternating element types per world
}

// Scattered positions — edges of the map so they don't overlap nodes
const PLACEMENTS: Placement[] = [
  { x: 0.05, y: 0.04, scale: 1.0, type: "a" },
  { x: 0.82, y: 0.10, scale: 1.2, type: "b" },
  { x: 0.02, y: 0.24, scale: 0.8, type: "b" },
  { x: 0.85, y: 0.34, scale: 1.1, type: "a" },
  { x: 0.04, y: 0.48, scale: 0.9, type: "a" },
  { x: 0.88, y: 0.55, scale: 1.0, type: "b" },
  { x: 0.06, y: 0.70, scale: 1.1, type: "b" },
  { x: 0.83, y: 0.78, scale: 0.9, type: "a" },
  { x: 0.03, y: 0.92, scale: 1.0, type: "a" },
  { x: 0.86, y: 0.95, scale: 0.8, type: "b" },
];

const WIDTH = 360;
const OP = 0.35; // base opacity — visible but not distracting

// ─── World 1 (Al-Fatiha / Indigo Meadows): Rounded trees + stars ────────

function RoundTree({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <G opacity={OP}>
      {/* Trunk */}
      <Path
        d={`M${x - s * 0.12} ${y + s * 0.9}L${x - s * 0.12} ${y + s * 0.2}L${x + s * 0.12} ${y + s * 0.2}L${x + s * 0.12} ${y + s * 0.9}`}
        fill={color}
      />
      {/* Canopy — three overlapping circles */}
      <Circle cx={x} cy={y - s * 0.15} r={s * 0.45} fill={color} />
      <Circle cx={x - s * 0.3} cy={y + s * 0.1} r={s * 0.38} fill={color} />
      <Circle cx={x + s * 0.3} cy={y + s * 0.1} r={s * 0.38} fill={color} />
    </G>
  );
}

function StarBurst({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  // 4-point sparkle star
  return (
    <G opacity={OP * 0.9}>
      <Path
        d={`M${x} ${y - s}Q${x + s * 0.15} ${y - s * 0.15} ${x + s} ${y}Q${x + s * 0.15} ${y + s * 0.15} ${x} ${y + s}Q${x - s * 0.15} ${y + s * 0.15} ${x - s} ${y}Q${x - s * 0.15} ${y - s * 0.15} ${x} ${y - s}Z`}
        fill={color}
      />
      <Circle cx={x} cy={y} r={s * 0.2} fill={color} opacity={0.6} />
    </G>
  );
}

// ─── World 2 (Yusuf / Amber Dunes): Palm trees + sand dune hills ────────

function PalmTree({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <G opacity={OP}>
      {/* Curved trunk */}
      <Path
        d={`M${x} ${y + s * 1.4}Q${x + s * 0.15} ${y + s * 0.6} ${x - s * 0.05} ${y}`}
        stroke={color}
        strokeWidth={s * 0.15}
        strokeLinecap="round"
        fill="none"
      />
      {/* Fronds — 5 drooping leaves */}
      <Path d={`M${x} ${y}Q${x - s * 0.9} ${y - s * 0.3} ${x - s * 1.3} ${y + s * 0.3}`} stroke={color} strokeWidth={s * 0.08} strokeLinecap="round" fill="none" />
      <Path d={`M${x} ${y}Q${x + s * 0.9} ${y - s * 0.3} ${x + s * 1.3} ${y + s * 0.3}`} stroke={color} strokeWidth={s * 0.08} strokeLinecap="round" fill="none" />
      <Path d={`M${x} ${y}Q${x - s * 0.4} ${y - s * 0.8} ${x - s * 0.9} ${y - s * 0.4}`} stroke={color} strokeWidth={s * 0.08} strokeLinecap="round" fill="none" />
      <Path d={`M${x} ${y}Q${x + s * 0.4} ${y - s * 0.8} ${x + s * 0.9} ${y - s * 0.4}`} stroke={color} strokeWidth={s * 0.08} strokeLinecap="round" fill="none" />
      <Path d={`M${x} ${y}Q${x} ${y - s * 0.9} ${x + s * 0.15} ${y - s * 0.7}`} stroke={color} strokeWidth={s * 0.08} strokeLinecap="round" fill="none" />
      {/* Coconuts */}
      <Circle cx={x - s * 0.1} cy={y + s * 0.08} r={s * 0.08} fill={color} />
      <Circle cx={x + s * 0.08} cy={y + s * 0.12} r={s * 0.08} fill={color} />
    </G>
  );
}

function SandDune({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <G opacity={OP * 0.7}>
      {/* Rolling dune shape */}
      <Path
        d={`M${x - s * 1.5} ${y + s * 0.5}Q${x - s * 0.5} ${y - s * 0.5} ${x} ${y}Q${x + s * 0.5} ${y + s * 0.5} ${x + s * 1.5} ${y + s * 0.3}L${x + s * 1.5} ${y + s * 0.5}Z`}
        fill={color}
      />
    </G>
  );
}

// ─── World 3 (Ar-Rahman / Emerald Gardens): Leafy tree + flower ─────────

function LeafyTree({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <G opacity={OP}>
      {/* Trunk */}
      <Path
        d={`M${x - s * 0.1} ${y + s * 1.0}L${x - s * 0.1} ${y + s * 0.15}L${x + s * 0.1} ${y + s * 0.15}L${x + s * 0.1} ${y + s * 1.0}`}
        fill={color}
      />
      {/* Layered canopy (triangle-ish, like a pine but softer) */}
      <Path
        d={`M${x} ${y - s * 0.7}Q${x - s * 0.55} ${y - s * 0.1} ${x - s * 0.6} ${y + s * 0.2}Q${x} ${y + s * 0.05} ${x + s * 0.6} ${y + s * 0.2}Q${x + s * 0.55} ${y - s * 0.1} ${x} ${y - s * 0.7}Z`}
        fill={color}
      />
      {/* Second layer */}
      <Ellipse cx={x} cy={y - s * 0.2} rx={s * 0.5} ry={s * 0.35} fill={color} />
    </G>
  );
}

function Flower({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  // Simple 5-petal flower
  const petals = [0, 72, 144, 216, 288].map((angle) => {
    const rad = (angle * Math.PI) / 180;
    const px = x + Math.cos(rad) * s * 0.35;
    const py = y + Math.sin(rad) * s * 0.35;
    return <Circle key={angle} cx={px} cy={py} r={s * 0.25} fill={color} />;
  });
  return (
    <G opacity={OP * 0.8}>
      {petals}
      <Circle cx={x} cy={y} r={s * 0.15} fill={color} opacity={0.7} />
      {/* Stem */}
      <Path
        d={`M${x} ${y + s * 0.35}L${x} ${y + s * 1.0}`}
        stroke={color}
        strokeWidth={s * 0.08}
        strokeLinecap="round"
      />
      {/* Small leaf on stem */}
      <Path
        d={`M${x} ${y + s * 0.7}Q${x + s * 0.3} ${y + s * 0.5} ${x + s * 0.15} ${y + s * 0.75}`}
        fill={color}
      />
    </G>
  );
}

// ─── Shared: Soft cloud (used across worlds) ────────────────────────────

function Cloud({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <G opacity={OP * 0.5}>
      <Circle cx={x - s * 0.3} cy={y} r={s * 0.3} fill={color} />
      <Circle cx={x} cy={y - s * 0.15} r={s * 0.4} fill={color} />
      <Circle cx={x + s * 0.35} cy={y} r={s * 0.3} fill={color} />
      <Ellipse cx={x} cy={y + s * 0.15} rx={s * 0.55} ry={s * 0.2} fill={color} />
    </G>
  );
}

export function MapBackground({ worldId, palette, height }: Props) {
  const color = palette.accent;

  const elements = PLACEMENTS.map((p, i) => {
    const x = p.x * WIDTH;
    const y = p.y * height;
    const s = 18 * p.scale; // base size ~18px, scaled
    const key = `bg-${i}`;

    // Every 5th element is a cloud (shared across worlds)
    if (i % 5 === 4) {
      return <Cloud key={key} x={x} y={y} s={s} color={palette.accentLight} />;
    }

    if (worldId === "world1") {
      return p.type === "a" ? (
        <RoundTree key={key} x={x} y={y} s={s} color={color} />
      ) : (
        <StarBurst key={key} x={x} y={y} s={s * 0.6} color={color} />
      );
    }

    if (worldId === "world2") {
      return p.type === "a" ? (
        <PalmTree key={key} x={x} y={y} s={s} color={color} />
      ) : (
        <SandDune key={key} x={x} y={y} s={s} color={color} />
      );
    }

    // world3 — Ar-Rahman
    return p.type === "a" ? (
      <LeafyTree key={key} x={x} y={y} s={s} color={color} />
    ) : (
      <Flower key={key} x={x} y={y} s={s * 0.7} color={color} />
    );
  });

  return (
    <View style={{ position: "absolute", top: 0, left: 0, right: 0, height }} pointerEvents="none">
      <Svg width="100%" height={height} viewBox={`0 0 ${WIDTH} ${height}`}>
        {elements}
      </Svg>
    </View>
  );
}
