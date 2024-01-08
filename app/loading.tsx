import React from "react";

const Loading = () => {
    return (
        <>
            <div className="col-span-1 md:col-span-2"></div>
            <div className="col-span-10 md:col-span-8 row-span-1">
                <div className="flex flex-col items-center justify-center">
                    <div className="h-32"></div>
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </div>
        </>
    );
};

export default Loading;
