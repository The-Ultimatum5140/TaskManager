import express from "express"
import { createProject,getProjects } from "../controllers/projectController.js"
import {authMiddleware} from "../middlewares/authMiddlewares.js"
import {roleMiddleware} from "../middlewares/roleMiddleware.js"

const router = express.Router();

// create project admin can only do this 
router.post("/",authMiddleware,roleMiddleware("admin"),createProject);
// get projects normally sb kar skte hai 
router.get("/",authMiddleware,getProjects);

export default router;