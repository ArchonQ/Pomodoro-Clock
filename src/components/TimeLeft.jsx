import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React, { useState } from "react";
import { useEffect } from "react";

momentDurationFormatSetup(moment);

const TimeLeft = ({ BreakLength, SessionLength }) => {
  const [currentSessionType, setCurrentSessionType] = useState("Session"); //'Session' or 'Break'
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(SessionLength);

  // change timeLeft whenever sessionLength changes
  useEffect(() => {
    setTimeLeft(SessionLength);
  }, [SessionLength]);

  const isStarted = intervalId != null;

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
            setTimeLeft(BreakLength);
          }

          // if break:
          else if (currentSessionType === "Break")
            // switch to session
            setCurrentSessionType("Session");
          // setTimeLeft to sessionLength
          setTimeLeft(SessionLength);
          //
          return prevTimeLeft;
        });
      }, 100);
      setIntervalId(newIntervalId);
    }
  };

  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm.ss", { trim: false });

  return (
    <div>
      {formattedTimeLeft}
      <button onClick={handleStartStopClick}>
        {isStarted ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default TimeLeft;
