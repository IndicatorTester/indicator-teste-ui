import Link from "next/link";
import React from "react";

const MainButton = () => {
    return (
            <Link href="/features/indicator-tester">
                <button className="btn btn-active bg-gradient-to-r from-pink-700 to-red-500 w-64 h-16 text-lg">
                    Start Now
                </button>
            </Link>
    );
};

export default MainButton;
