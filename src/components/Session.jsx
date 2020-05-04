import moment from "moment";
import React from "react";
import { useState } from "react";

const Session = () => {
  const [SessionLength, setSessionLength] = useState(60 * 25);

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

  const SessionLengthInMinutes = moment.duration(SessionLength, "s").minutes();
  return (
    <div>
      <p id="session-label">Session</p>
      <p id="session-length">{SessionLengthInMinutes}</p>
      <button
        id="session-decrement"
        onClick={decrementSessionLengthByOneMinute}
      >
        -
      </button>
      <button
        id="session-increment"
        onClick={incrementSessionLengthByOneMinute}
      >
        +
      </button>
    </div>
  );
};

export default Session;
