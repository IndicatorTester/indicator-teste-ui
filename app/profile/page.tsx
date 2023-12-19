"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import ProfileAlert from "./ProfileAlerts";
import { useState, useEffect } from "react";
import { API_KEY_LOCAL_STORAGE_KEY } from "../constants/constants";
import Accordions from "./accordions";

const Profile = () => {
    const user = useUser();
    const [apiKey, setApiKey] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        const storedValue = localStorage.getItem(API_KEY_LOCAL_STORAGE_KEY);
        setApiKey(storedValue);
    }, []);

    const resetApiKey: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        setApiKey(apiKey);
    };

    const saveApiKey: React.FormEventHandler<HTMLFormElement> = (
        event: any
    ) => {
        event.preventDefault();
        const newApiKey = event.target.apiKey.value;
        localStorage.setItem(API_KEY_LOCAL_STORAGE_KEY, newApiKey);
        setApiKey(newApiKey);
        setMessage("Info: Stored new api key!");
    };

    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1">
                <div className="w-full flex flex-col space-y-16">
                    <ProfileAlert user={user} apiKey={apiKey} infoMessage={message} />
                    <div className="w-full text-center overflow-auto">
                        <span className="text-5xl md:text-6xl lg:text-7xl font-black">
                            {user.user?.email?.split("@")[0]}
                        </span>
                        <br />
                        <span className="text-base md:text-lg lg:text-xl">
                            @{user.user?.email?.split("@")[1]}
                        </span>
                    </div>
                    <Accordions
                        apiKey={apiKey}
                        resetApiKey={resetApiKey}
                        saveApiKey={saveApiKey}
                    />
                </div>
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default Profile;
