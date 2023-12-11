import React from "react";

const IndicatorActions = ({ data }: { data: any }) => {
    const profit = data["cash"] - 1000.0;
    const profitPercentage = (profit / 1000.0) * 100.0;

    return (
        <div className="w-full h-full flex flex-col justify-center items-center px-4 my-12">
            <p className="text-center">
                <span
                    className={
                        "text-4xl md:text-5xl lg:text-6xl font-black " +
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
                <span className="text-neutral-content font-black">$1000</span> to{" "}
                <span className="text-neutral-content font-black">
                    ${data.cash.toFixed(2)}
                </span>{" "}
                with{" "}
                <span className="text-neutral-content font-black">
                    {data.actions.length}
                </span>{" "}
                transactions between{" "}
                <span className="text-neutral-content font-black italic">
                    {data.start}
                </span>{" "}
                and{" "}
                <span className="text-neutral-content font-black italic">
                    {data.end}
                </span>
                .
            </p>
        </div>
    );
};

export default IndicatorActions;
