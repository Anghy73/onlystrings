import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

import notesRoutes from './routes/notesRoutes'
import usersRoutes from './routes/usersRoutes'

const app = express()

dotenv.config({ path: "./.env" })
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello backend")
})

app.use("/notes", notesRoutes)
app.use("/users", usersRoutes)

export default app