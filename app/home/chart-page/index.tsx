import React from "react";
import StockChart from "./StockChart";
import Title from "./Title";

const ChartPage = () => {
    return (
        <div className="h-screen w-screen snap-start flex md:flex-row flex-col md:justify-between justify-around items-center px-4 lg:px-12">
            <Title />
            <StockChart />
        </div>
    );
};

export default ChartPage;
