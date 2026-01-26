// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export type CounterState = {
  count: string
}

export type CounterActions = {
  decrementCount: () => void
  incrementCount: () => void
  thirdCount: () => void
}

export type CounterStore = CounterState & CounterActions

export const defaultInitState: CounterState = {
  count: '',
}

export const createCounterStore = (
  initState: CounterState = defaultInitState,
) => {
  return createStore<CounterStore>()(
    (set) => ({
      ...initState,
      decrementCount: () => set((state) => ({ count: state.count + '_aa' })),
      incrementCount: () => set((state) => ({ count: state.count.replace(/_/g, '') })),
      thirdCount: () => set((state) => ({ count: state.count + '_bb' })),

    }))
}
