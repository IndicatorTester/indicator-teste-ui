import React from "react";

const Title = () => {
    return (
        <div>
            <p className="lg:text-6xl md:text-5xl text-4xl lg:text-start text-center font-black md:pt-12">
                Back test your signal trading indicator and check the profit.
            </p>
            <div className="h-4"></div>
            <p className="text-gray-400 lg:text-start text-center text-lg font-light md:text-2xl">
                Calculate the quality of your indicator by back testing it on
                the historical data for a{" "}
                <u className="text-neutral-content">stock or crypto</u>.
            </p>
            <div className="lg:h-48" ></div>
        </div>
    );
};

export default Title;
