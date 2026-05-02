import { useEffect, useState } from "react";
import API from "../services/api";

export default function Tasks({ projectId }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get(`/tasks/${projectId}`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [projectId]);

  const createTask = async () => {
    await API.post("/tasks", {
      title,
      projectId
    });
    setTitle("");
    fetchTasks();
  };

  const markDone = async (id) => {
    await API.patch(`/tasks/${id}`, { status: "done" });
    fetchTasks();
  };

  return (
    <div>
      <h2 className="font-bold">Tasks</h2>

      <input
        className="border p-2"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={createTask} className="bg-green-500 text-white p-2 ml-2">
        Add Task
      </button>

      {tasks.map((t) => (
        <div key={t._id} className="border p-2 mt-2 flex justify-between">
          <span>{t.title} ({t.status})</span>
          <button onClick={() => markDone(t._id)}>Done</button>
        </div>
      ))}
    </div>
  );
}