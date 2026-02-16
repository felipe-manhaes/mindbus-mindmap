import { useCounterStore } from '@/providers/counter-store-provider';


export function NoteCard(props: { title: string, count: number, id:number, onDelete: (id: number) => void }) {
   const { updateNote, inputText } = useCounterStore(
      (state) => state,
   )

   return (
      <div><span onClick={() => updateNote(props.count, inputText)}>- {props.title}_0{props.count}</span> <span className="cursor-pointer"
         onClick={() => props.onDelete(props.id)}>[x]</span></div>
   )
}