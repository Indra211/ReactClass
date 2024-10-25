import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setDrecement, setIcrement } from "./redux/slicer";
import { Count } from "./components/count";

export const App = () => {
  const counter = useSelector((state) => state.count?.count);
  const dispatch = useDispatch();

  const handInc = () => {
    dispatch(setIcrement());
  };

  const handDec = () => {
    dispatch(setDrecement());
  };

  return (
    <div className="container">
      <h3>
        <Count />
      </h3>
      <button onClick={handInc}>Increment</button>
      <button onClick={handDec}>Decrement</button>
    </div>
  );
};
