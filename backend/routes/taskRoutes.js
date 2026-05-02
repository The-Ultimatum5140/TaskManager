import express from "express";
import { createTask, getTasks, updateTask } from "../controllers/taskController.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post("/", authMiddleware, createTask);
router.get("/:projectId", authMiddleware, getTasks);
router.patch("/:id", authMiddleware, updateTask);

export default router;