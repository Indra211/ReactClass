import Alert from "./Alert";
import "./App.css";
import ArthematicOperations from "./ArthematicOperations";

function App() {
  const divStyle = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const h1Style = {
    color: "red",
    backgroundColor: "blue",
  };

  return (
    // internal and inline styling
    // <div style={divStyle}>
    //   <h1 style={{color: "red",
    // backgroundColor: "blue",}}>Styling and corrections</h1>
    // </div>
    // external styling

    // <div className="App">
    //   <h1 className="title">Styling and corrections</h1>
    //   <Alert />
    // </div>
    //  Arthematic Operations
    <ArthematicOperations />
  );
}

export default App;
