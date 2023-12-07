"use client";

import React, { useState, useEffect } from "react";
import BottomNavigator, { NavigationProps } from "../BottomNavigator";
import SymbolsView from "./SymbolsView";

const Symbols = () => {
    const navigationProps: NavigationProps = {
        activeTab: 2,
    };

    const [symbolsData, setSymbolsData] = useState(null);
    const [selectedExchange, setSelectedExchange] = useState("CRYPTO");

    const fetchData = async () => {
        try {
            const response = await fetch("http://127.0.0.1:3010/symbols");
            const result = await response.json();
            setSymbolsData(result);

            const timestamp = new Date().getTime().toString();
            localStorage.setItem("symbolsData", JSON.stringify(result));
            localStorage.setItem("symbolsDataTimestamp", timestamp);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const storedSymbolsData = localStorage.getItem("symbolsData");
        const storedTimestamp = localStorage.getItem("symbolsDataTimestamp");

        if (
            storedSymbolsData &&
            storedTimestamp &&
            new Date().getTime() - parseInt(storedTimestamp, 10) <
                4 * 24 * 60 * 60 * 1000 // 4 Days
        ) {
            setSymbolsData(JSON.parse(storedSymbolsData));
        } else {
            fetchData();
        }
    }, []);

    const handleExchangeChange = (newExchange: any) => {
        setSelectedExchange(newExchange);
    };

    return (
        <>
            <div className="h-screen w-screen snap-y snap-mandatory overflow-y-auto p-6 md:p-16 flex flex-col">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    Symbols
                </h1>
                {symbolsData ? (
                    <>
                        <div className="h-12"></div>
                        <SymbolsView
                            data={{
                                symbolsData: symbolsData,
                                selectedExchange: selectedExchange,
                                handleExchangeChange: handleExchangeChange,
                            }}
                        />
                    </>
                ) : (
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <span className="loading loading-ring loading-lg"></span>
                        <div className="h-24"></div>
                    </div>
                )}
            </div>
            <BottomNavigator {...navigationProps} />
        </>
    );
};

export default Symbols;
