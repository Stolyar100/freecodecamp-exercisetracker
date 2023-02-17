import { Router } from 'express'

const UserRouter = new Router()

UserRouter.post('/')
UserRouter.post('/:_id/exercise')
UserRouter.get('/:_id/logs')
