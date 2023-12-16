import React from "react";
import LandingPage from "./landing-page";
import ChartPage from "./chart-page";
import TransactionsPage from "./transactions-page";
import GlobalPage from "./global-page";
import PricingPage from "./pricing-page";

const HomePage = () => {
    const screens = [<LandingPage />, <ChartPage />, <TransactionsPage />, <GlobalPage />, <PricingPage />];

    return (
        <div className="grid grid-rows-expand grid-cols-12">
            {screens.map((screen, index) => (
                <React.Fragment key={index}>
                    <div className="col-span-2"></div>
                    <div className="col-span-8 row-span-1 h-screen">
                        {screen}
                    </div>
                    <div className="col-span-2"></div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default HomePage;
