import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get("/dashboard");
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="p-4 bg-blue-100">Total: {data.total}</div>
        <div className="p-4 bg-green-100">Completed: {data.completed}</div>
        <div className="p-4 bg-red-100">Pending: {data.pending}</div>
      </div>
    </div>
  );
}