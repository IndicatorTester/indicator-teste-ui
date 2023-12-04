import React from "react";
import NumberCard from "./NumberCard";

const NumbersPage = () => {
    return (
        <div className="snap-center h-screen w-screen flex-row md:p-16 p-6">
            <div>
                <p className="lg:text-6xl md:text-5xl text-4xl text-center font-bold">
                    Test your indicator using{" "}
                    <span className="text-green-400">+100</span> stock and
                    crypto and <span className="text-green-400">+15</span>{" "}
                    already implemented indicators.
                </p>
            </div>
            <div className="lg:h-32 h-12"></div>
            <div className="grid grid-rows-3 gap-4 lg:grid-cols-3">
                <NumberCard>
                    <p>
                        <span className="text-green-400">+50</span> Crypto
                        Currency
                    </p>
                </NumberCard>
                <NumberCard>
                    <p>
                        <span className="text-green-400">+50</span> Nasdaq Stock
                    </p>
                </NumberCard>
                <NumberCard>
                    <p>
                        <span className="text-green-400">+15</span> Indicator
                    </p>
                </NumberCard>
            </div>
        </div>
    );
};

export default NumbersPage;
