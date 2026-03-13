import mongoose from 'mongoose'

const itemSchema =mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId},
    name:{type:String, required:true},
    quantity:{type:Number},
    price:{type:Number}
})

const ordersSchema = mongoose.Schema({
    email:{type:String, required:true, lowercase: true },
    orderValue:{ type:Number, required:true, min:0 },
    status:{type: String, enum: { values: ['pending', 'confirmed', 'shipped', 'delivered'] }, default: 'pending'},
    items:[itemSchema]
})

const orderModel = mongoose.model('orders',ordersSchema);

export default orderModel