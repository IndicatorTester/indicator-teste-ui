import Link from "next/link";
import React from "react";

const XFooter = () => {
    return (
        <div className="grid grid-rows-expand grid-cols-12 min-h-[50%] mt-16">
            <div className="col-span-2 bg-base-200"></div>
            <div className="w-full flex flex-col justify-center items-center col-span-8 row-span-1 bg-base-200">
                <footer className="footer py-10 bg-base-200 text-neutral-content">
                    <aside>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 26 23"
                            className="fill-current"
                        >
                            <path d="M0.556488 23L8.78585 11.5L0.844488 0.600006H9.32449L13 6.02974L16.8445 0.600006H24.9725L17.1349 11.5L25.4525 23H16.8125L13 17L9.16449 23H0.556488Z" />
                        </svg>
                        <p className="font-bold">XIndicator</p>
                        <p>Copyright © 2024 - All right reserved</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Navigation</header>
                        <Link
                            href={"/features/indicator-tester"}
                            className="link link-hover"
                        >
                            Indicator Tester
                        </Link>
                        <Link
                            href={"/guidelines/indicators"}
                            className="link link-hover"
                        >
                            Indicators
                        </Link>
                        <Link href={"/pricing"} className="link link-hover">
                            Pricing
                        </Link>
                        <Link href={"/profile"} className="link link-hover">
                            Profile
                        </Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Website</header>
                        <Link
                            href={"/website/about-us"}
                            className="link link-hover"
                        >
                            About us
                        </Link>
                        <Link
                            href={"/website/contact"}
                            className="link link-hover"
                        >
                            Contact
                        </Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <Link
                            href={"/legal/terms-conditions"}
                            className="link link-hover"
                        >
                            Terms & Conditions
                        </Link>
                        <Link
                            href={"/legal/privacy-policy"}
                            className="link link-hover"
                        >
                            Privacy Policy
                        </Link>
                    </nav>
                </footer>
            </div>
            <div className="col-span-2 bg-base-200"></div>
        </div>
    );
};

export default XFooter;
