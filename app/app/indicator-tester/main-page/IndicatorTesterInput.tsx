import React, { FormEventHandler } from "react";

const IndicatorTesterInput: React.FC<{
    data: {
        handleSubmit: FormEventHandler<HTMLFormElement>;
        isLoading: boolean;
    };
}> = ({ data: { handleSubmit, isLoading } }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Indicator Tester
            </h1>
            <div className="h-12"></div>
            <div className="w-full flex justify-between">
                <div className="flex flex-col justify-between">
                    <select
                        name="exchange"
                        defaultValue="Exchange"
                        className="select shadow-2xl mb-12 border-neutral-content font-bold"
                    >
                        <option value="Exchange" disabled>
                            Choose Exchange
                        </option>
                        <option value="Nasdaq">Nasdaq</option>
                        <option value="Crypto">Crypto</option>
                    </select>
                    <input
                        name="symbol"
                        type="text"
                        placeholder="Symbol: BTC, AAPL, ..."
                        className="input input-ghost shadow-2xl mb-12 border-neutral-content"
                    />
                    <input
                        name="startDate"
                        type="text"
                        placeholder="Start Date: 2023-09-21"
                        className="input input-ghost w-full shadow-2xl mb-12 border-neutral-content"
                    />
                    <input
                        name="endDate"
                        type="text"
                        placeholder="End Date: 2023-11-30"
                        className="input input-ghost w-full shadow-2xl border-neutral-content"
                    />
                </div>
                <div className="w-12"></div>
                <div className="w-full">
                    <textarea
                        name="indicator"
                        placeholder="Indicator: sma(close, 10) < sma(open, 20)"
                        className="input input-ghost p-2 shadow-2xl h-full w-full border-neutral-content"
                    ></textarea>
                </div>
            </div>
            <div className="h-12"></div>
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
    );
};

export default IndicatorTesterInput;
