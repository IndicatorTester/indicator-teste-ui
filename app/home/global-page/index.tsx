import React from "react";
import Image from "next/image";

const GlobalPage = () => {
    return (
        <div className="flex flex-col space-y-24 justify-start items-center text-center">
            <div>
                <p className="lg:text-6xl md:text-5xl text-4xl font-black">
                    Global exchanges, Crypto, and Indexes are available.
                </p>
            </div>
            <div className="opacity-80">
                <Image
                    src="/DottedWorld.png"
                    alt="DottedWorld Image"
                    width={660 * 2}
                    height={320 * 2}
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
        </div>
    );
};

export default GlobalPage;
