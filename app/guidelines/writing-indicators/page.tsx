import Link from "next/link";
import React from "react";

const WritingIndicators = () => {
    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1 min-h-screen flex flex-col space-y-8">
                <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 h-fit">
                    <h1 className="text-5xl font-bold">
                        Writing Signal Indicators
                    </h1>
                    <div>
                        <p className="text-gray-400">
                            Here you will learn how to write signal indicators
                            which is suitable for{" "}
                            <Link
                                className="underline underline-offset-2 text-neutral-content"
                                href={"/features/indicator-tester"}
                            >
                                indicator-tester
                            </Link>{" "}
                            tool.
                        </p>
                    </div>
                </div>
                <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-4 h-fit">
                    <h1 className="text-3xl font-bold">Before You Start:</h1>
                    <div className="flex flex-col space-y-2">
                        <p>
                            <span className="font-black">• </span>A signal
                            trading indicator is a mathematical tool used in
                            technical analysis that helps traders identify
                            potential buy or sell signals on a price chart.
                        </p>
                    </div>
                </div>
                <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-4 h-fit">
                    <h1 className="text-3xl font-bold">
                        The Main Points Which You Must Know:
                    </h1>
                    <div className="flex flex-col space-y-2">
                        <p>
                            <span className="font-black">• </span>The indicator
                            you write must result to a True/False list, which
                            indicates to Buy/Sell trades.
                        </p>
                        <p>
                            <span className="font-black">• </span>If you result
                            is True for a specific candlestick, that means it is
                            a buy trade with all cash on the close price of that
                            candlestick.
                        </p>
                        <p>
                            <span className="font-black">• </span>If you result
                            is False for a specific candlestick, that means it
                            is a sell trade with all stock/crypto on the close
                            price of that candlestick.
                        </p>
                    </div>
                </div>
                <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 h-fit">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold">Prices</h1>
                        <p className="text-gray-400">
                            The cornerstone of any trading system is the set of
                            prices used to construct the candlestick chart,
                            namely the open, high, low, and close prices. You
                            can use these prices in your indicator as follow:
                        </p>
                    </div>
                    <ul className="flex flex-col space-y-1">
                        <li>
                            <span className="font-black">• </span>Open: which is
                            the value used to get the open prices for the given
                            range.
                        </li>
                        <li>
                            <span className="font-black">• </span>High: which is
                            the value used to get the high prices for the given
                            range.
                        </li>
                        <li>
                            <span className="font-black">• </span>Low: which is
                            the value used to get the low prices for the given
                            range.
                        </li>
                        <li>
                            <span className="font-black">• </span>Close: which
                            is the value used to get the close prices for the
                            given range.
                        </li>
                        <li>
                            <span className="font-black">• </span>Data: this is
                            a place holder which indicates to all the available
                            prices.
                        </li>
                    </ul>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-xl font-bold">Example</h1>
                        <p className="text-gray-400">
                            If we have the following prices:
                        </p>
                        <p>Close prices as: [1, 5, 3, 3, 4]</p>
                        <p>Open prices as: [2, 3, 4, 5, 1]</p>
                        <p className="text-gray-400">
                            And the following indicator:
                        </p>
                        <p className="italic">open &lt; close</p>
                        <p className="text-gray-400">The result will be:</p>
                        <p>[False, True, False, False, True]</p>
                        <p className="text-gray-400">
                            Which means the trades will be:
                        </p>
                        <p>Sell on the 1st day</p>
                        <p>Buy on the 2nd day</p>
                        <p>Sell on the 3rd day</p>
                        <p>Buy on the 5th day</p>
                    </div>
                </div>
                <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 h-fit">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold">
                            Arithmetic Operations
                        </h1>
                        <p className="text-gray-400">
                            The main arithmetic operations are supported:
                        </p>
                    </div>
                    <ul className="flex flex-col space-y-1">
                        <li>
                            <span className="font-black">• </span>Addition (+)
                        </li>
                        <li>
                            <span className="font-black">• </span>Subtraction
                            (-)
                        </li>
                        <li>
                            <span className="font-black">• </span>Multiplication
                            (*)
                        </li>
                        <li>
                            <span className="font-black">• </span>Division (/)
                        </li>
                    </ul>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-xl font-bold">Example</h1>
                        <p className="text-gray-400">
                            If we have the following prices:
                        </p>
                        <p>Open prices as: [1, 5, 3]</p>
                        <p>High prices as: [7, 3, 4]</p>
                        <p>Low prices as: [6, 2, 1]</p>
                        <p>Close prices as: [5, 3, 1]</p>
                        <p className="text-gray-400">
                            And the following indicator:
                        </p>
                        <p className="italic">open - low &lt; high - close</p>
                        <p className="text-gray-400">The result will be:</p>
                        <p>[False, False, True]</p>
                        <p className="text-gray-400">
                            Which means the trades will be:
                        </p>
                        <p>Sell on the 1st day</p>
                        <p>Buy on the 3rd day</p>
                    </div>
                </div>
                <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 h-fit">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold">
                            Comparison Operations
                        </h1>
                        <p className="text-gray-400">
                            The main comparison operations are supported:
                        </p>
                    </div>
                    <ul className="flex flex-col space-y-1">
                        <li>
                            <span className="font-black">• </span>Equality (==)
                        </li>
                        <li>
                            <span className="font-black">• </span>Inequality
                            (!=)
                        </li>
                        <li>
                            <span className="font-black">• </span>Less than or
                            equal (&lt;=)
                        </li>
                        <li>
                            <span className="font-black">• </span>Greater than
                            or equal (&gt;=)
                        </li>
                        <li>
                            <span className="font-black">• </span>Less than
                            (&lt;)
                        </li>
                        <li>
                            <span className="font-black">• </span>Greater than
                            (&gt;)
                        </li>
                    </ul>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-xl font-bold">Example</h1>
                        <p className="text-gray-400">
                            If we have the following prices:
                        </p>
                        <p>Close prices as: [1, 5, 3]</p>
                        <p>High prices as: [2, 5, 4]</p>
                        <p className="text-gray-400">
                            And the following indicator:
                        </p>
                        <p className="italic">close == high</p>
                        <p className="text-gray-400">The result will be:</p>
                        <p>[False, True, False]</p>
                        <p className="text-gray-400">
                            Which means the trades will be:
                        </p>
                        <p>Sell on the 1st day</p>
                        <p>Buy on the 2nd day</p>
                        <p>Sell on the 3rd day</p>
                    </div>
                </div>
                <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 h-fit">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold">
                            Logical Operations
                        </h1>
                        <p className="text-gray-400">
                            The main logical operations are supported:
                        </p>
                    </div>
                    <ul className="flex flex-col space-y-1">
                        <li>
                            <span className="font-black">• </span>And (&)
                        </li>
                        <li>
                            <span className="font-black">• </span>Or (|)
                        </li>
                    </ul>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-xl font-bold">Note</h1>
                        <p>
                            For every expression that is used with a logical
                            operation is MUST be between brackets (). A valid
                            indicator:{" "}
                            <span className="italic font-bold">
                                (expressionA) & (expressionB) | (expressionC)
                            </span>
                            , meanwhile{" "}
                            <span className="italic font-bold">
                                expressionA & expressionB | expressionC
                            </span>{" "}
                            is not valid.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-xl font-bold">Example</h1>
                        <p className="text-gray-400">
                            If we have the following prices:
                        </p>
                        <p>Open prices as: [2, 5, 3]</p>
                        <p>Low prices as: [1, 2, 1]</p>
                        <p>Close prices as: [5, 3, 1]</p>
                        <p className="text-gray-400">
                            And the following indicator:
                        </p>
                        <p className="italic">
                            (open &gt; low) & (close &lt; open)
                        </p>
                        <p className="text-gray-400">The result will be:</p>
                        <p>[False, True, True]</p>
                        <p className="text-gray-400">
                            Which means the trades will be:
                        </p>
                        <p>Sell on the 1st day</p>
                        <p>Buy on the 2nd day</p>
                    </div>
                </div>
                <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 h-fit">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold">Indicators</h1>
                        <p className="text-gray-400">
                            There are many already implemented indicators which
                            you can find{" "}
                            <Link
                                href={"/guidelines/indicators"}
                                className="font-bold text-neutral-content underline underline-offset-1"
                            >
                                here
                            </Link>
                            .
                        </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-xl font-bold">Example</h1>
                        <p className="italic">
                            sma(close, 10) &lt; sma(open, 5)
                        </p>
                        <p className="italic">
                            sma(close, 10) &lt; sma(open, 5)
                        </p>
                        <p className="italic">
                            psar(data, 0.04, 0.04, 0.4) &lt; close
                        </p>
                        <p className="italic">bold(close) &gt; open</p>
                    </div>
                </div>
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default WritingIndicators;