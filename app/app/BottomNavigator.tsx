"use client";

import Link from "next/link";
import React, { useState } from "react";

export interface NavigationProps {
    activeTab: number;
}

const BottomNavigator = ({ activeTab }: NavigationProps) => {
    const [hoveredTab, setHoveredTab] = useState(0);

    const handleHover = (index) => {
        setHoveredTab(index);
    };

    const tabs = [
        {
            name: "",
            navigator: "/",
        },
        {
            name: "Indicator Tester",
            navigate: "/app/indicator-tester",
        },
        {
            name: "Symbols",
            navigate: "/app/symbols",
        },
        {
            name: "Indicators",
            navigate: "/app/indicators",
        },
        {
            name: "Documentation",
            navigate: "/app/documentation",
        },
        {
            name: "Support",
            navigate: "/app/support",
        },
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full mb-10 flex flex-col justify-center items-center">
            <div>
                <p className="text-lg font-bold">{tabs[hoveredTab].name}</p>
            </div>
            <div className="w-full flex justify-center items-center">
                {tabs.map((tab, index) => {
                    if (index === 0) {
                        return null;
                    } else if (index === activeTab) {
                        return (
                            <div
                                key={index}
                                className="h-4 w-4 m-6 rounded-full bg-green-400"
                            ></div>
                        );
                    } else {
                        return (
                            <div
                                key={index}
                                className="h-4 w-4 m-6 rounded-full bg-neutral-content hover:bg-red-500 hover:h-6 hover:w-6 hover:m-5 transition duration-300 animate-spin"
                                onMouseEnter={(e) => handleHover(index)}
                                onMouseLeave={() => handleHover(0)}
                            >
                                <Link href={tabs[hoveredTab].navigate ?? "/"}>
                                    <div className="w-full h-full"></div>
                                </Link>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default BottomNavigator;
