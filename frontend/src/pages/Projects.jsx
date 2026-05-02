import { useEffect, useState } from "react";
import API from "../services/api";
import Tasks from "./Tasks";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const createProject = async () => {
    await API.post("/projects", { name });
    setName("");
    fetchProjects(); // refresh
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Projects</h1>
      {/* Create Project */}
      <div className="mt-4">
        <input
          className="border p-2"
          placeholder="Project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={createProject}
          className="bg-blue-500 text-white p-2 ml-2"
        >
          Add
        </button>
      </div>
      {/* List */}
      import Tasks from "./Tasks";
      {projects.map((p) => (
        <div key={p._id} className="p-3 border mt-2">
          <h2>{p.name}</h2>
          <Tasks projectId={p._id} />
        </div>
      ))}
    </div>
  );
}
