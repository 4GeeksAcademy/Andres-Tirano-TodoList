import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat([inputValue]));
                setInputValue("");
              }
            }}
            placeholder="Write your task here...."
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <i
              className="trash fas fa-trash-alt"
              onClick={() =>
                setTodos(
                  todos.filter((_, currentIndex) => currentIndex !== index)
                )
              }
            ></i>
          </li>
        ))}
      </ul>
      <div className="task">{todos.length} Tasks</div>
    </div>
  );
};

export default Home;
