import { WorldPalette } from "../types/theme";

export const AVATAR_COLOR = "#FB923C";

export const WORLD_PALETTES: Record<string, WorldPalette> = {
  world1: {
    id: "world1",
    name: "Al-Fatiha",
    subtitle: "The Opening",
    icon: "BookOpen",
    background: "#E0E7FF",
    accent: "#6366F1",
    accentLight: "#A5B4FC",
    textOnBackground: "#312E81",
    textOnAccent: "#FFFFFF",
  },
  world2: {
    id: "world2",
    name: "Yusuf",
    subtitle: "Joseph",
    icon: "MoonStar",
    background: "#FFEDD5",
    accent: "#EA580C",
    accentLight: "#FDBA74",
    textOnBackground: "#7C2D12",
    textOnAccent: "#FFFFFF",
  },
  world3: {
    id: "world3",
    name: "Ar-Rahman",
    subtitle: "The Most Gracious",
    icon: "Heart",
    background: "#D1FAE5",
    accent: "#0284C7",
    accentLight: "#7DD3FC",
    textOnBackground: "#064E3B",
    textOnAccent: "#FFFFFF",
  },
};
