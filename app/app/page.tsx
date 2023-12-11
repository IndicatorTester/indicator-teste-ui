import React from "react";
import BottomNavigator, { NavigationProps } from "./BottomNavigator";

const App = () => {
    const navigationProps: NavigationProps = {
        activeTab: 0,
    };

    return (
        <>
            <div className="h-screen pb-32 flex flex-col justify-between items-center">
                <div className="h-2"></div>
                <p className="text-6xl font-black md:text-8xl text-center">
                    <span className="inline-grid">
                        <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90">
                            Get Started
                        </span>
                        <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
                            Get Started
                        </span>
                    </span>
                </p>
                <div className="inline-flex justify-center h-8 w-8">
                    <div className="flex items-center justify-center animate-bounce">
                        <svg
                            className="animate-bounce w-8 h-8 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
            <BottomNavigator {...navigationProps} />
        </>
    );
};

export default App;
