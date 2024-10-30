import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handlelick = () => {
    navigate("/account", { state: "User Accont" });
  };
  return (
    <div>
      Home
      <button onClick={handlelick}>goto account</button>
    </div>
  );
}
