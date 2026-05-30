import { create } from "zustand";

interface ThemeStore {
  accentColor: "blue" | "cyan" | "purple" | "green";
  animationsEnabled: boolean;
  setAccentColor: (color: ThemeStore["accentColor"]) => void;
  toggleAnimations: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  accentColor: "blue",
  animationsEnabled: true,
  setAccentColor: (color) => set({ accentColor: color }),
  toggleAnimations: () =>
    set((state) => ({ animationsEnabled: !state.animationsEnabled })),
}));
