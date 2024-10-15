import Chip from "./components/Chip";

function App() {
  const randomNumber = parseInt(Math.random() * 100);
  return (
    <Chip data={"test"} label={randomNumber}>
      <p>Children Test</p>
    </Chip>
  );
}

export default App;
