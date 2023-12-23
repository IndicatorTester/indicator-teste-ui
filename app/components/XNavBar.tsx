"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React, { useState } from "react";
import { MoreHorizontal, User } from "react-feather";
import { usePathname } from "next/navigation";

const XNavBar = () => {
    const menu = [
        {
            head: "Applications",
            items: [
                {
                    title: "Indicator Tester",
                    path: "/app",
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

    const pathname = usePathname();
    const { user, error, isLoading } = useUser();
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    return (
        <div className="navbar bg-base-100 mb-8 p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden pr-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href={"/app"} className="font-bold">
                                App
                            </Link>
                        </li>
                        <li>
                            <Link href={pathname} className="font-bold">
                                Data Providers
                            </Link>
                            <ul className="p-2">
                                <li>
                                    <Link
                                        href="https://twelvedata.com"
                                        passHref
                                    >
                                        twelvedata
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href={pathname} className="font-bold">
                                Documentation
                            </Link>
                            <ul className="p-2">
                                <li>
                                    <Link href={"/indicators"}>Indicators</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href={"/pricing"} className="font-bold">
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </div>
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
                    } transition-opacity duration-200 ease-in-out flex justify-between items-start space-x-24 p-8 rounded-xl absolute bg-base-200 shadow-2xl`}
                >
                    {menu.map((value, i) => {
                        return (
                            <div
                                key={i}
                                className="flex flex-col space-y-2 justify-start items-start"
                            >
                                <h1 className="font-black text-xl">
                                    {value.head}
                                </h1>
                                <div className="h-1"></div>
                                {value.items.map((item, j) => {
                                    return (
                                        <Link key={j} href={item.path}>
                                            <p className="text-gray-400 hover:text-neutral-content hover:underline">
                                                {item.title}
                                            </p>
                                        </Link>
                                    );
                                })}
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
                        <Link
                            href={"/profile"}
                        >
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
