import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React from "react";

momentDurationFormatSetup(moment);

const TimeLeft = ({
	handleStartStopClick,
	startStopButtonLabel,
	timeLeft,
	timerLabel,
	handleResetButtonClick,
}) => {
	const formattedTimeLeft = moment
		.duration(timeLeft, "s")
		.format("mm.ss", { trim: false });
	return (
		<div className="flex flex-col justify-evenly items-center w-64 h-64 bg-red-600 rounded-full">
			<p className="text-red-900 text-2xl" id="timer-label">
				{timerLabel}
			</p>
			<p className="font-clock text-4xl font-bold" id="time-left">
				{formattedTimeLeft}
			</p>
			<div className=" grid grid-flow-col gap-2 ">
				<button
					className="text-red-400 font-semibold bg-green-100 px-4 py-2  rounded-lg"
					id="start_stop"
					onClick={handleStartStopClick}
				>
					{startStopButtonLabel}
				</button>
				<button
					className="text-red-400 font-semibold bg-green-100 px-3 py-2 rounded-lg"
					id="reset"
					onClick={handleResetButtonClick}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default TimeLeft;
