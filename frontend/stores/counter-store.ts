// src/stores/lister-store.ts
import { NoteCardProps } from '@/app/types/index'
import { createStore } from 'zustand/vanilla'

export type CounterState = {
  list: NoteCardProps[]
  inputText: string
}

export type CounterActions = {
  setNewItem: (input: string) => void
  setInputText: (input: string) => void
  setList: (input: NoteCardProps[]) => void
  deleteNote: (index: number) => void
  updateNote: (index: number, input: string) => void

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
      setNewItem: (input) => set((state) => ({ list: [...state.list, { title: input }] })),
      setList: (input: NoteCardProps[]) => set((state) => ({ list: input })),
      setInputText: (input) => set(() => ({ inputText: input })),
      deleteNote: (index) => set((state) => ({
        list: state.list.filter((_, i) => i !== index)
      })),
      updateNote: (index, input) => set((state) => ({
        list: state.list.map((item, i) => { return i === index ? { ...item, title: input } : item })
      }))
    }))
}