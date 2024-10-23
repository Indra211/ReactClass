import React from "react";
import GrandChild from "./GrandChild";

const Child = (props) => {
  const { name } = props;

  console.log("=====child rendering,=========");
  return (
    <div>
      Child
      <GrandChild name={name} />
    </div>
  );
};

export default Child;
