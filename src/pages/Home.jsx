import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskTable from "../components/TaskTable";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

export default function Home() {
  const { tasks, deleteTask } = useContext(TaskContext);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;

  const filtered = tasks.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <h1 className="bg-blue-400">Task Manager</h1>

      <Link to="/create">Create New Task</Link>
      <br /><br />

      <SearchBar value={search} onChange={setSearch} />

      <TaskTable tasks={paginated} onDelete={deleteTask} />

      <Pagination current={page} total={totalPages} onChange={setPage} />
    </div>
  );
}
