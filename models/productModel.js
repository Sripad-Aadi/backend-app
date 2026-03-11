import mongoose from "mongoose"
const productSchema =mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:Number,required:true},
    imageURL:{type:String},
    rating:{type:Number,max:5,min:0,default: 0}
})

const productModel = mongoose.model('products',productSchema);

export default productModel