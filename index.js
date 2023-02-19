import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import UserRouter from './routers/user-router.js'

const mongoUri = process.env.MONGO_URI

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((e) => console.log(e))

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html')
})
app.use('/api/users', UserRouter)

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
