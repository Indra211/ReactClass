import React from "react";
import { useNavigate } from "react-router-dom";
import { students } from "../data/students";

export default function Home() {
  const navigate = useNavigate();
  const handlelick = () => {
    navigate("/account", { state: "User Accont" });
  };
  return (
    <div>
      {/* Home
      <button onClick={handlelick}>goto account</button> */}

      {/* dynamic routing */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {students.map((student) => (
          <div
            onClick={() => navigate(`/element/${student.id}`)}
            key={student.id}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              border: "1px solid black",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <h1>{student.name}</h1>
            <h3>{student.age}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
