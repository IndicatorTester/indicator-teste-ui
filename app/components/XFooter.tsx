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
                        <div className="grid grid-flow-col gap-6 mt-4">
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
                    </aside>
                    <nav>
                        <header className="footer-title">Navigation</header>
                        <Link href={"/features/indicator-tester"} className="link link-hover">
                            Indicator Tester
                        </Link>
                        <Link href={"/guidelines/indicators"} className="link link-hover">
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
                        >About us</Link>
                        <Link
                            href={"/website/contact"}
                            className="link link-hover"
                        >Contact</Link>
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
