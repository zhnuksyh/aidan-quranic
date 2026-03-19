import React, { createContext, useContext, useState, useMemo } from "react";
import { WORLD_PALETTES, AVATAR_COLOR } from "../constants/worlds";
import { ThemeContextValue } from "../types/theme";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentWorldId, setCurrentWorldId] = useState("world1");

  const value = useMemo<ThemeContextValue>(
    () => ({
      currentWorldId,
      palette: WORLD_PALETTES[currentWorldId],
      avatarColor: AVATAR_COLOR,
      setCurrentWorldId,
    }),
    [currentWorldId]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
