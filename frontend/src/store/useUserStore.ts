import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types";

type loginData = {
  email: string,
  password: string
}

type UserRegister = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

interface TokenZustand {
  user: null | User
  setUser: (data: User | null) => void
  userLogin: (data: loginData) => { error?: string }
  userRegister: (data: UserRegister) => { error?: string }
}

export const useUserStore = create<TokenZustand>()(
  persist((set, get) => ({
    user: null,

    setUser: (user) => {
      set({ user })
    },

    userLogin: async (data) => {
      const setUser = get().setUser
      try {
        const res = await fetch("http://localhost:5600/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password
          })
        })
        const json = await res.json()

        setUser(json.user)
        return json
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    },
    userRegister: async (data) => {
      try {
        const res = await fetch("http://localhost:5600/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password
          })
        })
        const json = await res.json()
        return json
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    }
  }), {
    name: "infoUser"
  })
)