import { useState } from "react";

function ArthematicOperations() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  const [diff, setDiff] = useState(0);
  const [mul, setMul] = useState(0);
  const [div, setDiv] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleSum = (val) => {
    setSum(Number(num1) + Number(num2) + val);
  };

  const handleDiff = () => {
    setDiff(Number(num1) - Number(num2));
  };

  const handleMul = () => {
    setMul(Number(num1) * Number(num2));
  };

  const handleDiv = () => {
    setDiv(Number(num1) / Number(num2));
  };

  const inputStyle = {
    padding: "8px 16px",
    borderRadius: "8px",
    outline: "none",
    border: "1px solid #ccc",
  };

  return (
    <div>
      <h1>Arthematic Operations</h1>
      <input
        style={inputStyle}
        type="number"
        value={num1}
        onChange={(e) => {
          console.log(e);
        }}
        placeholder="Enter first number"
      />
      <input
        style={inputStyle}
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Enter second number"
      />
      <p>num1: {num1}</p> <p>num2: {num2}</p>
      <button onClick={() => handleSum(10)}>Sum</button>
      <button onClick={handleDiff}>Difference</button>
      <button onClick={handleMul}>Product</button>
      <button onClick={handleDiv}>Quotient</button>
      <p>Sum: {sum}</p>
      <p>Difference: {diff}</p>
      <p>Product: {mul}</p>
      <p>Quotient: {div}</p>
      <p>num1: {num1}</p> <p>num2: {num2}</p>
    </div>
  );
}

// functionName()

export default ArthematicOperations;
