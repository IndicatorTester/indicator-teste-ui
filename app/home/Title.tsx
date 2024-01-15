import React from "react";

function Title() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="text-5xl sm:text-6xl md:text-8xl font-black leading-tight">
                <span className="inline-grid">
                    <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90">
                        XIndicator
                    </span>
                    <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
                        XIndicator
                    </span>
                </span>
            </div>
            <div className="text-xl md:text-2xl">
                <p>A tool to backtest signal indicators and beyond.</p>
            </div>
        </div>
    );
}

export default Title;
