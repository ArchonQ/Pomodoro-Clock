import moment from "moment";
import React from "react";

const Session = ({
  SessionLength,
  decrementSessionLengthByOneMinute,
  incrementSessionLengthByOneMinute,
}) => {
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
