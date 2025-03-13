import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types/auth.types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  timestamp: number | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  checkExpiry: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      timestamp: null,
      setUser: (user) => {
        const timestamp = Date.now();
        set({ user, isAuthenticated: !!user, timestamp });
      },
      logout: () =>
        set({ user: null, isAuthenticated: false, timestamp: null }),
      checkExpiry: () => {
        const { timestamp } = get();
        if (timestamp && Date.now() - timestamp > 24 * 60 * 60 * 1000) {
          get().logout();
        }
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

useAuthStore.subscribe((state) => {
  state.checkExpiry();
});
