import { useState } from "react";

function Alert() {
  const [showAlert, setShowAlert] = useState(false);
  function handleAlert() {
    setShowAlert(!showAlert);
  }
  console.log(showAlert);
  return (
    <div>
      <h1>Alert</h1>
      {showAlert && <p>This is an alert</p>}
      <button onClick={handleAlert}>
        {showAlert ? "Hide Alert" : "Show Alert"}
      </button>
    </div>
  );
}

export default Alert;

// in react statemanagement
