import { useState, useEffect } from "react";
import "../styles/QuizTimer.css";

function QuizTimer() {
  const [seconds, setSeconds] = useState(30);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (seconds === 0) {
      setRunning(false);
    }
  }, [seconds]);

  function resetTimer() {
    setRunning(false);
    setSeconds(30);
  }

  return (
    <div className="quiz-timer">
      <h3 className={seconds <= 5 ? "red" : ""}>
        {seconds}s
      </h3>

      {seconds === 0 && <p>Time's up!</p>}

      <button onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>

      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default QuizTimer;