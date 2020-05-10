import moment from "moment";
import React from "react";
import {
	BreakSessionContainer,
	BreakSessionLabel,
	BreakSessionTime,
	PlusMinusButtonContainer,
	PlusMinusButton,
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
			<PlusMinusButtonContainer>
				<PlusMinusButton
					id="session-decrement"
					onClick={decrementSessionLengthByOneMinute}
				>
					-
				</PlusMinusButton>
				<PlusMinusButton
					id="session-increment"
					onClick={incrementSessionLengthByOneMinute}
				>
					+
				</PlusMinusButton>
			</PlusMinusButtonContainer>
		</BreakSessionContainer>
	);
};

export default Session;
