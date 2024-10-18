import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const handleOutput = () => {
    setOutput(eval(input));
    setInput("");
  };
  const handleClick = (val) => {
    setInput((prev) => prev + val);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <div className="container">
      <div className="calculator">
        <p>Calculator</p>
        <div className="result">
          <p className="output-text">{input ? input : output ? output : "0"}</p>
        </div>
        <div className="buttons-container">
          <div className="buttons">
            <button onClick={() => handleClick("7")} className="keys">
              7
            </button>
            <button onClick={() => handleClick("8")} className="keys">
              8
            </button>
            <button onClick={() => handleClick("9")} className="keys">
              9
            </button>
            <button onClick={handleDelete} className="keys">
              DEL
            </button>
            <button onClick={() => handleClick("4")} className="keys">
              4
            </button>
            <button onClick={() => handleClick("5")} className="keys">
              5
            </button>
            <button onClick={() => handleClick("6")} className="keys">
              6
            </button>
            <button onClick={() => handleClick("+")} className="keys">
              +
            </button>
            <button onClick={() => handleClick("1")} className="keys">
              1
            </button>
            <button onClick={() => handleClick("2")} className="keys">
              2
            </button>
            <button onClick={() => handleClick("3")} className="keys">
              3
            </button>
            <button onClick={() => handleClick("-")} className="keys">
              -
            </button>
            <button onClick={() => handleClick(".")} className="keys">
              .
            </button>
            <button onClick={() => handleClick("0")} className="keys">
              0
            </button>
            <button onClick={() => handleClick("/")} className="keys">
              /
            </button>
            <button onClick={() => handleClick("*")} className="keys">
              X
            </button>
          </div>
          <button
            onClick={() => {
              setInput("");
              setOutput("");
            }}
            className="spl-keys"
          >
            Reset
          </button>
          <button onClick={handleOutput} className="spl-keys">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
