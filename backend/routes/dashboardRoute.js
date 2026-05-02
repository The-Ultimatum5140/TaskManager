import express from "express";
import { getDashboard } from "../controllers/dashboardController.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const router = express.Router();

// Dashboard route
router.get("/", authMiddleware, getDashboard);

export default router;