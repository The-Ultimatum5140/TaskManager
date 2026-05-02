import Project from '../models/ProjectModel.js';

// Create Project his for admin only 
export const createProject = async(req , res)=>{
    try{
        const {name,members} = req.body;
        const project = await Project.create({
            name,
            createdBy:req.user.id,
            members
        })
        res.json(project);
    }catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}

// get all projects for user 
export const getProjects = async(req,res)=>{
    try{
        const projects = await Project.find({
            $or:[
                {createdBy:req.user.id},
                {members:req.user.id}
            ]
        }).populate("members","name email");
        res.json(projects);
    }catch(err){
        res.status(500).json({msg:err.message})
    }
}