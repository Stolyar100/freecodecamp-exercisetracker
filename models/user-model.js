import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  userName: String,
})

const UserModel = mongoose.model('User', userSchema)
export default UserModel
