import { useState } from "react";
import { Link } from "react-router-dom";

export default function TaskTable({ tasks, onDelete }) {
  const [sortAsc, setSortAsc] = useState(true);

  const sortedTasks = [...tasks].sort((a,b) =>
    sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  );

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th onClick={() => setSortAsc(!sortAsc)}>Title ⬍</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {sortedTasks.map(task => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
              <Link to={`/edit/${task.id}`}>Edit</Link>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
