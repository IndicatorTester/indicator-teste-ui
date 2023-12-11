"use client";

import React from "react";

const MainButton = () => {
    // const { user, error, isLoading } = useUser();

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
            <button className="btn btn-active bg-gradient-to-r from-pink-700 to-red-500 w-64 h-16 text-lg">
                Coming Soon...
            </button>
        </div>
    );
};

export default MainButton;
