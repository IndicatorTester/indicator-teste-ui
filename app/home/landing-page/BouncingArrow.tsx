import React from "react";

const BouncingArrow = () => {
    return (
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
    );
};

export default BouncingArrow;
