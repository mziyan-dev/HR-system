import express from "express";
import { adminCheck } from "../middleware/adminCheck.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { getAllUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("users is working");
})

router.get("/users", authMiddleware, adminCheck, getAllUsers);


export default router;