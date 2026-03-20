export interface WorldPalette {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  background: string;
  accent: string;
  accentLight: string;
  textOnBackground: string;
  textOnAccent: string;
}

export interface ThemeContextValue {
  currentWorldId: string;
  palette: WorldPalette;
  avatarColor: string;
  setCurrentWorldId: (id: string) => void;
}
