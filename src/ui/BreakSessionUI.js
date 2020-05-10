import React from "react";

export const BreakSessionContainer = ({ children, ...props }) => {
	return (
		<div className="flex flex-col items-center" {...props}>
			{children}
		</div>
	);
};

export const BreakSessionLabel = ({ children, ...props }) => {
	return (
		<p className="text-lg text-green-200" {...props}>
			{children}
		</p>
	);
};

export const BreakSessionTime = ({ children, ...props }) => {
	return (
		<p className="text-4xl font-bold text-white" {...props}>
			{children}
		</p>
	);
};
