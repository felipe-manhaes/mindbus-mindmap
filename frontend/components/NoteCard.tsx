export type NoteCardProps = {
   title:string;
   h2?:number
}

export function NoteCard(title:{title:string,h2?:number}) {
   return (
      <div>{title.title} is great!_0{title.h2}</div>
   )
}