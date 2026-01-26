// src/stores/lister-store.ts
import { NoteCardProps } from '@/components/NoteCard'
import { createStore } from 'zustand/vanilla'

export type CounterState = {
  list: NoteCardProps[]
  inputText: string
}

export type CounterActions = {
  setListUpdate: (input: string) => void
  setInputText: (input: string) => void
}

export type CounterStore = CounterState & CounterActions

export const defaultInitState: CounterState = {
  list: [],
  inputText: ''
}

export const createCounterStore = (
  initState: CounterState = defaultInitState,
) => {
  return createStore<CounterStore>()(
    (set) => ({
      ...initState,
      setListUpdate: (input) => set((state) => ({ list: [...state.list, { title: input }] })),
      setInputText: (input) => set(() => ({ inputText: input }))
    }))
}   
