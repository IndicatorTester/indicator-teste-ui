import React from "react";
import Image from "next/image";
import Title from "./Title";
import MainButton from "./MainButton";

const HomePage = () => {
    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1">
                <div className="pt-4 flex flex-col space-y-12 justify-start items-center text-center">
                    <Title />
                    <MainButton />
                    <div className="w-full mockup-window border border-gray-400 bg-base-200 shadow-2xl rounded-3xl">
                        <div className="flex justify-center bg-base-200 rounded-3xl">
                            <Image
                                src="/Application.png"
                                alt="Application Image"
                                width={3023}
                                height={1718}
                                style={{ width: "auto", height: "auto" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-12 h-48"></div>
        </>
    );
};

export default HomePage;
