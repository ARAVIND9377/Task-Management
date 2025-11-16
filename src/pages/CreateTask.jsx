import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import useTaskForm from "../hooks/useTaskForm";
import { useNavigate } from "react-router-dom";

export default function CreateTask() {
  const { addTask } = useContext(TaskContext);
  const { values, errors, handleChange, validate } = useTaskForm({
    title: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    addTask(values);
    navigate("/");
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Task Title"
          value={values.title}
          onChange={handleChange}
        />
        {errors.title && <p>{errors.title}</p>}

        <textarea
          name="description"
          placeholder="Description"
          value={values.description}
          onChange={handleChange}
        />
        {errors.description && <p>{errors.description}</p>}

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
