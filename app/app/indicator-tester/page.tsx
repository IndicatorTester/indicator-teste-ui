import React from "react";
import BottomNavigator, { NavigationProps } from "../BottomNavigator";
import MainPage from "./main-page";

const IndicatorTester = () => {
    const navigationProps: NavigationProps = {
        activeTab: 1,
    };
    return (
        <>
            <div className="h-screen w-screen snap-y snap-mandatory overflow-y-auto">
                <MainPage />
            </div>
            <BottomNavigator {...navigationProps} />
        </>
    );
};

export default IndicatorTester;
