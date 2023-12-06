"use client";

import React, { useState } from "react";
import IndicatorActions, { IndicatorActionsData } from "./IndicatorActions";
import IndicatorTesterInput from "./IndicatorTesterInput";

const MainPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [indicatorActionsData, setIndicatorActionsData] =
        useState<IndicatorActionsData>();

    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        const { exchange, symbol, startDate, endDate, indicator } =
            event.target;
        try {
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

            console.log(data);

            const newIndicatorActionsData: IndicatorActionsData = {
                cash: data["cash"],
                actions: data["actions"],
                startDate: data["start"],
                endDate: data["end"],
            };
            setIndicatorActionsData(newIndicatorActionsData);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    };

    return (
        <div className="snap-center h-screen w-screen p-6 md:p-16 flex">
            <div className="flex flex-col w-1/2">
                <IndicatorTesterInput
                    data={{
                        isLoading: isLoading,
                        handleSubmit: handleSubmit,
                    }}
                />
            </div>
            <div className="flex flex-col w-1/2">
                {indicatorActionsData && !isLoading ? (
                    <IndicatorActions {...indicatorActionsData} />
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default MainPage;
