import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import userModel from './models/User.js';
import userRouter from "./routes/userRouter.js";
import departmentRouter from "./routes/departmentRouter.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/default.js';
import {isLoggedIn} from './middleware/isLoggedIn.js';
import authRouter from "./routes/authRouter.js";





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



app.use("/user",userRouter);
app.use("/auth",authRouter);
app.use("/department",departmentRouter);


app.listen(process.env.PORT,()=>{
    console.log("Server started at port 3000 ");
});