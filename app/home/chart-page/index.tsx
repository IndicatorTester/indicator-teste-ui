import React from "react";
import StockChart from "./StockChart";

const ChartPage = () => {
    return (
        <div className="snap-center h-screen w-screen grid lg:grid-cols-2 grid-rows-2 lg:p-16 p-10 lg:pt-48">
            <div className="flex flex-col">
                <p className="lg:text-6xl md:text-5xl text-4xl lg:text-start text-center font-bold md:pt-12">
                    Back test your signal trading indicator and check the
                    profit.
                </p>
                <div className="m-4"></div>
                <p className="text-gray-400 lg:text-start text-center text-lg font-light md:text-2xl">
                    Calculate the quality of your indicator by back testing it
                    on the historical data for a <u>stock or crypto</u>.
                </p>
            </div>
            <div className="md:h-full md:w-full flex flex-col items-center justify-center">
                <div className="md:h-full md:w-full flex justify-center items-center" >
                    <StockChart />
                </div>
                <div className="pt-12">
                    <p className="text-green-400 font-semibold lg:text-6xl md:text-5xl text-4xl">
                        +9,999.99%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChartPage;
