import React from "react";

function Title() {
    return (
        <>
            <div>
                <p className="text-6xl font-bold leading-tight md:text-8xl">
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
            </div>
            <div className="m-6"></div>
            <div>
                <span className="text-xl font-light md:text-2xl text-gray-400">
                    <p>
                        A tool to test custom signal trading indicators on
                        historical data.
                    </p>
                    <p>
                        Figure out the total profit of a signal indicator {' '}
                        <u className="text-neutral-content" >easier than ever</u>.
                    </p>
                </span>
            </div>
        </>
    );
}

export default Title;
