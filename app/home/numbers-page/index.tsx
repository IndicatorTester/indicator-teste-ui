import React from "react";

const NumbersPage = () => {
    return (
        <div className="snap-center h-screen w-screen flex flex-col lg:flex-row justify-around items-center px-16 py-16">
            <div className="card shadow-2xl w-96 h-48 bg-neutral text-neutral-content p-10 flex items-center justify-center text-center">
                <p className="text-5xl font-bold">
                    <span className="text-green-400">+50</span> Crypto Currency
                </p>
            </div>
            <div className="card shadow-2xl w-96 h-48 bg-neutral text-neutral-content p-10 flex items-center justify-center text-center">
                <p className="text-5xl font-bold">
                    <span className="text-green-400">+50</span> Nasdaq Stock
                </p>
            </div>
            <div className="card shadow-2xl w-96 h-48 bg-neutral text-neutral-content p-10 flex items-center justify-center text-center">
                <p className="text-5xl font-bold">
                    <span className="text-green-400">+15</span> Indicator
                </p>
            </div>
        </div>
    );
};

export default NumbersPage;
