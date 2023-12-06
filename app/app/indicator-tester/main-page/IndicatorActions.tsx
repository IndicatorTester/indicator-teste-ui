import React from "react";

export interface IndicatorActionsData {
    cash: number;
    actions: [];
    startDate: string;
    endDate: string;
}

const IndicatorActions = ({
    cash,
    actions,
    startDate,
    endDate,
}: IndicatorActionsData) => {
    const profit = cash - 1000.0;
    const profitPercentage = (profit / 1000.0) * 100.0;

    return (
        <div className="w-full h-full flex flex-col justify-center items-center px-4">
            <p className="text-center">
                <span
                    className={
                        "text-4xl md:text-5xl lg:text-6xl font-bold " +
                        (profitPercentage < 0
                            ? "text-red-500"
                            : "text-green-400")
                    }
                >
                    {profitPercentage.toFixed(2)}%
                </span>
                <br />
                is your indicator profit.
            </p>
            <div className="h-4"></div>
            <p className="text-center text-xl font-light text-gray-400">
                Your indicator converted{" "}
                <span className="text-neutral-content font-bold">$1000</span> to{" "}
                <span className="text-neutral-content font-bold">
                    ${cash.toFixed(2)}
                </span>{" "}
                with{" "}
                <span className="text-neutral-content font-bold">
                    {actions.length}
                </span>{" "}
                transactions between{" "}
                <span className="text-neutral-content font-bold italic">
                    {startDate}
                </span>{" "}
                and{" "}
                <span className="text-neutral-content font-bold italic">
                    {endDate}
                </span>
                .
            </p>
            <div className="h-8"></div>
            <p className="text-md" >Scroll for more details</p>
            <div className="h-6"></div>
            <div className="inline-flex justify-center h-8 w-8">
                <div className="flex items-center justify-center animate-bounce">
                    <svg
                        className="animate-bounce w-8 h-8 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default IndicatorActions;
