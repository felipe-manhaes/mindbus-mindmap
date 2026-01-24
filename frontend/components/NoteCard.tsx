export type NoteCardProps = {
   title:string;
   h2?:number
}

export function NoteCard(title:{title:string,h2?:number}) {
   return (
      <div>- {title.title}_0{title.h2}</div>
   )
}