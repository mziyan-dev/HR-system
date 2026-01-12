import express from "express";
import { adminCheck } from "../middleware/adminCheck.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { deleteTask, getAllUsers, updateTask, updateTaskStatus } from "../controllers/userController.js";
import { createTask } from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("users is working");
})

router.post("/create-task",authMiddleware,adminCheck,createTask);
router.put("/update-task/:id",authMiddleware,adminCheck,updateTask);
router.put("/update-task-status/:id",authMiddleware,updateTaskStatus);
router.delete("/delete-task/:id",authMiddleware,adminCheck,deleteTask);
router.get("/users",authMiddleware,adminCheck,getAllUsers);


export default router;