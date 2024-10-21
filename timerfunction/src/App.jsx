import { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isTimerOn, setIsonTimerOn] = useState(false);
  const handleAddOneDay = () => {
    setTime((prev) => prev + 24 * 60 * 60);
  };
  const handleAddOneHour = () => {
    setTime((prev) => prev + 60 * 60);
  };
  const handleAdd10Minute = () => {
    setTime((prev) => prev + 10 * 60);
  };

  const handleTimer = (time) => {
    const days = Math.floor(time / (24 * 60 * 60));
    time = time % (24 * 60 * 60);
    const hours = Math.floor(time / (60 * 60));
    time %= 60 * 60;
    const minutes = Math.floor(time / 60);
    time %= 60;
    const seconds = time;
    return `${days}DD:${hours}HH:${minutes}MM:${seconds}SS`;
  };
  const handleStart = () => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev > 0) {
          setIsonTimerOn(true);
          return prev - 1;
        } else {
          clearInterval(interval);
          setIsonTimerOn(false);
          return 0;
        }
      });
    }, 1000);
  };
  const handleReset = () => {
    setTime(0);
    clearInterval(handleStart);
    setIsonTimerOn(false);
  };
  return (
    <div className="container">
      <div className="timer">{handleTimer(time)}</div>
      <div className="timer-btns">
        <button disabled={isTimerOn} onClick={handleAddOneDay}>
          Add 1 Day
        </button>
        <button disabled={isTimerOn} onClick={handleAddOneHour}>
          Add 1 Hour
        </button>
        <button disabled={isTimerOn} onClick={handleAdd10Minute}>
          Add 10 Minute
        </button>
        <button
          disabled={isTimerOn}
          onClick={handleStart}
          className="start-btn"
        >
          Start
        </button>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
