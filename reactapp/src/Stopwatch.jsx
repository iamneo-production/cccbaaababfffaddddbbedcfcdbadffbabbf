import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <p id="time">{time}</p>
      {!isRunning ? (
        <button data-testid="start" onClick={handleStart}>
          Start
        </button>
      ) : (
        <>
          <button data-testid="pause" onClick={handlePause}>
            Pause
          </button>
          <button data-testid="reset" onClick={handleReset}>
            Reset
          </button>
        </>
      )}
      {isRunning && (
        <button data-testid="resume" onClick={handleResume}>
          Resume
        </button>
      )}
    </div>
  );
};

export default Stopwatch;