import express from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/authController.js";
import { createTask } from "../controllers/userController.js";
import { adminCheck } from "../middleware/adminCheck.js";
import task from "../models/Task.js"
import { createTask } from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("hey users is working");
})


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post('/task', adminCheck, createTask);


export default router;