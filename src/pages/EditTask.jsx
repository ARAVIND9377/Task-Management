import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import useTaskForm from "../hooks/useTaskForm";

export default function EditTask() {
  const { id } = useParams();
  const { tasks, editTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const task = tasks.find(t => t.id === Number(id));
  const { values, setValues, handleChange, errors, validate } = useTaskForm();

  useEffect(() => {
    if (task) setValues(task);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    editTask(task.id, values);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={values.title} onChange={handleChange} />
        {errors.title && <p>{errors.title}</p>}

        <textarea name="description" value={values.description} onChange={handleChange} />
        {errors.description && <p>{errors.description}</p>}

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
