import React from "react";
import MainButton from "./MainButton";
import Title from "./Title";
import BouncingArrow from "./BouncingArrow";

const LandingPage = () => {
    return (
        <>
            <div className="h-screen w-screen snap-start flex flex-col justify-around items-center text-center px-4 lg:px-12">
                <Title />
                <MainButton />
                <BouncingArrow />
            </div>
        </>
    );
};

export default LandingPage;
