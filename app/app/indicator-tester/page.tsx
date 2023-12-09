"use client";

import React, { useState } from "react";
import BottomNavigator, { NavigationProps } from "../BottomNavigator";
import MainPage from "./main-page";
import ResultPage from "./result-page";

const IndicatorTester = () => {
    const navigationProps: NavigationProps = {
        activeTab: 1,
    };
    const [isLoading, setIsLoading] = useState(false);
    const [testResult, setTestResult] = useState({});

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const { exchange, symbol, startDate, endDate, indicator } =
            event.target;
        try {
            setIsLoading(true);
            setTestResult({});
            const response = await fetch("http://127.0.0.1:3010/calculate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    exchange: exchange.value.toUpperCase(),
                    symbol: symbol.value.toUpperCase(),
                    indicator: indicator.value.toLowerCase(),
                    ...(startDate.value &&
                        endDate.value && { startDate: startDate.value }),
                    ...(startDate.value &&
                        endDate.value && { endDate: endDate.value }),
                }),
            });

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
            <div>
                <MainPage
                    data={{
                        isLoading: isLoading,
                        testResult: testResult,
                        handleSubmit: handleSubmit,
                    }}
                />
                {Object.keys(testResult).length === 0 || isLoading ? null : (
                    <ResultPage data={testResult} />
                )}
            </div>
            <BottomNavigator {...navigationProps} />
        </>
    );
};

export default IndicatorTester;
