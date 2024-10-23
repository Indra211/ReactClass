import React from "react";

const GrandChild = (props) => {
  const { name } = props;
  console.log("=====grand child rendering,=========");

  return (
    <div style={{ color: "red", padding: "10px", border: "1px solid black" }}>
      {name}
    </div>
  );
};

export default GrandChild;
