import orderModel from "../models/orderModel.js";

const placeOrder = async (req,res)=>{
    const { email, orderValue, items } = req.body

    const formattedItems = items.map(item => ({
        _id: item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.price
    }))

    const order = await orderModel.create({
        email,
        orderValue,
        items: formattedItems
    })

    res.json(order)
}

export {placeOrder}