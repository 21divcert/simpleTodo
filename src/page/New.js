import React from "react";
import { addTodo } from "../db/db";
import { useNavigate } from "react-router-dom";

const New = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = React.useState({ title: "", contents: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      ...todo,
      create_at: new Date().toISOString(),
      update_at: new Date().toISOString(),
    });
    navigate("/");
  };

  return (
    <div className="new-task-container">
      <h1>{"New Todo"}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contents:
          <textarea
            name="contents"
            value={todo.contents}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default New;
