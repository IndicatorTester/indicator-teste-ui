import React from "react";
import StockChart from "./StockChart";

const ChartPage = () => {
    return (
        <div className="snap-center h-screen w-screen grid gap-4 lg:grid-cols-2 grid-rows-2 justify-center items-center px-16 py-16">
            <div className="flex flex-col justify-start lg:mt-64">
                <p className="lg:text-6xl md:text-5xl text-4xl lg:text-start text-center font-bold">
                    Back test your signal trading indicator and check the
                    profit.
                </p>
                <div className="m-4"></div>
                <p className="text-gray-400 lg:text-start text-center text-lg font-light md:text-2xl">
                    Calculate the quality of your indicator by back testing it on the historical data for a <u>stock or crypto</u>.
                </p>
            </div>
            <div className="flex flex-col items-center lg:justify-end justify-center lg:mt-64">
                <StockChart />
                <div className="mt-8">
                    <p className="text-green-400 font-semibold lg:text-6xl md:text-5xl text-4xl" >+9,999.99%</p>
                </div>
            </div>
        </div>
    );
};

export default ChartPage;
