import UserService from '../services/user-service.js'
import UserDto from '../dtos/user-dto.js'
import ExerciseDto from '../dtos/exercise-dto.js'
import LogDto from '../dtos/log-dto.js'

class UserController {
  async addUser(req, res) {
    const { username } = req.body
    const createdUser = await UserService.createUser(username)
    const userDto = new UserDto(createdUser)

    return res.status(201).json(userDto)
  }

  async getAllUsers(req, res) {
    const allUsers = await UserService.getAllUsers()

    const allUsersDto = allUsers.map((user) => new UserDto(user))
    return res.status(200).json(allUsersDto)
  }

  async addExercise(req, res) {
    const { _id: userId } = req.params
    const { description, duration, date } = req.body
    const exerciseToCreate = {
      user: userId,
      description,
      duration,
      date,
    }

    const [createdExercise, user] = await Promise.all([
      UserService.createExercise(exerciseToCreate),
      UserService.getUserById(userId),
    ])

    const exerciseDto = new ExerciseDto(user, createdExercise)
    return res.status(201).json(exerciseDto)
  }

  async getExercise(req, res) {
    const { _id: userId } = req.params
    const { from, to, limit } = req.query

    const user = await UserService.getUserById(userId)
    const logResults = await UserService.getLog({ userId, from, to, limit })

    const logDto = new LogDto(user, logResults)
    return res.status(200).json(logDto)
  }
}

export default new UserController()
