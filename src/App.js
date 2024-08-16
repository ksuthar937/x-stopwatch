import { useEffect, useState } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const minutes = Math.floor((time % 36000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  const handleReset = () => {
    setTime(0);
  };

  return (
    <main>
      <h1>Stopwatch</h1>
      <div className="layout">
        <p>
          Time: {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <div className="btn">
          <button onClick={handleStartStop}>
            {!isRunning ? "Start" : "Stop"}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </main>
  );
}

export default App;
