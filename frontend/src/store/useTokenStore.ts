import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types";

interface TokenZustand {
  user: null | User
  setUser: (data: User | null) => void
}

export const useTokenStore = create<TokenZustand>()(
  persist((set) => ({
    user: null,
    setUser: (user) => {
      set({ user })
    }
  }), {
    name: "infoUser"
  })
)