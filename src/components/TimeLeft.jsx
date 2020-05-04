import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React, { useState } from "react";

momentDurationFormatSetup(moment);

const TimeLeft = ({ SessionLength }) => {
  const [timeLeft, setTimeLeft] = useState(SessionLength);
  const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm.ss");
  return <div>{formattedTimeLeft}</div>;
};

export default TimeLeft;
