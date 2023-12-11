import React from "react";

function Title() {
    return (
        <div>
            <p className="text-6xl font-black leading-tight md:text-8xl">
                Signal Trading
                <br />
                <span className="inline-grid">
                    <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90">
                        Indicators
                    </span>
                    <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
                        Indicators
                    </span>
                </span>
                <br />
                And Beyond
            </p>
            <div className="md:h-8 h-4" ></div>
            <span className="text-xl font-light md:text-3xl text-gray-400">
                <p>
                    A tool to test and optimize custom signal trading <br/>indicators
                    on historical data.
                </p>
            </span>
        </div>
    );
}

export default Title;
