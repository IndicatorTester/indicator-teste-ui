"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const MainButton = () => {
    const { user, error, isLoading } = useUser();

    return (
        <div>
            {/* {error ? (
                <p>Something went wrong, check again later...</p>
            ) : isLoading ? (
                <span className="loading loading-ring loading-lg mx-8 my-4"></span>
            ) : user ? (
                <Link href="/app">
                    <button className="btn btn-active bg-gradient-to-r from-pink-700 to-red-500 mx-8 my-4 w-64 h-16 text-lg">
                        Start Testing
                    </button>
                </Link>
            ) : (
                <Link href="/api/auth/login">
                    <button className="btn btn-active bg-gradient-to-r from-pink-700 to-red-500 mx-8 my-4 w-64 h-16 text-lg">
                        Login
                    </button>
                </Link>
            )} */}
            <button className="btn btn-active bg-gradient-to-r from-pink-700 to-red-500 md:mx-8 md:my-4 mx-4 my-2 md:w-64 md:h-16 w-48 h-12 md:text-lg text-md">
                Coming Soon...
            </button>
        </div>
    );
};

export default MainButton;
