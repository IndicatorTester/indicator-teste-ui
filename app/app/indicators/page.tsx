"use client";

import React, { useState } from "react";
import BottomNavigator, { NavigationProps } from "../BottomNavigator";
import IndicatorDetails from "./IndicatorDetails";
import INDICATORS_DATA from "./indicators-data";

const Indicators = () => {
    const navigationProps: NavigationProps = {
        activeTab: 4,
    };
    const indicators = INDICATORS_DATA;

    const [selectedIndicator, setSelectedIndicator] = useState(null);

    const handleIndicatorChange = (e: any) => {
        const selectedValue = e.target.value;
        setSelectedIndicator(selectedValue);
    };

    return (
        <>
            <div className="p-6 md:p-16 flex flex-col">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    Indicators
                </h1>
                <div className="h-12"></div>
                <div className="w-full flex flex-col justify-center items-center">
                    <select
                        name="indicator"
                        defaultValue="Indicator"
                        onChange={handleIndicatorChange}
                        className="w-96 select shadow-2xl border-neutral-content font-bold"
                    >
                        <option value="Indicator" disabled>
                            Choose Indicator
                        </option>
                        {indicators.map((indicator, index) => (
                            <option key={index} value={index}>
                                {indicator.name}
                            </option>
                        ))}
                    </select>
                    <div className="h-12"></div>
                    {selectedIndicator ? (
                        <IndicatorDetails
                            data={indicators[selectedIndicator]}
                        />
                    ) : null}
                </div>
            </div>
            <BottomNavigator {...navigationProps} />
        </>
    );
};

export default Indicators;
