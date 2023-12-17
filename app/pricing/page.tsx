import React from "react";
import OfferCard, { OfferData } from "./OfferCard";

const PricingPage = () => {
    const offers: OfferData[] = [
        {
            name: "Basic",
            details: ["5 tests per day", "US market stocks"],
            price: 29,
        },
        {
            name: "Standard",
            details: [
                "12 tests per day",
                "US market stocks",
                "Cryptocurrencies",
            ],
            price: 49,
        },
        {
            name: "Pro",
            details: [
                "30 tests per day",
                "US market stocks",
                "Cryptocurrencies",
                "All available symbols on your twelvedata plan",
            ],
            price: 99,
        },
    ];

    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1">
                <div className="flex flex-col space-y-16 justify-start items-center text-center">
                    <h1 className="lg:text-6xl text-5xl font-black">
                        Simple & Flexible
                        <br /> Pricing
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <OfferCard {...offers[0]} />
                        <OfferCard {...offers[1]} />
                        <OfferCard {...offers[2]} />
                    </div>
                    <div className="h-36"></div>
                </div>
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default PricingPage;
