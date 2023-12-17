import React from "react";
import MainButton from "./MainButton";
import Title from "./Title";

const LandingPage = () => {
    return (
        <div className="lg:pt-16 pt-4 flex flex-col space-y-12 justify-start items-center text-center">
            <Title />
            <MainButton />
        </div>
    );
};

export default LandingPage;
