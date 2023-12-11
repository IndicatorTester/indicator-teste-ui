import React, { ReactNode } from "react";

const NumberCard = ({ children }: { children: ReactNode }) => {
    return (
        <div className="card shadow-2xl text-neutral-content p-4 items-center justify-center text-center lg:text-4xl md:text-3xl text-xl font-black lg:h-48 md:h-32 sm:h-24">
            {children}
        </div>
    );
};

export default NumberCard;
