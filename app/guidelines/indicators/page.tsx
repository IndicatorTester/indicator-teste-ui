"use client";

import React, { useState } from "react";
import IndicatorDetails from "./IndicatorDetails";
import indicatorsData from "@/app/constants/indicators.json";

const Indicators = () => {
    const [selectedIndicator, setSelectedIndicator] = useState(null);

    const handleIndicatorChange = (e: any) => {
        const selectedValue = e.target.value;
        setSelectedIndicator(selectedValue);
    };

    return (
        <>
            <div className="col-span-1 md:col-span-2"></div>
            <div className="col-span-10 md:col-span-8 row-span-1 min-h-screen">
                <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 h-fit">
                    <h1 className="text-5xl font-bold">Indicators</h1>
                    <div>
                        <p className="text-gray-400">
                            Here you can check all available already implemented
                            indicators with all details for each indicator.
                        </p>
                    </div>
                    <div className="divider"></div>
                    <select
                        name="indicator"
                        defaultValue="Indicator"
                        onChange={handleIndicatorChange}
                        className="w-full select shadow-2xl border-neutral-content font-black"
                    >
                        <option value="Indicator" disabled>
                            Choose Indicator
                        </option>
                        {indicatorsData.map((indicator, index) => (
                            <option key={index} value={index}>
                                {indicator.name}
                            </option>
                        ))}
                    </select>
                    <div className="w-full flex flex-col justify-center items-center">
                        {selectedIndicator ? (
                            <IndicatorDetails
                                data={indicatorsData[selectedIndicator]}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-2"></div>
        </>
    );
};

export default Indicators;
