import Task from "../models/Task.js";

export const getDashboard = async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.user.id });

    const total = tasks.length;
    const completed = tasks.filter(t => t.status === "done").length;
    const pending = tasks.filter(t => t.status !== "done").length;

    res.json({
      total,
      completed,
      pending
    });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};