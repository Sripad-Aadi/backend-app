import userModel from '../models/userModel.js'
import bcrypt from "bcrypt"

const getUsers = async (req, res)=>{
    const users = await userModel.find()
    res.render('users/index',{users})
}

const addUserForm = async (req, res) =>{
    res.render('users/add')
}

const addUser = async (req, res)=> {
    const body = req.body;
    const hashedPassword = await bcrypt.hash(body.password, 10);
    body.password = hashedPassword;
    await userModel.create(body);
    res.redirect('/users')
}

const editUserForm = async (req,res)=>{
    const id = req.params.id;
    const user = await userModel.findOne({_id:id})
    res.render('users/edit',{user})
}

const editUser = async (req, res)=>{
    const id = req.params.id
    await userModel.findByIdAndUpdate(id,req.body)
    res.redirect('/users')
}

const deleteUser = async (req, res) =>{
    const id = req.params.id
    await userModel.findByIdAndDelete(id)
    res.redirect('/users')
}

export {getUsers, addUser, addUserForm, editUserForm, editUser, deleteUser}