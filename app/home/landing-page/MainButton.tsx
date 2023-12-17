"use client";

import Link from "next/link";
import React from "react";

const MainButton = () => {
    return (
        <div>
            <Link href="/app">
                <button className="btn btn-active bg-gradient-to-r from-pink-700 to-red-500 w-64 h-16 text-lg">
                    Start Now
                </button>
            </Link>
        </div>
    );
};

export default MainButton;
