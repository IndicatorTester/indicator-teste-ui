import React from "react";

const AboutUs = () => {
    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1 min-h-screen flex flex-col justify-start items-center space-y-8">
                <h1 className="text-5xl font-bold">In Progress...</h1>
                <div>
                    <span className="loading loading-infinity loading-lg text-green-400"></span>
                </div>
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default AboutUs;