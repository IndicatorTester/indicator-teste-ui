import React from "react";
import Title from "./Title";
import Image from "next/image";

const ChartPage = () => {
    return (
        <div className="flex flex-col space-y-12 justify-start items-center text-center">
            <Title />
            <Image
                src="/Candlestick.png"
                alt="Candlestick Image"
                width={2560*0.15}
                height={1440*0.15}
                style={{ width: 'auto', height: 'auto' }}
            />
        </div>
    );
};

export default ChartPage;
