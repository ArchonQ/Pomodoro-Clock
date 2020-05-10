import moment from "moment";
import React from "react";
import {
	BreakSessionContainer,
	BreakSessionLabel,
	BreakSessionTime,
} from "../ui/BreakSessionUI";

const Session = ({
	SessionLength,
	decrementSessionLengthByOneMinute,
	incrementSessionLengthByOneMinute,
}) => {
	const SessionLengthInMinutes = moment
		.duration(SessionLength, "s")
		.asMinutes();
	return (
		<BreakSessionContainer>
			<BreakSessionLabel id="session-label">Session</BreakSessionLabel>
			<BreakSessionTime id="session-length">
				{SessionLengthInMinutes}
			</BreakSessionTime>
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
		</BreakSessionContainer>
	);
};

export default Session;
