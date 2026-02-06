import  express  from 'express'
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
   res.send( JSON.stringify({list:tempNotes}))

})

app.post('/', (req, res) => {
  const title = req.body.title
  console.log(title)
  tempNotes.push({ title: title, id: tempNotes.length + 1 })
  console.log("After " + title + ": "+ JSON.stringify(tempNotes))

  res.send({message: JSON.stringify(tempNotes)})
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}.`)
})
