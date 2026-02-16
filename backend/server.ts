import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import type { NoteCardProps } from '../frontend/app/types/index.ts'

const tempNotes: NoteCardProps[] = []

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
   // res.send(JSON.stringify(tempNotes))
   res.send(JSON.stringify({ list: tempNotes }))

})

app.post('/', (req, res) => {
   const title = req.body.title
   let count = tempNotes.length
   console.log(title)
   for (let i = 0; i < count; i++) {
      const test = !tempNotes.some(item => item.id === count)
      if (test) {
         break
      } else { count++ }
   }
   tempNotes.push({ title: title, id: count })
   console.log("After " + title + ": " + JSON.stringify(tempNotes))

   res.send({ message: JSON.stringify(tempNotes) })
})

app.put('/:id',(req,res)=>{
   const id = Number(req.params.id)
   const index = tempNotes.findIndex((n) => n.id === id)
   if (index === -1) {
      return res.status(404).json({ error: 'Not found' })
   }
   tempNotes.splice(index,1,{"title":req.body.title,id:tempNotes[index].id})
   console.log("//PUT//// tempNotes IS: " + JSON.stringify(tempNotes))
   res.json({ list: tempNotes })
})

app.delete('/:id', (req, res) => {
   const id = Number(req.params.id)
   const index = tempNotes.findIndex((n) => n.id === id)
   if (index === -1) {
      return res.status(404).json({ error: 'Not found' })
   }
   tempNotes.splice(index, 1)
   console.log("////// tempNotes IS: " + JSON.stringify(tempNotes))
   res.json({ list: tempNotes })
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}.`)
})
