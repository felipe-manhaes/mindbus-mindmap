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
   res.send('Hello World!')
})

app.post('/', (req, res) => {
  const title = req.body.title
  console.log(title)
  tempNotes.push({ title: title, id: tempNotes.length + 1 })
  res.send({message: 'Backend Note viewed successfully: \n' + JSON.stringify(tempNotes)})
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}.`)
})
