import React from "react";
import "../globals.css";
import "tailwindcss/tailwind.css";
import LandingPage from "./landing-page";
import ChartPage from "./chart-page";
import TransactionsPage from "./transactions-page";

const HomePage = () => {
    return (
        <>
            <div className="h-screen w-screen snap-y snap-mandatory scroll-smooth overflow-y-auto">
                <LandingPage />
                <ChartPage />
                <TransactionsPage />
            </div>
        </>
    );
};

export default HomePage;
