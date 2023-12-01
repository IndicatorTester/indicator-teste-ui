"use client";

import React from "react";
import { useState } from "react";

const TestPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [note, setNoteValue] = useState("Valid Indicator");

    const handleInputChange = (event: { target: { value: any } }) => {
        const regex = /^[a-z0-9,()+\-*/|&<>=. ]*$/;
        const newValue: string = event.target.value;

        if (regex.test(newValue)) {
            setInputValue(newValue);
            setNoteValue("Valid Indicator");
        } else {
            setNoteValue("Invalid input: " + newValue[newValue.length - 1]);
        }
    };

    return (
        <>
            <div className="flex flex-col m-10">
            <div className="w-full text-6xl font-normal" >
                <p><b>Indicator Test</b></p>
            </div>
            <div className="my-4" ></div>
                <div className="w-full" >
                    <p className="text-gray-400" >This tool runs a given custom trading <b>signal</b> indicator on a specific symbol.
                    The calculation will start with <b>1000$</b> and will calculate the indicator to get sell/buy
                    signals depending on the entered indicator starting from and ending with the given dates.</p>
                </div>
                <div className="divider"></div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 justify-between">
                    <input
                        type="text"
                        placeholder="Symbol"
                        className="input input-bordered w-full max-w-xs resize-none bg-base-300 border-0 outline-none lg:col-span-1 md:col-span-3"
                        style={{ borderRadius: "12px" }}
                    />
                    <input
                        type="text"
                        placeholder="Start Date: YYYY-MM-DD"
                        className="input input-bordered w-full max-w-xs resize-none bg-base-300 border-0 outline-none lg:col-span-1 md:col-span-3"
                        style={{ borderRadius: "12px" }}
                    />
                    <input
                        type="text"
                        placeholder="End Date: YYYY-MM-DD"
                        className="input input-bordered w-full max-w-xs resize-none bg-base-300 border-0 outline-none lg:col-span-1 md:col-span-3"
                        style={{ borderRadius: "12px" }}
                    />
                </div>
                <div className="divider"></div>
                <textarea
                    className="w-full h-64 p-4 resize-none bg-base-300 border-0 outline-none"
                    style={{ borderRadius: "24px" }}
                    placeholder="Your Signal Indicator..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <div className="divider"></div>
                <button className="btn btn-active bg-gradient-to-r from-pink-700 to-red-500">
                    Start Test
                </button>
                <div className="divider"></div>
                <textarea
                    className="w-full h-64 p-4 resize-none bg-base-300 border-0 outline-none"
                    style={{ borderRadius: "24px" }}
                    placeholder="Your Signal Indicator..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <div className="divider"></div>
                <div className="divider"></div>
                <textarea
                    className="w-full h-64 p-4 resize-none bg-base-300 border-0 outline-none"
                    style={{ borderRadius: "24px" }}
                    placeholder="Your Signal Indicator..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <div className="divider"></div>
                <div className="divider"></div>
                <textarea
                    className="w-full h-64 p-4 resize-none bg-base-300 border-0 outline-none"
                    style={{ borderRadius: "24px" }}
                    placeholder="Your Signal Indicator..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <div className="divider"></div>
            </div>
        </>
    );
};

export default TestPage;
