"use client";

import { generateClientHash } from "@/utils/backend";
import Link from "next/link";
import React, { useState } from "react";
import { AlertTriangle, Info, Send } from "react-feather";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [info, setInfo] = useState<string | null>(null);
    const [warning, setWarning] = useState<string | null>(null);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
        e: any
    ) => {
        e.preventDefault();

        setInfo(null);
        setWarning(null);
        setIsLoading(true);
        const [firstName, lastName, email, message, agree] = e.target;

        if (
            !firstName.value.length ||
            !lastName.value.length ||
            !email.value.length ||
            !message.value.length
        ) {
            setWarning("Warning: Kindly fill all fields");
            setIsLoading(false);
            return;
        } else if (!agree.checked) {
            setWarning("Warning: Kindly agree on our friendly privacy policy");
            setIsLoading(false);
            return;
        }

        const response = await fetch("/api/sendFeedback", {
            method: "POST",
            headers: {
                auth: generateClientHash(
                    firstName.value,
                    email.value,
                    lastName.value
                ),
            },
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                message: message.value,
            }),
        });
        setIsLoading(false);
        setInfo("Thank you, we appreciate your time");
    };

    return (
        <>
            <div className="col-span-1 md:col-span-2"></div>
            <div className="col-span-10 md:col-span-8 row-span-1 min-h-screen flex justify-center">
                <div className="w-full max-w-[720px] bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 h-fit">
                    {warning && (
                        <div className="w-full">
                            <div role="alert" className="alert alert-warning">
                                <AlertTriangle />
                                <span>{warning}</span>
                            </div>
                        </div>
                    )}
                    {info && (
                        <div className="w-full">
                            <div role="alert" className="alert alert-info">
                                <Info />
                                <span>{info}</span>
                            </div>
                        </div>
                    )}
                    <h1 className="text-5xl font-bold">Reach Out to Us</h1>
                    <div>
                        <p className="text-gray-400">
                            Have questions or feedback? We are here to help.
                            Send us a message, or an email on{" "}
                            <span className="underline underline-offset-2 text-neutral-content">
                                support@xindicator.com
                            </span>
                            .
                        </p>
                    </div>
                    <div className="divider"></div>
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="w-full grid grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="input input-bordered md:col-span-1 col-span-2"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="input input-bordered md:col-span-1 col-span-2"
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered col-span-2"
                            />
                            <textarea
                                name="email"
                                placeholder="Leave us a message"
                                className="textarea textarea-bordered h-60 col-span-2"
                            ></textarea>
                            <div className="col-span-2 flex flex-row space-x-2">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    className="checkbox"
                                />
                                <p>
                                    I agree to our friendly{" "}
                                    <Link href={"/legal/privacy-policy"}>
                                        <span className="underline underline-offset-2">
                                            privacy policy
                                        </span>
                                        .
                                    </Link>
                                </p>
                            </div>
                            <div className="col-span-2 flex flx-row justify-center mt-6">
                                {isLoading ? (
                                    <span className="loading loading-ring loading-lg"></span>
                                ) : (
                                    <button
                                        type="submit"
                                        className="btn btn-circle btn-info"
                                    >
                                        <Send className="text-neutral" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-span-1 md:col-span-2"></div>
        </>
    );
};

export default Contact;
