// Write.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoById, updateTodo } from "../db/db";
import "../css/Write.css";

const Edit = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState({ title: "", contents: "" });
  const navigate = useNavigate();

  // edit page에서 id가 변경된다면 getTodoById를 통해 todo를 가져와서 set함.
  useEffect(() => {
    console.log(id);
    if (id) {
      const existingTodo = getTodoById(parseInt(id));
      if (existingTodo) {
        setTodo(existingTodo);
      }
    }
  }, [id]);

  //input 값이 변경될 때 마다 todo 값 바꿈.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };
  // Update 버튼 이벤트.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateTodo({ ...todo, id: parseInt(id) });
      navigate("/");
    }
  };

  return (
    <div className="edit-container">
      <h1>{"Edit Todo"}</h1>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
