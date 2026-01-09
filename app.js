import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import userModel from './models/User.js';
// import postModel from './models/post.js';
import bcrypt from 'bcrypt';
import userRouter from "./routes/userRouter.js";
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/default.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

connectDB()

app.get('/', (req, res) => {
    res.send('hello world');
});
app.get("/api/auth/login",()=>{
    
})

app.use("/user",userRouter);



app.listen(process.env.PORT,()=>{
    console.log("Server started at port 3000 ");
});