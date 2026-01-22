import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-4  bg-white dark:bg-gray-700 sm:items-center">
       <h1 className="border-2 border-red-500">Hello World</h1>
       <div className="flex flex-row items-center justify-center">
       <input type="text" name="note" id="note" placeholder="Enter your note" 
       className="border-2 border-red-500"
       />
       <button className="border-2 border-gray-800">Add Note</button>
       </div>
      </main>
    </div>
  );
}
