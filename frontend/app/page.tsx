'use client';
import { NoteCard, NoteCardProps } from '@/components/NoteCard';
import { useCounterStore } from '@/providers/counter-store-provider';
import { useState } from 'react';

export default function Home() {
  const { inputText, list, setListUpdate, setInputText } = useCounterStore(
    (state) => state,
  )

  function handleAddNote() {
    setListUpdate(inputText)
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value)
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-4 py-10  bg-white dark:bg-gray-600 sm:items-center">
        <h1 className="border-2 border-red-500">State Notepad</h1>
        <div className="flex flex-row items-center gap-2 justify-center">
          <input type="text" name="note" id="note" placeholder="Enter your note"
            className="border-2 border-red-500" onChange={handleChange}
          />
          <button className="border-2 border-gray-800 cursor-pointer" onClick={handleAddNote}>Add Note</button>
        </div>
        <div>
          Count:   {list.map((item, i) => (
            <NoteCard key={i} title={item.title} h2={i} />
          ))}
          <hr />

        </div>


        <p className='text-amber-300'>{JSON.stringify(list)}</p>

      </main>
    </div>
  );
}
