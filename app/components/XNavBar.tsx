"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React, { useState } from "react";
import { MoreHorizontal, User } from "react-feather";

const XNavBar = () => {
    const menu = [
        {
            head: "Features",
            items: [
                {
                    title: "Indicator Tester",
                    path: "/features/indicator-tester",
                },
                {
                    title: "Tests Archive",
                    path: "/features/tests-archive",
                },
            ],
        },
        {
            head: "Providers",
            items: [
                {
                    title: "twelvedata",
                    path: "https://twelvedata.com",
                },
            ],
        },
        {
            head: "Navigation",
            items: [
                {
                    title: "Pricing",
                    path: "/pricing",
                },
                {
                    title: "Indicators",
                    path: "/indicators",
                },
            ],
        },
        {
            head: "Website",
            items: [
                {
                    title: "Contact",
                    path: "/website/contact",
                },
                {
                    title: "About",
                    path: "/website/about",
                },
            ],
        },
    ];

    const { user, error, isLoading } = useUser();
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    return (
        <div className="navbar bg-base-100 mb-8 p-0">
            <div className="navbar-start">
                <Link href={"/home"} className="text-xl font-bold">
                    XIndicator
                </Link>
            </div>
            <div
                onMouseEnter={() => setIsNavMenuOpen(true)}
                onMouseLeave={() => setIsNavMenuOpen(false)}
                className="flex flex-col p-6 space-y-12 justify-start items-center"
            >
                <div className="animate-pulse h-12 w-12">
                    <MoreHorizontal className="h-12 w-12" />
                </div>
                <div
                    className={`${
                        isNavMenuOpen ? "opacity-100 z-[1]" : "opacity-0 z-[-1]"
                    } transition-opacity duration-200 ease-in-out flex flex-col lg:flex-row justify-between items-start space-x-0 lg:space-x-24 space-y-12 lg:space-y-0 p-8 rounded-xl absolute bg-base-200 shadow-2xl`}
                >
                    {menu.map((value, i) => {
                        return (
                            <div
                                key={i}
                                className="flex flex-col space-y-4 justify-start items-start"
                            >
                                <h1 className="font-black text-xl">
                                    {value.head}
                                </h1>
                                <div className="flex flex-col space-y-2">
                                    {value.items.map((item, j) => {
                                        return (
                                            <Link key={j} href={item.path}>
                                                <p className="whitespace-nowrap text-gray-400 hover:text-neutral-content hover:underline">
                                                    {item.title}
                                                </p>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="navbar-end">
                <div className="h-8 flex justify-center items-center">
                    {isLoading ? (
                        <span className="loading loading-ring loading-lg"></span>
                    ) : user ? (
                        <Link href={"/profile"}>
                            <User className="hover:text-green-400 h-8 w-8" />
                        </Link>
                    ) : (
                        <Link href={"/api/auth/login"} className="btn md:w-32">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default XNavBar;
