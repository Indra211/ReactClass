import React from "react";
import { useSelector } from "react-redux";

export const Count = () => {
  const counter = useSelector((state) => state.count?.count);
  return <div>count:{counter}</div>;
};
