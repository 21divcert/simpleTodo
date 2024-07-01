// Main.jsx
import React, { useState, useEffect } from "react";
import { getTodos, deleteTodo } from "../db/db";
import "../css/Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    deleteTodo(id);
    setTodos(getTodos());
  };

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.contents}</p>
            <p>Created At: {todo.create_at}</p>
            <p>Updated At: {todo.update_at}</p>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <Link to={`/edit/${todo.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/new">Add New Todo</Link>
    </div>
  );
};

export default Main;
