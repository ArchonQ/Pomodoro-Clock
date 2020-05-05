import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React, { useState } from "react";
import { useEffect } from "react";

momentDurationFormatSetup(moment);

const TimeLeft = ({ SessionLength }) => {
  const [timeLeft, setTimeLeft] = useState(SessionLength);

  // change timeLeft whenever sessionLength changes
  useEffect(() => {
    setTimeLeft(SessionLength);
  }, [SessionLength]);

  const handleStartStopClick = () => {
    //    decrement timeLeft by one every second (1000 ms)
    //      to do this we'll use setInterval

    setInterval(() => {
      console.log("hello there!");
    }, 1000);
  };

  const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm.ss");

  return (
    <div>
      {formattedTimeLeft}
      <button onClick={handleStartStopClick}>Start</button>
    </div>
  );
};

export default TimeLeft;
