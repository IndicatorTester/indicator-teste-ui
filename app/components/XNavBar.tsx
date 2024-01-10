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
            head: "Guidelines",
            items: [
                {
                    title: "Writing Indicators",
                    path: "/guidelines/writing-indicators",
                },
                {
                    title: "Indicators",
                    path: "/guidelines/indicators",
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
                    title: "twelvdata",
                    path: "https://twelvedata.com/",
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
                    title: "About Us",
                    path: "/website/about-us",
                },
            ],
        },
    ];

    const { user, error, isLoading } = useUser();
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    return (
        <div className="grid grid-rows-expand grid-cols-12 mt-2">
            <div className="col-span-1 md:col-span-2"></div>
            <div className="col-span-10 md:col-span-8 navbar bg-base-100 mb-8 p-0 flex justify-between items-center">
                <div className="w-[25%] flex justify-start">
                    <Link href={"/home"} className="text-xl font-bold">
                        XIndicator
                    </Link>
                </div>
                <div
                    onMouseEnter={() => setIsNavMenuOpen(true)}
                    onMouseLeave={() => setIsNavMenuOpen(false)}
                    className="flex flex-col py-6 px-8 space-y-12 justify-start items-center"
                >
                    <div className="animate-pulse h-12 w-12">
                        <MoreHorizontal className="h-12 w-12" />
                    </div>
                    <div
                        className={`${
                            isNavMenuOpen
                                ? "opacity-100 z-[1]"
                                : "opacity-0 z-[-1]"
                        } transition-opacity duration-200 ease-in-out grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 p-8 rounded-xl absolute bg-base-200 shadow-2xl w-fit`}
                    >
                        {menu.map((value, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex flex-col space-y-4 justify-start items-center text-center"
                                >
                                    <h1 className="font-black text-xl text-center">
                                        {value.head}
                                    </h1>
                                    <div className="flex flex-col space-y-2">
                                        {value.items.map((item, j) => {
                                            return (
                                                <Link key={j} href={item.path}>
                                                    <p className="whitespace-nowrap text-gray-400 hover:text-neutral-content hover:underline hover:underline-offset-2">
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
                <div className="w-[25%] flex flex-row-reverse">
                    <div className="h-8 flex justify-center items-center">
                        {isLoading ? (
                            <span className="loading loading-ring loading-lg"></span>
                        ) : user ? (
                            <Link href={"/profile"}>
                                <User className="hover:text-green-400 h-8 w-8" />
                            </Link>
                        ) : (
                            <a href="/api/auth/login" className="btn md:w-32">
                                Login
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-2"></div>
        </div>
    );
};

export default XNavBar;
