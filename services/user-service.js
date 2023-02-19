import LogModel from '../models/log-model.js'
import UserModel from '../models/user-model.js'

class UserService {
  async createUser(username) {
    const createdUser = await UserModel.create({ username: username })
    return createdUser
  }

  async getAllUsers() {
    const allUsers = await UserModel.find()
    return allUsers
  }

  async getUserById(id) {
    const userById = await UserModel.findById(id)
    return userById
  }

  async createExercise({ userId, description, duration, date }) {
    console.log(typeof date, date)
    const createdExercise = new LogModel({
      user: userId,
      description,
      duration,
      date,
    })
    return createdExercise
  }

  async getLog({ userId, from, to, limit }) {
    const logResults = await LogModel.find(
      {
        user: userId,
        date: { ...(from && { $gte: from }), ...(to && { $lte: to }) },
      },
      null,
      { ...(limit && { limit }) }
    )
    return logResults
  }
}

export default new UserService()
