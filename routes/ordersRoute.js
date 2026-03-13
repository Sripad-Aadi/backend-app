import express from "express"
import { placeOrder, showOrders } from "../controllers/ordersController.js"
const orderRouter = express.Router()

orderRouter.post("/placeOrder",placeOrder)
orderRouter.get("/:email",showOrders)
// ordersRouter.get("/updateOrder") to change the status of order

export default orderRouter