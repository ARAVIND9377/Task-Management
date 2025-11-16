import { useState } from "react";

export default function useTaskForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!values.title) errs.title = "Title is required";
    if (!values.description) errs.description = "Description required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return {
    values,
    errors,
    validate,
    handleChange,
    setValues,
  };
}
