import React from "react";

const Title = () => {
    return (
        <div className="flex flex-col justify-start lg:mt-48 lg:w-1/2">
            <p className="lg:text-6xl md:text-5xl text-4xl lg:text-start text-center font-black">
                Study all <span className="text-green-400">Buy</span> /{" "}
                <span className="text-red-500">Sell</span> transactions and
                optimize your indicator.
            </p>
            <div className="m-4"></div>
            <p className="text-gray-400 lg:text-start text-center text-lg font-light md:text-2xl">
                Check all transactions which depend on historical data to know
                the quality of your indicator then{" "}
                <u className="text-neutral-content">optimize it</u>.
            </p>
            <div className="h-8 lg:h-0" ></div>
        </div>
    );
};

export default Title;
