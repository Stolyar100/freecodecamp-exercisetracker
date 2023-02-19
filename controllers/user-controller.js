import UserDto from '../dtos/user-dto.js'
import UserService from '../services/user-service.js'

class UserController {
  async addUser(req, res) {
    const { username } = req.body
    console.table({body: req.body, username:req.body.username})
    const createdUser = await UserService.createUser(username)
    const userDto = new UserDto(createdUser)

    return res.status(201).json(userDto)
  }

  async addExercise(req, res) {}

  async getExercise(req, res) {}
}

export default new UserController()
