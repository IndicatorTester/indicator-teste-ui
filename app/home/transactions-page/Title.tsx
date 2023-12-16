import React from "react";

const Title = () => {
    return (
        <div>
            <p className="lg:text-6xl md:text-5xl text-4xl font-black">
                Study all <span className="text-green-400">Buy</span> /{" "}
                <span className="text-red-500">Sell</span> transactions and
                optimize your indicator.
            </p>
            <div className="h-4"></div>
            <p className="text-gray-400 text-lg font-light md:text-2xl">
                Check all transactions which depend on historical data to know
                the quality of your indicator then{" "}
                <u className="text-neutral-content">optimize it</u>.
            </p>
        </div>
    );
};

export default Title;
