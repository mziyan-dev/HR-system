import express from "express";
import { adminCheck } from "../middleware/adminCheck.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { deleteUser, getAllUsers, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("users is working");
})

router.get("/users", authMiddleware, adminCheck, getAllUsers);
router.put("/users/:id", authMiddleware, adminCheck, updateUser);
router.delete("/users/:id", authMiddleware, adminCheck, deleteUser);


export default router;