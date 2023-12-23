"use client";

import React, { useState } from "react";

const PricingPage = () => {
    const offers = [
        {
            name: "Basic",
            details: [
                "5 tests per day",
                "Last 10 tests history",
                "US market stocks",
            ],
            price: 29,
        },
        {
            name: "Standard",
            details: [
                "12 tests per day",
                "Last 25 tests history",
                "US market stocks",
                "Cryptocurrencies",
            ],
            price: 49,
        },
        {
            name: "Pro",
            details: [
                "30 tests per day",
                "Last 50 tests history",
                "US market stocks",
                "Cryptocurrencies",
                "All available symbols on your twelvedata plan",
            ],
            price: 99,
        },
    ];

    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1 min-h-screen">
                <div className="flex flex-col space-y-16 justify-start items-center text-center">
                    <h1 className="lg:text-6xl text-5xl font-black">
                        Simple Pricing
                    </h1>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="w-full col-span-1 lg:col-span-3 flex flex-col space-y-6 justify-center items-center">
                            <div className="w-full flex flex-row justify-center items-center space-x-3 font-bold">
                                <p
                                    className={`transition-colors duration-300 ease-in-out ${
                                        isMonthly ? "" : "text-gray-500"
                                    }`}
                                >
                                    Monthly
                                </p>
                                <input
                                    type="checkbox"
                                    className="toggle"
                                    onChange={() => setIsMonthly(!isMonthly)}
                                />
                                <p
                                    className={`transition-colors duration-300 ease-in-out ${
                                        isMonthly ? "text-gray-500" : ""
                                    }`}
                                >
                                    Annual
                                </p>
                            </div>
                            <div
                                className={`transition-opacity duration-300 ease-in-out text-lg ${
                                    isMonthly ? "opacity-0" : "opacity-100"
                                }`}
                            >
                                Two months for{" "}
                                <span className="text-xl font-bold text-green-400">
                                    Free
                                </span>
                            </div>
                        </div>
                        {offers.map((offer, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-neutral shadow-2xl rounded-3xl p-6 flex flex-col space-y-4 justify-start"
                                >
                                    <h2 className="text-xl font-black text-red-500">
                                        {offer.name}
                                    </h2>
                                    <p className="text-4xl font-black text-green-400">
                                        <span className="text-lg align-text-top">
                                            $
                                        </span>
                                        <span>
                                            {" "}
                                            {offer.price * (isMonthly ? 1 : 10)}
                                        </span>
                                        <span className="text-lg text-neutral-content font-normal">
                                            / {isMonthly ? "month" : "year"}
                                        </span>
                                    </p>
                                    {!isMonthly && (
                                        <div className="w-full flex justify-center items-center text-lg">
                                            was ${offer.price * 12}
                                        </div>
                                    )}
                                    <div></div>
                                    <button className="btn btn-outline">
                                        <span className="font-black">
                                            Coming Soon...
                                        </span>
                                    </button>
                                    <div></div>
                                    <div className="flex flex-col space-y-2 text-start">
                                        {offer.details.map((detail, index) => (
                                            <p
                                                key={index}
                                                className="flex space-x-2"
                                            >
                                                <span className="font-black">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                                <span> {detail}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default PricingPage;
