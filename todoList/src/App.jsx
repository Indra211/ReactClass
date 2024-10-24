import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [todoValue, setTodoValue] = useState("");

  // hit please localStorage Api
  // {
  //   id: "",
  //   value: "",
  //   isPending: "",
  // },

  const [todos, setTodos] = useState([]);

  const handleAddToDo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), value: todoValue, isPending: false },
    ]);
    setTodoValue("");
  };

  const pendingTasks = todos?.filter(
    (item) => item?.isPending === false && item?.value
  );

  const completedTasks = todos?.filter((item) => item?.isPending === true);

  console.log(completedTasks);

  const handleDelete = (id) => {
    const updatedTods = todos?.filter((item) => item?.id !== id);
    setTodos(updatedTods);
  };

  const handleUpdate = (index) => {
    const updatingTodos = [...todos];
    updatingTodos[index].isPending = true;
    setTodos(updatingTodos);
  };

  return (
    <div className="container">
      <h1>TODO App</h1>
      <div className="input-and-add-btn">
        <input
          type="text"
          placeholder="Add a todo..."
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button onClick={handleAddToDo}>ADD</button>
      </div>
      <div className="taskContainer">
        <h2>Tasks</h2>
        <ul>
          {pendingTasks?.map((item, index) => (
            <li key={index}>
              {item?.value}
              <div>
                {" "}
                <button
                  onClick={() => handleUpdate(index)}
                  style={{ backgroundColor: "aqua" }}
                >
                  Complete
                </button>
                <button
                  onClick={(e) => handleDelete(item?.id)}
                  style={{ backgroundColor: "darkseagreen" }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="taskContainer">
        <h2> Completed Tasks</h2>
        <ul>
          {completedTasks?.map((item, index) => (
            <li key={index}>
              {item?.value}
              <div>
                <button
                  onClick={(e) => handleDelete(item?.id)}
                  style={{ backgroundColor: "darkseagreen" }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
