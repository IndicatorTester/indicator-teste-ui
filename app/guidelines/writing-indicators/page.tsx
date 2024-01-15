import Link from "next/link";
import React from "react";

const WritingIndicators = () => {
    return (
        <>
            <div className="col-span-1 md:col-span-2"></div>
            <div className="col-span-10 md:col-span-8 row-span-1 min-h-screen flex flex-col space-y-8">
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
                        How The Indicator Tester Works?
                    </h1>
                    <div className="flex flex-col space-y-2">
                        <p>
                            You will provide two signal indicators, the first
                            one is for the buy signal and second one is for the
                            sell signal.
                        </p>
                        <p>
                            <span className="font-black">• </span>Both of your
                            indicators will give a list of true/false signals,
                            where true for buy indicator means buy, and true for
                            sell indicator means sell.
                        </p>
                        <p>
                            <span className="font-black">• </span>The best way
                            to explain it is by checking an example:
                        </p>
                        <p className="ml-4">
                            <span className="font-black">◦ </span>Buy Indicator:
                            <code className="font-bold">
                                {" "}
                                sma(close) &lt; sma(close, 35)
                            </code>
                            , which means buy when simple moving average for
                            close price for length 14 is less than simple moving
                            average for close price for length 35, results to:
                            <code className="font-bold">
                                {" "}
                                [True, True, True, False, False, False]
                            </code>
                        </p>
                        <p className="ml-4">
                            <span className="font-black">◦ </span>Sell
                            Indicator:
                            <code className="font-bold">
                                {" "}
                                sma(close) &gt; sma(close, 28)
                            </code>
                            , which means sell when simple moving average for
                            close price for length 14 is greater than simple
                            moving average for close price for length 28,
                            results to:
                            <code className="font-bold">
                                {" "}
                                [False, False, True, False, True, True]
                            </code>
                        </p>
                        <div className="divider h-8"></div>
                        <div className="overflow-x-auto">
                            <table className="table text-lg">
                                <thead className="text-lg text-neutral-content">
                                    <tr>
                                        <th>Candle</th>
                                        <th>Buy Indicator</th>
                                        <th>Sell Indicator</th>
                                        <th>Action</th>
                                        <th>Explanation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-start hover:bg-base-300">
                                        <th>1</th>
                                        <td>True</td>
                                        <td>False</td>
                                        <td className="font-bold text-green-400">
                                            Buy
                                        </td>
                                        <td>
                                            In this case a buy action will take
                                            place since the buy indicator is
                                            &quot;True&quot; and the sell indicator is
                                            &quot;False&quot;.
                                        </td>
                                    </tr>
                                    <tr className="text-start hover:bg-base-300">
                                        <th>2</th>
                                        <td>True</td>
                                        <td>False</td>
                                        <td className="font-bold">None</td>
                                        <td>
                                            In this case it is a buy action,
                                            however a buy action is that last
                                            action that took place so this
                                            action will be ignored.
                                        </td>
                                    </tr>
                                    <tr className="text-start hover:bg-base-300">
                                        <th>3</th>
                                        <td>True</td>
                                        <td>True</td>
                                        <td className="font-bold">None</td>
                                        <td>
                                            If both indicators gave the same
                                            value no action will take place.
                                        </td>
                                    </tr>
                                    <tr className="text-start hover:bg-base-300">
                                        <th>4</th>
                                        <td>False</td>
                                        <td>False</td>
                                        <td className="font-bold">None</td>
                                        <td>
                                            If both indicators gave the same
                                            value no action will take place.
                                        </td>
                                    </tr>
                                    <tr className="text-start hover:bg-base-300">
                                        <th>5</th>
                                        <td>False</td>
                                        <td>True</td>
                                        <td className="font-bold text-red-500">
                                            Sell
                                        </td>
                                        <td>
                                            In this case a sell action will take
                                            place since the buy indicator is
                                            &quot;False&quot; and the sell indicator is
                                            &quot;True&quot;, and the last action was a
                                            buy action.
                                        </td>
                                    </tr>
                                    <tr className="text-start hover:bg-base-300">
                                        <th>6</th>
                                        <td>False</td>
                                        <td>True</td>
                                        <td className="font-bold">None</td>
                                        <td>
                                            In this case it is a sell action,
                                            however a sell action is that last
                                            action that took place so this
                                            action will be ignored.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
            <div className="col-span-1 md:col-span-2"></div>
        </>
    );
};

export default WritingIndicators;
