"use client";

import React, { useState } from "react";
import BottomNavigator, { NavigationProps } from "../BottomNavigator";

const ExchangeIndicatorTester = () => {
    const navigationProps: NavigationProps = {
        activeTab: 2,
    };

    const [isLoading, setIsLoading] = useState(false);
    const [testResult, setTestResult] = useState([]);

    const calculateChangePercentage = (newValue: number, oldValue: number) => {
        return (((newValue - oldValue) / oldValue) * 100.0).toFixed(2);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const { exchange, startDate, endDate, indicator } = event.target;
        try {
            setIsLoading(true);
            setTestResult([]);
            const response = await fetch(
                "http://127.0.0.1:3010/calculateExchange",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        exchange: exchange.value.toUpperCase(),
                        indicator: indicator.value.toLowerCase(),
                        ...(startDate.value &&
                            endDate.value && { startDate: startDate.value }),
                        ...(startDate.value &&
                            endDate.value && { endDate: endDate.value }),
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("An error occurred while making the request.");
            }

            const data = await response.json();
            setTestResult(data);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    };

    return (
        <>
            <div className="p-6 md:p-16 flex flex-col">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                    Exchange Indicator Tester
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="h-12"></div>
                    <div className="w-full flex flex-col justify-between">
                        <div className="flex flex-col justify-between lg:flex-row lg:justify-between">
                            <select
                                name="exchange"
                                defaultValue="Exchange"
                                className="w-full select shadow-2xl border-neutral-content font-black"
                            >
                                <option value="Exchange" disabled>
                                    Choose Exchange
                                </option>
                                <option value="Nasdaq">Nasdaq</option>
                                <option value="Crypto">Crypto</option>
                            </select>
                            <div className="h-8 lg:w-8"></div>
                            <input
                                name="startDate"
                                type="text"
                                placeholder="Start Date: 2023-09-21"
                                className="w-full input input-ghost shadow-2xl border-neutral-content"
                            />
                            <div className="h-8 lg:w-8"></div>
                            <input
                                name="endDate"
                                type="text"
                                placeholder="End Date: 2023-11-30"
                                className="w-full input input-ghost shadow-2xl border-neutral-content"
                            />
                        </div>
                        <div className="h-8"></div>
                        <div>
                            <input
                                name="indicator"
                                type="text"
                                placeholder="Indicator: sma(close, 10) < sma(open, 20)"
                                className="input input-ghost w-full shadow-2xl border-neutral-content"
                            />
                        </div>
                    </div>
                    <div className="h-8"></div>
                    {isLoading ? (
                        <div className="w-full flex justify-center">
                            <span className="loading loading-ring loading-lg"></span>
                        </div>
                    ) : (
                        <button
                            type="submit"
                            className="btn btn-active w-full bg-gradient-to-r from-pink-700 to-red-500"
                        >
                            Run Indicator
                        </button>
                    )}
                </form>
                <div className="h-12" ></div>
                {testResult.length !== 0 ? (
                    <table className="table text-center">
                        <thead className="text-xl font-black text-neutral-content">
                            <tr>
                                <th>#</th>
                                <th>Symbol</th>
                                <th>Profit</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl">
                            {testResult.map(
                                (symbolData: any, index: number) => (
                                    <tr key={index}>
                                        <th className="font-black">
                                            {index + 1}
                                        </th>
                                        <td>{symbolData.symbol}</td>
                                        <td className="font-black">
                                            %
                                            {calculateChangePercentage(
                                                symbolData.cash.toFixed(2),
                                                1000.0
                                            )}
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                ) : null}
            </div>
            <BottomNavigator {...navigationProps} />
        </>
    );
};

export default ExchangeIndicatorTester;
