import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface tokenStore {
  token: string;
  setToken: (token: string) => void;
}

export const useTokenStore = create<tokenStore>()(
  persist(
    (set) => ({
      token: "",
      setToken: (token: string) => {
        set({ token });
      },
    }),
    { name: "token", storage: createJSONStorage(() => localStorage) }
  )
);
