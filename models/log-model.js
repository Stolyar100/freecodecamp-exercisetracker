import mongoose, { Schema } from 'mongoose'

const logSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, required: true },
  description: String,
  duration: Number,
  date: { type: Date, default: Date.now(), required: true },
})

const LogModel = mongoose.model('Log', logSchema)
export default LogModel
