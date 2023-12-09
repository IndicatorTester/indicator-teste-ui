import React from "react";
import MainButton from "./MainButton";
import Title from './Title'
import BouncingArrow from "./BouncingArrow";

const LandingPage = () => {
    return (
        <>
            <div className="snap-center h-screen w-screen grid text-center justify-center">
                <div className="md:mx-10 mx-2 md:my-24 my-12">
                    <Title />
                    <div className="lg:h-10 h-32"></div>
                    <MainButton />
                    <div className="lg:h-24 md:16 h-10"></div>
                    <BouncingArrow />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
