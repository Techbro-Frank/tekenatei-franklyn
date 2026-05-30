import { create } from "zustand";

interface NavStore {
  isMobileMenuOpen: boolean;
  activeSection: string;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setActiveSection: (section: string) => void;
}

export const useNavStore = create<NavStore>((set) => ({
  isMobileMenuOpen: false,
  activeSection: "",
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  setActiveSection: (section) => set({ activeSection: section }),
}));
