'use client';
import { useState } from 'react';
import { NoteCardProps } from '@/components/NoteCard';
import Image from "next/image";
import { NoteCard } from "@/components/NoteCard";

export default function Home() {
  const [notes, setNotes] = useState<NoteCardProps[] >([]);
  const [inputValue, setInputValue] = useState<string>("");
function handleAddNote() {
setNotes([...notes,{title:inputValue}])
}
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setInputValue(e.target.value);
}
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-4 py-10  bg-white dark:bg-gray-600 sm:items-center">
       <h1 className="border-2 border-red-500">Hello World</h1>
       <div className="flex flex-row items-center gap-2 justify-center">
       <input type="text" name="note" id="note" placeholder="Enter your note" 
       className="border-2 border-red-500" onChange={handleChange}
       />
       <button className="border-2 border-gray-800 cursor-pointer" onClick={handleAddNote}>Add Note</button>
       </div>
       {notes.map((note,i) => (
       <NoteCard key={i+note.title} title={note.title} h2={i+1} />
       ))}
       
      </main>
    </div>
  );
}
