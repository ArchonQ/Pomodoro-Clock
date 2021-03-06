import React, { useState, useEffect, useRef } from "react";
import "./assets/main.css";
import Break from "./components/Break";
import Session from "./components/Session";
import "./App.css";
import TimeLeft from "./components/TimeLeft";

function App() {
	const audioElement = useRef(null);
	const [currentSessionType, setCurrentSessionType] = useState("Session"); //'Session' or 'Break'
	const [intervalId, setIntervalId] = useState(null);
	const [SessionLength, setSessionLength] = useState(60 * 25);
	const [breakLength, setBreakLength] = useState(300);
	const [timeLeft, setTimeLeft] = useState(SessionLength);

	// change timeLeft whenever sessionLength changes
	useEffect(() => {
		setTimeLeft(SessionLength);
	}, [SessionLength]);

	useEffect(() => {
		if (timeLeft === 0) {
			audioElement.current.play();
			if (currentSessionType === "Session") {
				setCurrentSessionType("Break");
				setTimeLeft(breakLength);
			} else if (currentSessionType === "Break") {
				setCurrentSessionType("Session");
				setTimeLeft(SessionLength);
			}
		}
	}, [breakLength, currentSessionType, SessionLength, timeLeft]);

	const decrementBreakLengthByOneMinute = () => {
		const newBreakLength = breakLength - 60;
		if (newBreakLength > 0) {
			setBreakLength(newBreakLength);
		}
	};

	const incrementBreakLengthByOneMinute = () => {
		const newBreakLength = breakLength + 60;
		if (newBreakLength <= 60 * 60) {
			setBreakLength(newBreakLength);
		}
	};

	const decrementSessionLengthByOneMinute = () => {
		const newSessionLength = SessionLength - 60;
		if (newSessionLength > 0) {
			setSessionLength(newSessionLength);
		}
	};

	const incrementSessionLengthByOneMinute = () => {
		const newSessionLength = SessionLength + 60;
		if (newSessionLength <= 60 * 60) {
			setSessionLength(SessionLength + 60);
		}
	};

	const isStarted = intervalId !== null;
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
				setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
			}, 100);
			setIntervalId(newIntervalId);
		}
	};

	const handleResetButtonClick = () => {
		// reset audio
		audioElement.current.load();
		// clear the timeout interval
		clearInterval(intervalId);
		// set the intervalId null
		setIntervalId(null);
		// set the sessiontype to 'session'
		setCurrentSessionType("Session");
		// reset the session length to 25 minutes
		setSessionLength(60 * 25);
		// reset the break length to 5 minutes
		setBreakLength(60 * 5);
		// reset the timer to 25 minutes (initial session length)
		setTimeLeft(60 * 25);
	};
	return (
		<div className="flex flex-col h-screen items-center justify-center bg-teal-500">
			<div className="flex w-full justify-around">
				<Break
					breakLength={breakLength}
					incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
					decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
				/>
				<TimeLeft
					handleResetButtonClick={handleResetButtonClick}
					handleStartStopClick={handleStartStopClick}
					timerLabel={currentSessionType}
					startStopButtonLabel={isStarted ? "Stop" : "Start"}
					timeLeft={timeLeft}
				/>
				<Session
					SessionLength={SessionLength}
					decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
					incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
				/>
			</div>

			<audio id="beep" ref={audioElement}>
				<source
					src="https://onlineclock.net/audio/options/default.mp3"
					type="audio/mpeg"
				/>
			</audio>
		</div>
	);
}

export default App;
