import React, { useState, useEffect } from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import "./App.css";
import TimeLeft from "./components/TimeLeft";

function App() {
  const [currentSessionType, setCurrentSessionType] = useState("Session"); //'Session' or 'Break'
  const [intervalId, setIntervalId] = useState(null);
  const [SessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);
  const [timeLeft, setTimeLeft] = useState(SessionLength);

  // change timeLeft whenever sessionLength changes
  useEffect(() => {
    setTimeLeft(SessionLength);
  }, [SessionLength]);

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60;

    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60);
  };

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = SessionLength - 60;

    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByOneMinute = () => {
    setSessionLength(SessionLength + 60);
  };

  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted) {
      // if we are in started mode: we want to stop the timer
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      // if we are in stopped mode:
      //    decrement timeLeft by one every second (1000 ms)
      //      to do this we'll use setInterval
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }
          // if session:
          if (currentSessionType === "Session") {
            // switch to break
            setCurrentSessionType("Break");
            // setTimeLeft to breakLength
            setTimeLeft(breakLength);
          }
          // if break:
          else if (currentSessionType === "Break") {
            // switch to session
            setCurrentSessionType("Session");
            // setTimeLeft to sessionLength
            setTimeLeft(SessionLength);
          }
        });
      }, 100);
      setIntervalId(newIntervalId);
    }
  };

  const handleResetButtonClick = () => {
    // clear the timeout interval
    clearInterval(intervalId);
    // set the intervalId null
    setIntervalId(null);
    // set the sessiontype to 'session'
    setCurrentSessionType("Session");
    // reset the session length to 25 minutes
    setSessionLength(60 * 25);
    // reset the break length to 5 minutes
    setBreakLength(60 * 5);
    // reset the timer to 25 minutes (initial session length)
    setTimeLeft(60 * 25);
  };
  return (
    <div className="App">
      <Break
        breakLength={breakLength}
        incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
        decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
      />
      <TimeLeft
        breakLength={breakLength}
        handleStartStopClick={handleStartStopClick}
        SessionLength={SessionLength}
        timerLabel={currentSessionType}
        startStopButtonLabel={isStarted ? "Stop" : "Start"}
        timeLeft={timeLeft}
      />
      <Session
        SessionLength={SessionLength}
        decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
        incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
      />
      <button id="reset" onClick={handleResetButtonClick}>
        Reset
      </button>
      <audio id="beep">
        <source
          src="https://onlineclock.net/audio/options/default.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default App;
