import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello backend")
})

app.listen(5600, () => console.log("servidor iniciado en el puerto 5600"))