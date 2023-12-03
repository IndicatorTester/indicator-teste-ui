import React from "react";
import "../globals.css";
import "tailwindcss/tailwind.css";
import LandingPage from "./landing-page";
import ChartPage from "./chart-page";
import TransactionsPage from "./transactions-page";
import NumbersPage from "./numbers-page";
import PricingPage from "./pricing-page";

const HomePage = () => {
    return (
        <>
            <div className="h-screen w-screen snap-y snap-mandatory scroll-smooth overflow-y-auto">
                <LandingPage />
                <ChartPage />
                <TransactionsPage />
                <NumbersPage />
                <PricingPage />
            </div>
        </>
    );
};

export default HomePage;
