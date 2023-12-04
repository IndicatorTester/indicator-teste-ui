import React from "react";
import TransactionsTimeline from "./TransactionsTimeline";

const TransactionsPage = () => {
    return (
        <div className="snap-center h-screen w-screen flex flex-col lg:flex-row lg:items-stretch items-center md:p-16 p-6">
            <div className="flex flex-col justify-start lg:mt-32 lg:w-1/2">
                <p className="lg:text-6xl md:text-5xl text-4xl lg:text-start text-center font-bold">
                    Study all <span className="text-green-400">Buy</span> /{" "}
                    <span className="text-red-500">Sell</span> transactions and
                    optimize your indicator.
                </p>
                <div className="m-4"></div>
                <p className="text-gray-400 lg:text-start text-center text-lg font-light md:text-2xl">
                    Check all transactions which depend on historical data to
                    know the quality of your indicator then <u className="text-neutral-content" >optimize it</u>.
                </p>
            </div>
            <div className="lg:mt-0 md:mt-8 mt-8"></div>
            <div className="flex lg:w-1/2 justify-center" >
                <TransactionsTimeline />
            </div>
        </div>
    );
};

export default TransactionsPage;
