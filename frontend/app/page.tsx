'use client';
import { NoteCard } from '@/components/NoteCard';
import { useCounterStore } from '@/providers/counter-store-provider';
import { useEffect, useState } from 'react';
import { Sidebar,SidebarTrigger,SidebarProvider } from '@/components/ui/sidebar'
import  FlowCanvas from '@/components/FlowCanvas'
export default function Home() {
  const { inputText, list, setNewItem, setInputText, setList, updateNote } = useCounterStore(
    (state) => state,
  )

  useEffect(() => {
    fetch('http://localhost:3001')
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      return res.json()
    })
      .then(json => {
        setList(json.list)
      })
      .catch(err => console.error(err))
  }, [setList])

  function handleDeletenote(id: number) {
    fetch(`http://localhost:3001/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error: ${res.status}`)
        return res.json()
      })
      .then(data => setList(data.list))
      .catch(err => console.error(err))

  }

  function handleUpdateNote(id:number,title:string){
    fetch(`http://localhost:3001/${id}`, {
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({title}),
      })
      .then(response => {
        if (!response.ok) throw new Error (`Error: ${response.status}`)
          return response.json()
      })
      .then((data) =>{
        setList(data.list)
      })
      .catch(error=>{
        const err = error instanceof Error ? error : new Error(JSON.stringify(error))
        console.error(err)
      })
  }

  function handleAddNote() {
    fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: inputText }),
    }).then(response => {
      if (!response.ok) throw new Error(`Error: ${response.status}`)
      return response.json()
    })
      .then(data => {
        console.log(data)
        setNewItem(inputText)
        setInputText('')
      })
      .catch(error => {
        const err = error instanceof Error ? error : new Error(JSON.stringify(error))
        console.error(err)
      });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value)
  }
  return (
    <SidebarProvider defaultOpen={false}>
    <div className="flex min-h-screen w-full dark:bg-gray-600 items-center justify-center  font-sans">
      <Sidebar />
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-4 py-10   dark:bg-gray-600 sm:items-center">
        <SidebarTrigger />
        <FlowCanvas />
        <h1 className="border-2 border-red-500">State Notepad</h1>
        <div className="flex flex-row items-center gap-2 justify-center">
          <input type="text" name="note" id="note" placeholder="Enter your note"
            className="border-2 border-red-500" onChange={handleChange} value={inputText ?? ''}
          />
          <button className="border-2 border-gray-800 cursor-pointer" onClick={handleAddNote}>Add Note</button>
        </div>
        <div>
          Count:{' '}
          {Array.isArray(list) && list.map((item, i) => (
            <NoteCard key={i} count={i} id={item.id??i} title={item.title} onDelete={handleDeletenote} onUpdate={handleUpdateNote}/>
          ))}
          <hr />
        </div>
        <p className='text-amber-300'>{JSON.stringify(list)}</p>
      </main>
    </div>
    </SidebarProvider>

  );
}
