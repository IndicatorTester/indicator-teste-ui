import React from "react";
import OfferCard, { OfferData } from "./OfferCard";

const PricingPage = () => {
    const offers: OfferData[] = [
        {
            name: "Basic",
            details: ["15 tests", "All Supported Nasdaq Stocks"],
            price: 10,
        },
        {
            name: "Standard",
            details: ["70 tests", "All Supported Nasdaq & Crypto"],
            price: 50,
        },
        {
            name: "Pro",
            details: ["150 tests", "All Supported Nasdaq & Crypto"],
            price: 100,
        },
    ];

    return (
        <div className="snap-start h-screen w-screen flex flex-col justify-center items-center px-4 lg:px-12">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-black text-center">
                Simple & Flexible
                <br /> Pricing
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <OfferCard {...offers[0]} />
                <OfferCard {...offers[1]} />
                <OfferCard {...offers[2]} />
            </div>
            <div className="h-36"></div>
        </div>
    );
};

export default PricingPage;
