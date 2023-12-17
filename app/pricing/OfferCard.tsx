import React from "react";

export interface OfferData {
    name: string;
    details: string[];
    price: number;
}

const OfferCard = ({ name, details, price }: OfferData) => {
    return (
        <div className="bg-neutral shadow-2xl rounded-3xl p-6 flex flex-col space-y-4 justify-start">
            <h2 className="text-xl font-black text-red-500">{name}</h2>
            <p className="text-4xl font-black text-green-400">
                <span className="text-lg align-text-top">$</span>
                <span> {price}</span>
                <span className="text-lg text-neutral-content font-normal">/ month</span>
            </p>
            <div></div>
            <button className="btn btn-outline">
                <span className="font-black">Coming Soon...</span>
            </button>
            <div></div>
            <div className="flex flex-col space-y-2 text-start">
                {details.map((detail, index) => (
                    <p key={index} className="flex space-x-2">
                        <span className="font-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <span> {detail}</span>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default OfferCard;
