import { Router } from 'express'
import UserController from '../controllers/user-controller.js'

const UserRouter = new Router()

UserRouter.post('/', UserController.addUser)
UserRouter.get('/', UserController.getAllUsers)
UserRouter.post(
  '/:_id/exercises',
  (req, res, next) => {
    console.table({ path: req.url, method: req.method, body: req.body })
    next()
  },
  UserController.addExercise
)
UserRouter.get('/:_id/logs', UserController.getExercise)

export default UserRouter
