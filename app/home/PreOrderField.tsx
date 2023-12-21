"use client";

import React, { useState } from "react";
import validator from "validator";
import { Check, XOctagon } from "react-feather";

const PreOrderField = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isEmailAdded, setIsEmailAdded] = useState(false);
    const [apiMessage, setApiMessage] = useState<string | null>(null);

    const addToWaitList: React.FormEventHandler<HTMLFormElement> = async (
        event: any
    ) => {
        setIsLoading(true);
        event.preventDefault();
        const email = event.target.email.value;

        const response = await fetch("/api/preOrder", {
            method: "POST",
            body: JSON.stringify({
                email: email,
            }),
        });

        if (!response.ok) {
            const data = await response.json();
            setApiMessage(data.error);
        }

        setIsEmailAdded(true);
        setIsLoading(false);
    };

    const onEmailChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const email = event.target.value;
        setIsValidEmail(validator.isEmail(String(email)));
    };

    return (
        <form
            onSubmit={addToWaitList}
            className="w-full flex justify-center items-center space-x-2"
        >
            {isLoading ? (
                <span className="loading loading-ring loading-lg"></span>
            ) : apiMessage ? (
                <div role="alert" className="alert alert-error">
                    <XOctagon />
                    <span>Error! {apiMessage}</span>
                </div>
            ) : (
                <>
                    <input
                        type="text"
                        name="email"
                        onChange={onEmailChange}
                        placeholder="Add your email to wait list..."
                        className="w-full h-[52px] input input-bordered border-neutral-content text-lg"
                    />
                    <button
                        type="submit"
                        disabled={!isValidEmail || isEmailAdded}
                        className="h-[52px] btn btn-neutral"
                    >
                        {isEmailAdded ? <Check /> : "Notify Me"}
                    </button>
                </>
            )}
        </form>
    );
};

export default PreOrderField;
