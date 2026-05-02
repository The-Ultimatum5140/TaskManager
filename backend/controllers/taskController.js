import Task from "../models/Task.js";
import Project from "../models/ProjectModel.js";

// create task
export const createTask = async (req, res) => {
  try {
    const { title, description, projectId, assignedTo, dueDate } = req.body;

    if (!title || !projectId) {
      return res.status(400).json({ msg: "Title & Project required" });
    }

    const task = await Task.create({
      title,
      description,
      projectId,
      assignedTo,
      dueDate,
    });

    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);

    if (
      project.createdBy.toString() !== req.user.id &&
      !project.members.includes(req.user.id)
    ) {
      return res.status(403).json({ msg: "Not authorized" });
    }

    const tasks = await Task.find({
      projectId: req.params.projectId,
    }).populate("assignedTo", "name email");

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// update status
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (
      task.assignedTo.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ msg: "Not allowed" });
    }

    task.status = req.body.status || task.status;
    await task.save();

    res.json(task);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
