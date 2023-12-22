import React from "react";
import "./globals.css";
import "tailwindcss/tailwind.css";

const NotFoundPage = () => {
    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1">
                <div className="flex flex-col items-center justify-center">
                    <div className="h-32" ></div>
                    <h1 className="text-4xl font-black mb-4">
                        404 - Page Not Found
                    </h1>
                    <p className="text-gray-400">
                        Sorry, the page you are looking for does not exist.
                    </p>
                </div>
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default NotFoundPage;
