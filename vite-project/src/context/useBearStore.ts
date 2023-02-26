import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Bear = {
  bears: number
  beadBear: null | number
  randomNumberOfBears(): void
  removeAllBears(): void
  setBears(bears: number): void
  setDeadBear(beadBear: number | null): void
}

export const useBearStore = create<Bear, [['zustand/persist', Bear]]>(
  persist(
    (set) => ({
      bears: 0,
      beadBear: null,
      setBears: (bears) => set({ bears }),
      randomNumberOfBears: () =>
        set(() => ({ bears: Math.floor(Math.random() * 10) })),
      removeAllBears: () => set({ bears: 0 }),
      setDeadBear: (beadBear) => set({ beadBear: beadBear }),
    }),
    {
      name: 'bear-storage',
    }
  )
)
