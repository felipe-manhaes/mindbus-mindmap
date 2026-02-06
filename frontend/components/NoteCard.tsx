import { useCounterStore } from '@/providers/counter-store-provider';


export function NoteCard(title: { title: string, id: number }) {
   const { deleteNote, updateNote, inputText } = useCounterStore(
      (state) => state,
   )

   return (
      <div><span onClick={() => updateNote(title.id, inputText)}>- {title.title}_0{title.id}</span> <span className="cursor-pointer"
         onClick={() => deleteNote(title.id)}>[x]</span></div>
   )
}