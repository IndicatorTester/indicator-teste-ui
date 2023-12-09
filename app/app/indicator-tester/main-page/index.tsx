import React from "react";
import IndicatorActions from "./IndicatorActions";
import IndicatorTesterInput from "./IndicatorTesterInput";

const MainPage = ({ data }: { data: any }) => {
    return (
        <div className="p-6 md:p-16 flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-1/2">
                <IndicatorTesterInput
                    data={{
                        isLoading: data.isLoading,
                        handleSubmit: data.handleSubmit,
                    }}
                />
            </div>
            <div className="flex flex-col lg:w-1/2">
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
