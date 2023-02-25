import { Router } from 'express'
import UserController from '../controllers/user-controller.js'

const UserRouter = new Router()

UserRouter.post('/', UserController.addUser)
UserRouter.get('/', UserController.getAllUsers)
UserRouter.post('/:_id/exercises', UserController.addExercise)

export default UserRouter
