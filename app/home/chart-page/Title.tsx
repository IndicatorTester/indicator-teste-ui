import React from "react";

const Title = () => {
    return (
        <div>
            <p className="lg:text-6xl md:text-5xl text-4xl font-black">
                Back test your signal trading indicator and check the profit.
            </p>
            <div className="h-4"></div>
            <p className="text-gray-400 text-lg font-light md:text-2xl">
                Calculate the quality of your indicator by back testing it on
                the historical data for a{" "}
                <u className="text-neutral-content">index, stock, or crypto</u>.
            </p>
        </div>
    );
};

export default Title;
