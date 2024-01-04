"use client";

import React, { useState } from "react";
import pricingData from "@/public/static/pricing.json";

const PricingPage = () => {
    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1 min-h-screen flex justify-center">
                <div className="max-w-[720px] flex flex-col space-y-4 justify-start">
                    <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 justify-start">
                        <h1 className="text-5xl font-bold">Pricing</h1>
                        <div>
                            <p className="text-gray-400">
                                Simple & Flexible pricing system. Pay as you
                                want to use, depending on your trading style.
                            </p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-6 justify-start">
                        <h1 className="text-3xl font-bold">
                            Before You Start:
                        </h1>
                        <div className="flex flex-col space-y-2 text-gray-400">
                            <p>
                                <span className="font-black text-neutral-content">
                                    •{" "}
                                </span>
                                Make sure to only buy as you need, currently
                                refund is NOT supported.
                            </p>
                            <p>
                                <span className="font-black text-neutral-content">
                                    •{" "}
                                </span>
                                You can have more than one type of tests.
                            </p>
                            <p>
                                <span className="font-black text-neutral-content">
                                    •{" "}
                                </span>
                                If you have more than one test type which is
                                eligible for the test you run, then the cheapest
                                test type will be used.
                            </p>
                        </div>
                    </div>
                    <div></div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pricingData.map((price, index) => (
                            <div
                                key={index}
                                className="w-full bg-base-200 p-4 rounded-3xl flex flex-col space-y-8"
                            >
                                <div className="col-span-4 flex flex-col space-y-2">
                                    <h1 className="text-xl font-bold col-span-4 text-center">
                                        {price.title}
                                    </h1>
                                    <h2 className="text-3xl font-black text-green-400 col-span-2 text-center">
                                        <span className="text-lg">$</span>
                                        {price.amount}
                                    </h2>
                                </div>
                                <button className="col-span-4 btn btn-outline">
                                    {price.action}
                                </button>
                                <div className="col-span-4 flex flex-col space-y-2">
                                    {price.details.map((detail, index) => (
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
                                            <span>{detail}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default PricingPage;
