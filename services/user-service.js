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

  async createExercise({ user, description, duration, date }) {
    const createdExercise = await LogModel.create({
      user,
      description,
      duration,
      date,
    })
    return createdExercise
  }

  async getLog({ userId, from, to, limit }) {
    const query = {
      user: userId,
    }

    if (from || to) {
      query.date = {
        ...(from && { $gte: new Date(from).toISOString() }),
        ...(to && { $lte: new Date(to).toISOString() }),
      }
    }

    const logResults = await LogModel.find(query, null, {
      ...(limit && { limit }),
    })
    return logResults
  }
}

export default new UserService()
