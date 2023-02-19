import mongoose, { Schema } from 'mongoose'

const logSchema = new Schema({
  user: mongoose.Types.ObjectId,
  description: String,
  duration: Number,
  date: Date,
})

const LogModel = mongoose.model('Log', logSchema)
export default LogModel
