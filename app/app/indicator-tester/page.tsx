import React from "react";
import BottomNavigator, { NavigationProps } from "../BottomNavigator";

const IndicatorTester = () => {
    const navigationProps: NavigationProps = {
        activeTab: 1,
    };

    return (
        <div>
            <BottomNavigator {...navigationProps} />
        </div>
    );
};

export default IndicatorTester;
