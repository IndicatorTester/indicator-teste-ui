"use client";

import React, { useState } from "react";
import IndicatorDetails from "./IndicatorDetails";
import INDICATORS_DATA from "./indicators-data";

const Indicators = () => {
    const indicators = INDICATORS_DATA;

    const [selectedIndicator, setSelectedIndicator] = useState(null);

    const handleIndicatorChange = (e: any) => {
        const selectedValue = e.target.value;
        setSelectedIndicator(selectedValue);
    };

    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1 min-h-screen">
                <div className="flex flex-col justify-start items-center">
                    <h1 className="lg:text-6xl text-5xl font-black text-center">
                        Indicators
                    </h1>
                    <div className="h-8"></div>
                    <select
                        name="indicator"
                        defaultValue="Indicator"
                        onChange={handleIndicatorChange}
                        className="w-full select shadow-2xl border-neutral-content font-black"
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
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="h-12"></div>
                        {selectedIndicator ? (
                            <IndicatorDetails
                                data={indicators[selectedIndicator]}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default Indicators;
