import React from "react";
import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "./redux/todoSlicer";

export default function App() {
  const [todoValue, setTodoValue] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  console.log(todos);

  // hit please localStorage Api
  // {
  //   id: "",
  //   value: "",
  //   isPending: "",
  // },

  // const [todos, setTodos] = useState([]);

  const handleAddToDo = () => {
    // setTodos((prev) => [
    //   ...prev,
    //   { id: Date.now(), value: todoValue, isPending: false },
    // ]);

    //using redux

    dispatch(
      setTodos([
        ...todos,
        { id: Date.now(), value: todoValue, isCompleted: false },
      ])
    );

    setTodoValue("");
  };

  const pendingTasks = todos?.filter(
    (item) => item?.isCompleted === false && item?.value
  );

  const completedTasks = todos?.filter((item) => item?.isCompleted === true);

  const handleDelete = (id) => {
    const updatedTods = todos?.filter((item) => item?.id !== id);
    dispatch(setTodos(updatedTods));
  };

  const handleUpdate = (index) => {
    const updatingTodos = JSON.parse(JSON.stringify([...todos]));
    updatingTodos[index].isCompleted = true;
    // setTodos(updatingTodos); //using redux
    dispatch(setTodos(updatingTodos));
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
