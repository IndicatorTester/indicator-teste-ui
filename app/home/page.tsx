import React from "react";
import LandingPage from "./landing-page";
import ChartPage from "./chart-page";
import TransactionsPage from "./transactions-page";
import GlobalPage from "./global-page";
import PricingPage from "./pricing-page";

const HomePage = () => {
    return (
        <div className="grid grid-rows-expand grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1 h-screen">
                <LandingPage />
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1 h-screen">
                <ChartPage />
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1 h-screen">
                <TransactionsPage />
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1 h-screen">
                <GlobalPage />
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1 h-screen">
                <PricingPage />
            </div>
            <div className="col-span-2"></div>
        </div>
    );
};

export default HomePage;
