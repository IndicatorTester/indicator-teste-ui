"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";
import { User } from "react-feather";
import { usePathname } from 'next/navigation';

const XNavBar = () => {
    const { user, error, isLoading } = useUser();
    const pathname = usePathname();

    return (
        <div className="navbar bg-base-100 mb-8 p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="lg:hidden pr-4"
                    >
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
                            <Link href={"/app"} className="font-bold">App</Link>
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
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li>
                        <Link href={"/app"}>App</Link>
                    </li>
                    <li>
                        <details>
                            <summary>Data Providers</summary>
                            <ul className="p-2 bg-base-200">
                                <li>
                                    <Link
                                        href="https://twelvedata.com"
                                        passHref
                                    >
                                        twelvedata
                                    </Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Documentation</summary>
                            <ul className="p-2 bg-base-200">
                                <li>
                                    <Link href={"/indicators"}>Indicators</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link href={"/pricing"}>Pricing</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="h-8 w-8 flex justify-center items-center">
                    {isLoading ? (
                        <span className="loading loading-ring loading-lg"></span>
                    ) : user ? (
                        <Link
                            href={"/profile"}
                            className="btn btn-ghost text-xl font-black rounded-full"
                        >
                            <User />
                        </Link>
                    ) : (
                        <Link
                            href={"/api/auth/login"}
                            className="btn md:w-32"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default XNavBar;
