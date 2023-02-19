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

    const [createdExercise, { username }] = await Promise.all([
      UserService.createExercise({
        userId,
        description,
        date: date ? new Date(date).valueOf() : Date.now(),
        duration,
      }),
      UserService.getUserById(userId),
    ])

    const exerciseDto = new ExerciseDto(username, createdExercise)
    return res.status(201).json(exerciseDto)
  }

  async getExercise(req, res) {
    const { _id: userId } = req.params
    const { from, to, limit } = req.query

    const user = await UserService.getUserById(userId)
    const logResults = await UserService.getLog({ userId, from, to, limit })

    const LogDto = new LogDto(user, logResults)
    return res.status(200).json(LogDto)
  }
}

export default new UserController()
