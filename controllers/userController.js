import userModel from '../models/userModel.js'

const getUsers = async (req, res)=>{
    const users = await userModel.find()
    res.render('users/index',{users})
}

const addUserForm = async (req, res) =>{
    res.render('users/add')
}

const addUser = async (req, res)=> {
    await userModel.create(req.body)
    res.redirect('/users')
}

export {getUsers, addUser, addUserForm}