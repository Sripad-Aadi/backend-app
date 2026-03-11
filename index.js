import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import productRouter from "./routes/productRoute.js";
import userRouter from './routes/userRoute.js'
import dbConnect from './config/db.js'
import storeRouter from "./routes/storeRoute.js";


const app = express();
dotenv.config()
app.use(cors());
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('layout','layout')

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use("/", storeRouter);
// app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

const startServer = async ()=>{
  await dbConnect();
  app.listen(5000, () => {
    console.log("Server Started");
  });
}

startServer()
