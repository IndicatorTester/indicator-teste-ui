import React from "react";

export interface OfferData {
    name: string;
    details: string[];
    price: number;
}

const OfferCard = ({ name, details, price }: OfferData) => {
    return (
        <div className="shadow-2xl rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-black my-4 text-red-500">{name}</h2>
            <div>
                {details.map((detail, index) => (
                    <p key={index}><span className="font-black" >•</span> {detail}</p>
                ))}
            </div>
            <p className="text-3xl font-black my-6 text-green-400">${price}</p>
            <button className="btn btn-outline">
                <span className="font-black">Coming Soon...</span>
            </button>
        </div>
    );
};

export default OfferCard;
