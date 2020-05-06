import React, { useState } from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import "./App.css";
import TimeLeft from "./components/TimeLeft";

function App() {
  const [SessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);

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
  const handleResetButtonClick = () => {
    // clear the timeout interval
    // set the intervalId null
    // set the sessiontype to 'session'
    // reset the session length to 25 minutes
    // reset the break length to 5 minutes
    // reset the timer to 25 minutes (initial session length)
  };
  return (
    <div className="App">
      <Break
        breakLength={breakLength}
        incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
        decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
      />
      <TimeLeft breakLength={breakLength} SessionLength={SessionLength} />
      <Session
        SessionLength={SessionLength}
        decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
        incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
      />
    </div>
  );
}

export default App;
