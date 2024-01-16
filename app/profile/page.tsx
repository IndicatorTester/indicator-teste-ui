"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import { useState, useEffect } from "react";
import { API_KEY_LOCAL_STORAGE_KEY } from "../constants/constants";
import { redirect } from "next/navigation";
import { generateClientHash } from "../../utils/backend";
import Link from "next/link";
import { AlertTriangle, Info, LogOut, XOctagon } from "react-feather";
import { scrollToTop } from "@/utils/view";

const Profile = () => {
    const user = useUser();

    if (!user.user) {
        redirect("/api/auth/login");
    }

    const [userData, setUserData] = useState<any>(null);
    const [apiKey, setApiKey] = useState<string | null>("PLACEHOLDER");
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isFetchingData, setIsFetchingData] = useState(true);
    const [isUpdatingApiKey, setIsUpdatingApiKey] = useState(false);

    useEffect(() => {
        const fetchUserData = async (userId: string) => {
            setIsFetchingData(true);
            const response = await fetch("/api/getUser", {
                method: "POST",
                headers: {
                    auth: generateClientHash(userId, userId, userId),
                },
                body: JSON.stringify({
                    userId: userId,
                }),
            });

            if (!response.ok) {
                setError("Something went wrong, kindly try again later!");
                return;
            }

            const data = await response.json();
            setUserData(data);
            setApiKey(
                localStorage.getItem(
                    API_KEY_LOCAL_STORAGE_KEY + user.user?.sub ?? ""
                )
            );
            setIsFetchingData(false);
        };

        fetchUserData(user.user?.sub ?? "");
    }, []);

    const updateUserData = async (userId: string) => {
        const response = await fetch("/api/updateUser", {
            method: "POST",
            headers: {
                auth: generateClientHash(userId, userId, userId),
            },
            body: JSON.stringify({
                userId: userId,
                userData: {
                    verified: "done",
                    ...(userData.verified == null ? { bronzeTest: "50" } : {}),
                },
            }),
        });

        if (!response.ok) {
            setError("Something went wrong, kindly try again later!");
            return false;
        }
        return true;
    };

    const saveApiKey: React.FormEventHandler<HTMLFormElement> = async (
        event: any
    ) => {
        event.preventDefault();

        if (!user.user?.email_verified) {
            setError(
                "Kindly verify your email to be able to use this operation."
            );
            return;
        }

        setError(null);
        setMessage(null);
        setIsUpdatingApiKey(true);
        const newApiKey = event.target.apiKey.value;
        const userUpdated = await updateUserData(user.user?.sub ?? "");

        if (!userUpdated) {
            setIsUpdatingApiKey(false);
            return;
        }

        localStorage.setItem(
            API_KEY_LOCAL_STORAGE_KEY + user.user?.sub ?? "",
            newApiKey
        );
        setApiKey(newApiKey);
        if (newApiKey.length !== 0) {
            setMessage("Info: Stored new api key!");
        }
        setIsUpdatingApiKey(false);
        scrollToTop(document);
    };

    return (
        <>
            <div className="col-span-1 md:col-span-2"></div>
            <div className="w-full col-span-10 md:col-span-8 row-span-1 flex flex-col justify-start items-center space-y-8">
                <div className="w-full max-w-[720px] flex flex-col space-y-2">
                    {error && (
                        <div className="w-full">
                            <div role="alert" className="alert alert-error">
                                <XOctagon />
                                <span>Error: {error}</span>
                            </div>
                        </div>
                    )}
                    {!user.user?.email_verified && (
                        <div className="w-full">
                            <div role="alert" className="alert alert-warning">
                                <AlertTriangle />
                                <span>
                                    Warning: Verify your email to be able to use
                                    your tests. (if you already verified your
                                    email, try to logout then login again)
                                </span>
                            </div>
                        </div>
                    )}
                    {!apiKey && (user.user?.email_verified ?? true) && (
                        <div className="w-full">
                            <div role="alert" className="alert alert-warning">
                                <AlertTriangle />
                                <span>
                                    Warning: Add your Twelvedata api key to get
                                    50 Bronze tests. (for one time only)
                                </span>
                            </div>
                        </div>
                    )}
                    {message && (
                        <div className="w-full">
                            <div role="alert" className="alert alert-info">
                                <Info />
                                <span>{message}</span>
                            </div>
                        </div>
                    )}
                </div>
                {!isFetchingData && (
                    <div className="w-full max-w-[720px] bg-base-200 p-8 rounded-3xl flex flex-col space-y-8">
                        <div className="w-full text-center overflow-auto">
                            <span className="text-4xl md:text-5xl lg:text-6xl font-black">
                                {user.user?.email?.split("@")[0]}
                            </span>
                            <br />
                            <span className="text-base md:text-lg lg:text-xl">
                                @{user.user?.email?.split("@")[1]}
                            </span>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-gray-400">
                                Id: {userData.userId.split("|")[1]}
                            </p>
                        </div>
                        <div className="divider"></div>
                        <div className="grid grid-cols-4">
                            <div className="lg:col-span-1 sm:col-span-2 col-span-4 p-4 flex flex-col justify-center items-center space-y-2">
                                <h1 className="font-black text-5xl">
                                    {userData.bronzeTest ?? "0"}
                                </h1>
                                <h2 className="font-bold">Bronze Tests</h2>
                            </div>
                            <div className="lg:col-span-1 sm:col-span-2 col-span-4 p-4 flex flex-col justify-center items-center space-y-2">
                                <h1 className="font-black text-5xl">
                                    {userData.silverTest ?? "0"}
                                </h1>
                                <h2 className="font-bold">Silver Tests</h2>
                            </div>
                            <div className="lg:col-span-1 sm:col-span-2 col-span-4 p-4 flex flex-col justify-center items-center space-y-2">
                                <h1 className="font-black text-5xl">
                                    {userData.goldTest ?? "0"}
                                </h1>
                                <h2 className="font-bold">Gold Tests</h2>
                            </div>
                            <div className="lg:col-span-1 sm:col-span-2 col-span-4 p-4 flex flex-col justify-center items-center space-y-2">
                                <h1 className="font-black text-5xl">
                                    {userData.diamondTest ?? "0"}
                                </h1>
                                <h2 className="font-bold">Diamond Tests</h2>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="flex flex-col space-y-2">
                            <form
                                onSubmit={saveApiKey}
                                className="flex justify-start items-center space-x-2"
                            >
                                <input
                                    type="text"
                                    name="apiKey"
                                    placeholder={"Your api key"}
                                    defaultValue={apiKey ?? ""}
                                    className="input input-bordered w-full"
                                />
                                {isUpdatingApiKey ? (
                                    <span className="loading loading-ring loading-lg"></span>
                                ) : (
                                    <button
                                        type="submit"
                                        className="btn btn-ghost"
                                    >
                                        Update
                                    </button>
                                )}
                            </form>
                            <p className="text-gray-400 text-sm">
                                Get your{" "}
                                <span className="font-bold text-neutral-content">
                                    FREE
                                </span>{" "}
                                api key from:{" "}
                                <Link
                                    href={"https://twelvedata.com/pricing"}
                                    className="text-neutral-content underline underline-offset-2"
                                >
                                    https://twelvedata.com/pricing
                                </Link>
                            </p>
                            <p className="text-gray-400 text-sm">
                                * You will need to update the key for each new browser you use.
                            </p>
                        </div>
                        <div className="divider"></div>
                        <div className="w-full flex justify-center items-center">
                            <a
                                href="/api/auth/logout"
                                className="btn btn-circle"
                            >
                                <LogOut />
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <div className="col-span-1 md:col-span-2"></div>
        </>
    );
};

export default Profile;
