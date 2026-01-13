import express from "express";
import { adminCheck } from "../middleware/adminCheck.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { createTask, deleteTask, updateTask, updateTaskStatus } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("users is working");
})

router.post("/create-task",authMiddleware,adminCheck,createTask);
router.put("/update-task/:id",authMiddleware,adminCheck,updateTask);
router.put("/update-task-status/:id",authMiddleware,updateTaskStatus);
router.delete("/delete-task/:id",authMiddleware,adminCheck,deleteTask);


export default router;