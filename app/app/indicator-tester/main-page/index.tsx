import React from "react";
import IndicatorActions from "./IndicatorActions";
import IndicatorTesterInput from "./IndicatorTesterInput";

const MainPage = ({ data }: { data: any }) => {
    return (
        <div className="snap-none h-screen w-screen p-6 md:p-16 flex">
            <div className="flex flex-col w-1/2">
                <IndicatorTesterInput
                    data={{
                        isLoading: data.isLoading,
                        handleSubmit: data.handleSubmit,
                    }}
                />
            </div>
            <div className="flex flex-col w-1/2">
                {Object.keys(data.testResult).length === 0 || data.isLoading ? (
                    <div></div>
                ) : (
                    <IndicatorActions data={data.testResult} />
                )}
            </div>
        </div>
    );
};

export default MainPage;
