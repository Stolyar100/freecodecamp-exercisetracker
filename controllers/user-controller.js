import UserService from "../services/user-service.js"

class UserController {
  async addUser(req, res) {
    const { username } = req.body
    const createdUser = await UserService.createUser(username)
    
  }

  async addExercise(req, res) {}

  async getExercise(req, res) {}
}

export default new UserController()
