import express from 'express'
import { showProducts } from "../controllers/productController";

const productRouter = express.Router()

productRouter.get('/',showProducts)

export {productRouter}