import { useEffect, useState } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleReset = () => {
    setTime(0);
  };

  return (
    <main>
      <h1>Stopwatch</h1>
      <div className="layout">
        <p>
          Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <div className="btn">
          {!isRunning ? (
            <button onClick={handleStartStop}>Start</button>
          ) : (
            <button onClick={handleStartStop}>Stop</button>
          )}
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </main>
  );
}

export default App;
