import express from 'express'
import {getUsers,addUser,addUserForm} from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/',getUsers)
userRouter.get('/add',addUserForm)
userRouter.post('/add',addUser)

export default userRouter