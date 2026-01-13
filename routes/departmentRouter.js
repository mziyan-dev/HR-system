import express from "express";
import { adminCheck } from "../middleware/adminCheck.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { createDepartment, deleteDepartment, getAllDepartments, updateDepartment } from "../controllers/departmentController.js";

const router = express.Router();

router.post("/create-department",authMiddleware,adminCheck,createDepartment);
router.put("/update-department/:id",authMiddleware,adminCheck,updateDepartment);
router.delete("/delete-department/:id",authMiddleware,adminCheck,deleteDepartment);
router.get("/get-all-departments",authMiddleware,getAllDepartments);

export default router;