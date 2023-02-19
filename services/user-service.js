import UserModel from '../models/user-model.js'

class UserService {
  async createUser(username) {
    const createdUser = await UserModel.create({ username: username })
    return createdUser
  }

  async createExercise() {}

  async getLog() {}
}

export default new UserService()
