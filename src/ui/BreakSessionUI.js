import React from "react";

export const BreakSessionContainer = ({ children, ...props }) => {
    return (
        <div className="flex flex-col items-center" {...props}>
            {children}
        </div>
    );
};
