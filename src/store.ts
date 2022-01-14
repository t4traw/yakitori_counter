import create from 'zustand'

interface State {
  price: number
  increase: (price: number) => void
  decrease: (price: number) => void
  reset: () => void
}

export const useStore = create<State>((set) => ({
  price: 0,
  increase: (price) => set((state) => ({ price: state.price + price })),
  decrease: (price) => set((state) => ({ price: state.price - price })),
  reset: () => set({ price: 0 })
}))
