import React from "react";

export interface OfferData {
    name: string;
    details: string[];
    price: number;
}

const OfferCard = ({ name, details, price }: OfferData) => {
    return (
        <div className="shadow-2xl rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-bold my-4 text-red-500">{name}</h2>
            <div>
                {details.map((detail, index) => (
                    <p key={index}><span className="font-bold" >•</span> {detail}</p>
                ))}
            </div>
            <p className="text-3xl font-bold my-6 text-green-400">${price}</p>
            <button className="btn btn-outline">
                <span className="font-bold">Get Started</span>
            </button>
        </div>
    );
};

export default OfferCard;
