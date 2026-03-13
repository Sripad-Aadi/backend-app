import express from "express"
import { placeOrder } from "../controllers/ordersController.js"
const orderRouter = express.Router()

orderRouter.post("/placeOrder",placeOrder)
// ordersRouter.get("/updateOrder") to change the status of order

export default orderRouter