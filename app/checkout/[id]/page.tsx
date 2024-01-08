"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import pricingData from "@/public/static/pricing.json";
import { ShoppingBag } from "react-feather";
import Link from "next/link";

const Checkout = ({ params }: { params: { id: number } }) => {
    const user = useUser();

    if (!user.user) {
        redirect("/api/auth/login");
    } else if (params.id < 0 || params.id > pricingData.length - 1) {
        redirect("/pricing");
    }

    const productData = pricingData[params.id];
    const amounts = [
        {
            value: 10,
            free: 0,
        },
        {
            value: 25,
            free: 4,
        },
        {
            value: 50,
            free: 8,
        },
        {
            value: 100,
            free: 16,
        },
    ];

    const [pickedAmount, setPickedAmount] = useState(3);

    return (
        <>
            <div className="col-span-1 md:col-span-2"></div>
            <div className="col-span-10 md:col-span-8 row-span-1 min-h-screen flex justify-center">
                <div className="w-full max-w-[720px] bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 h-fit">
                    <h1 className="text-5xl font-bold">Checkout</h1>
                    <div>
                        <p className="text-gray-400">
                            Here you can specify the products you want to buy
                            depending on your need.
                        </p>
                    </div>
                    <div className="divider"></div>
                    <div className="w-full flex flex-col space-y-16">
                        <h1 className="font-bold text-2xl text-center">
                            Buy {productData.title}s
                        </h1>
                        <div className="w-full grid grid-cols-2">
                            <div className="flex flex-col grid-cols-1 justify-center items-center space-y-2">
                                <h1 className="font-black text-6xl">
                                    {amounts[pickedAmount].value +
                                        amounts[pickedAmount].free}
                                </h1>
                                <p className="font-bold">Tests You Will Get</p>
                            </div>
                            <div className="flex flex-col grid-cols-1 justify-center items-center space-y-2">
                                <h1 className="font-black text-6xl text-green-400">
                                    $
                                    {amounts[pickedAmount].value *
                                        Number(productData.amount)}
                                </h1>
                                <p className="font-bold">Total Price</p>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-2">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                                {amounts.map((amount, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-row space-x-2 items-center"
                                    >
                                        <input
                                            type="radio"
                                            name="radio-7"
                                            className="radio radio-info"
                                            checked={pickedAmount === index}
                                            onClick={() =>
                                                setPickedAmount(index)
                                            }
                                        />
                                        <p className="font-black text-xl">
                                            {amount.value} Tests
                                            <span className="font-normal text-base">
                                                {" "}
                                                +
                                                <span className="text-green-400 font-black text-xl">
                                                    {" "}
                                                    {amount.free}
                                                </span>{" "}
                                                tests for free
                                            </span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="w-full flex justify-between items-center">
                        <div className="col-span-2 flex flex-row space-x-2">
                            <input
                                type="checkbox"
                                name="agree"
                                className="checkbox"
                            />
                            <p>
                                I agree to our friendly{" "}
                                <Link href={"/legal/terms-conditions"}>
                                    <span className="underline underline-offset-2">
                                        terms & conditions
                                    </span>
                                    .
                                </Link>
                            </p>
                        </div>
                        <button className="btn btn-circle btn-info">
                            <ShoppingBag className="text-neutral" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-2"></div>
        </>
    );
};

export default Checkout;
