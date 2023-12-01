import React from "react";
import TestPage from "./testPage";

const Menu = () => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden absolute top-0 left-0 mt-4 ml-4"
                    >
                        Open drawer
                    </label>
                    <TestPage />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full text-base-content">
                        <li className="font-bold text-lg">
                            <a>
                                <span className="inline-grid">
                                    <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90">
                                        Indicator Tester
                                    </span>
                                    <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
                                        Indicator Tester
                                    </span>
                                </span>
                            </a>
                        </li>
                        <div className="h-4"></div>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <details open>
                                <summary>Symbols</summary>
                                <ul>
                                    <li>
                                        <a>Crypto</a>
                                    </li>
                                    <li>
                                        <a>Nasdaq</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details open>
                                <summary>Indicators</summary>
                                <ul>
                                    <li>
                                        <a>Simple Moving Average</a>
                                    </li>
                                    <li>
                                        <a>Relative Strength Index</a>
                                    </li>
                                    <li>
                                        <a>Stochastic Oscillator </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                        <li>
                            <a>Test Indicator</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Menu;
