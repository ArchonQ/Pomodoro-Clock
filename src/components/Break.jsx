import moment from "moment";
import React from "react";
import {
	BreakSessionContainer,
	BreakSessionLabel,
	BreakSessionTime,
} from "../ui/BreakSessionUI";

const Break = ({
	breakLength,
	decrementBreakLengthByOneMinute,
	incrementBreakLengthByOneMinute,
}) => {
	const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();
	return (
		<BreakSessionContainer>
			<BreakSessionLabel id="break-label">Break</BreakSessionLabel>
			<BreakSessionTime id="break-length">
				{breakLengthInMinutes}
			</BreakSessionTime>
			<button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>
				-
			</button>
			<button id="break-increment" onClick={incrementBreakLengthByOneMinute}>
				+
			</button>
		</BreakSessionContainer>
	);
};

export default Break;
