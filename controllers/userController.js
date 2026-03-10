import userModel from '../models/userModel.js'

const getUsers = async (req, res)=>{
    const users = await userModel.find()
    res.render('users/index',{users})
}

export {getUsers}