import { useCounterStore } from '@/providers/counter-store-provider';


export type NoteCardProps = {
   title: string;
   id?: number;
}

export function NoteCard(title: { title: string, id: number }) {
   const { deleteNote } = useCounterStore(
      (state) => state,
    )

   function handleDelete(id:number) {
deleteNote(id)
   }

   return (
      <div><span>- {title.title}_0{title.id}</span> <span className="cursor-pointer"
         onClick={() => handleDelete(title.id)}>[x]</span></div>
   )
}