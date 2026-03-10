import express from 'express'
import {getUsers,addUser,addUserForm, editUser, editUserForm,deleteUser} from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/',getUsers)
userRouter.get('/add',addUserForm)
userRouter.post('/add',addUser)
userRouter.get('/:id/edit',editUserForm)
userRouter.post('/:id/save',editUser)
userRouter.get('/:id/delete',deleteUser)

export default userRouter