"use client";

import React, { useState } from "react";
import { ChevronLeft, Download } from "react-feather";

type ResultViewProps = {
    data: any;
    backAction: React.MouseEventHandler<HTMLButtonElement>;
};

const ResultView: React.FC<ResultViewProps> = ({ data, backAction }) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const calculateChangePercentage = (newValue: number, oldValue: number) => {
        return ((newValue - oldValue) / oldValue) * 100.0;
    };

    const downloadAction: React.MouseEventHandler<HTMLButtonElement> = async (
        event
    ) => {
        setIsDownloading(true);
        const jsonString = JSON.stringify(data.actions);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${Math.floor(Date.now() / 1000)}.json`;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        setIsDownloading(false);
    };

    return !data ? (
        <div></div>
    ) : (
        <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-8">
            <div className="w-full flex flex-col justify-start items-center space-y-8">
                <div className="w-full flex justify-between items-center">
                    <button onClick={backAction} className="btn btn-circle">
                        <ChevronLeft />
                    </button>
                    <p className="text-center ">
                        <span
                            className={
                                "text-5xl md:text-6xl lg:text-7xl font-black " +
                                (data.profitPercentage < 0
                                    ? "text-red-500"
                                    : "text-green-400")
                            }
                        >
                            {data.profitPercentage.toFixed(2)}%
                        </span>
                        <br />
                        <span className="font-light md:text-lg text-base text-gray-400">
                            Your Total Profit from this Test
                        </span>
                    </p>
                    <div className="flex justify-start items-center h-4">
                        {isDownloading ? (
                            <span className="loading loading-ball loading-md"></span>
                        ) : (
                            <button
                                onClick={downloadAction}
                                className="btn btn-info btn-circle"
                            >
                                <Download />
                            </button>
                        )}
                    </div>
                </div>
                <p className="text-center text-xl font-light text-gray-400">
                    Your indicator converted{" "}
                    <span className="text-neutral-content font-black">
                        $1000
                    </span>{" "}
                    to{" "}
                    <span className="text-neutral-content font-black">
                        ${data.cash.toFixed(2)}
                    </span>{" "}
                    with{" "}
                    <span className="text-neutral-content font-black">
                        {data.actions.length}
                    </span>{" "}
                    transactions between{" "}
                    <span className="text-neutral-content font-black italic">
                        {data.start}
                    </span>{" "}
                    and{" "}
                    <span className="text-neutral-content font-black italic">
                        {data.end}
                    </span>
                    .
                </p>
            </div>
            <div className="divider" ></div>
            <div className="w-full h-[720px] overflow-auto">
                <table className="table">
                    <thead className="text-base text-neutral-content font-black">
                        <tr>
                            <th className="font-black">#</th>
                            <th className="font-black">Date</th>
                            <th className="font-black">Price</th>
                            <th className="font-black">Action</th>
                            <th className="font-black">
                                Cash{" "}
                                <span className="text-sm text-gray-400 font-normal">
                                    (Profit so far)
                                </span>
                            </th>
                            <th className="font-black">Stocks</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">
                        {data.actions.map(
                            (action: any, index: number) =>
                                (index < 20 ||
                                index > data.actions.length - 20) && (
                                    <tr key={index} className="hover:bg-base-300" >
                                        <th className="font-black">
                                            {index + 1}
                                        </th>
                                        <td className="text-base">
                                            {action.date}
                                        </td>
                                        <td>{action.price.toFixed(6)}</td>
                                        <td
                                            className={
                                                action.action === "buy"
                                                    ? "text-green-500 font-black"
                                                    : "text-red-500 font-black"
                                            }
                                        >
                                            {action.action
                                                .charAt(0)
                                                .toUpperCase() +
                                                action.action.slice(1)}
                                        </td>
                                        <td className="font-black">
                                            {index % 2 === 1 ? (
                                                <>
                                                    ${action.cash.toFixed(2)}
                                                    <span className="text-sm font-normal text-gray-400">
                                                        {" "}
                                                        (
                                                        {calculateChangePercentage(
                                                            action.cash,
                                                            1000.0
                                                        ).toFixed(1)}
                                                        %)
                                                    </span>
                                                </>
                                            ) : (
                                                <>${action.cash.toFixed(2)}</>
                                            )}
                                        </td>
                                        <td>{action.stocks.toFixed(2)}</td>
                                    </tr>
                                )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResultView;
