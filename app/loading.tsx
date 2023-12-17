import React from "react";

const Loading = () => {
    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1">
                <div className="flex flex-col items-center justify-center">
                    <div className="h-60"></div>
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </div>
        </>
    );
};

export default Loading;
