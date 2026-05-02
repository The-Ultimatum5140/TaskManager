import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"
import taskRoutes from "./routes/taskRoutes.js"
import dashboardRoute from "./routes/dashboardRoute.js"

// config
dotenv.config();

const app = express();

// middlewares 
app.use(express.json());
app.use(cors());

app.use("/api/auth",authRoutes)
app.use("/api/projects",projectRoutes)
app.use("/api/tasks",taskRoutes)
app.use("/api/dashboard",dashboardRoute)

// api end points 
app.get("/",(req,res)=>{
    res.send("API is working");
})

//  DB Connection 
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log(err);
})

// port 
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})