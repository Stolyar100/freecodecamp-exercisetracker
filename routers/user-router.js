import { Router } from 'express'
import UserController from '../controllers/user-controller.js'
const UserRouter = new Router()

UserRouter.post('/', UserController.addUser)
UserRouter.post('/:_id/exercise', UserController.addExercise)
UserRouter.get('/:_id/logs', UserController.getExercise)
