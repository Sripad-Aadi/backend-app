import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique: true, lowercase: true },
    password:{type:String, required:true },
    role: {type: String, enum: { values: ['user', 'admin'] }, default: 'user' }
})

const userModel = mongoose.model('users',userSchema);

export default userModel