import { useCounterStore } from '@/providers/counter-store-provider';


export function NoteCard(title: { title: string, id: number, onDelete: (id: number) => void }) {
   const { updateNote, inputText } = useCounterStore(
      (state) => state,
   )

   return (
      <div><span onClick={() => updateNote(title.id, inputText)}>- {title.title}_0{title.id}</span> <span className="cursor-pointer"
         onClick={() => title.onDelete(title.id)}>[x]</span></div>
   )
}