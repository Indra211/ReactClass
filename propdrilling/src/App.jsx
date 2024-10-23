import { useContext, useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  console.log("=====App or parent component rendering,=========");

  const [name, setName] = useState("name");
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          border: "1px solid black",
          margin: "10px",
          color: "blue",
          outline: "none",
        }}
      />
      <Child name={name} />
    </div>
  );
}

export default App;
