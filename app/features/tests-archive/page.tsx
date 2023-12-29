"use client";

import { INTERVALS_MAPPING, generateClientHash } from "@/app/utils";
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Copy, Download } from "react-feather";

const TestsArchive = () => {
    const user = useUser();
    const [tests, setTests] = useState<any>(null);
    const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
    const [downloadAction, setDownloadAction] = useState<string | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const fetchTests = async (timestamp: string, pageNumber: number) => {
        setIsFetchingData(true);
        const response = await fetch("/api/testArchive", {
            method: "POST",
            headers: {
                auth: generateClientHash(
                    user.user?.sub ?? "",
                    timestamp,
                    user.user?.sub ?? ""
                ),
            },
            body: JSON.stringify({
                pageNumber: pageNumber,
                timestamp: timestamp,
                userId: user.user?.sub ?? "",
            }),
        });

        if (!response.ok) {
            throw new Error("An error occurred while making the request.");
        }

        const data = await response.json();
        setTests(data);
        setIsFetchingData(false);
    };

    const fetchTestActions = async (timestamp: string) => {
        if (downloadAction) {
            return;
        }
        setDownloadAction(timestamp);
        const response = await fetch("/api/testActions", {
            method: "POST",
            headers: {
                auth: generateClientHash(
                    timestamp,
                    user.user?.sub ?? "",
                    user.user?.sub ?? ""
                ),
            },
            body: JSON.stringify({
                timestamp: timestamp,
                userId: user.user?.sub ?? "",
            }),
        });

        if (!response.ok) {
            throw new Error("An error occurred while making the request.");
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${timestamp}.json`;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        setDownloadAction(null);
    };

    useEffect(() => {
        fetchTests(`${Math.floor(Date.now() / 1000)}`, 1);
    }, []);

    const nextPage: React.MouseEventHandler<HTMLButtonElement> = async (
        event
    ) => {
        const lastTimestamp = tests[tests.length - 1].timestamp;
        setTests(null);
        await fetchTests(lastTimestamp, pageNumber + 1);
        setPageNumber(pageNumber + 1);
    };

    const previousPage: React.MouseEventHandler<HTMLButtonElement> = async (
        event
    ) => {
        const firstTimestamp =
            tests.length > 0
                ? tests[0].timestamp
                : `${Math.floor(Date.now() / 1000)}`;
        setTests(null);
        await fetchTests(firstTimestamp, pageNumber - 1);
        setPageNumber(pageNumber - 1);
    };

    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1 min-h-screen">
                <div className="w-full flex flex-col space-y-16 justify-center items-center">
                    <div className="w-full text-center">
                        <h1 className="lg:text-6xl text-5xl font-black">
                            Tests Archive
                        </h1>
                    </div>
                    <div className="w-full flex flex-col space-y-4 overflow-auto bg-base-200 p-4 rounded-3xl">
                        <table className="table text-center">
                            <thead className="text-base text-neutral-content font-black">
                                <tr>
                                    <th className="font-black">#</th>
                                    <th className="font-black"></th>
                                    <th className="font-black">Symbol</th>
                                    <th className="font-black">Indicator</th>
                                    <th className="font-black">Interval</th>
                                    <th className="font-black">From</th>
                                    <th className="font-black">To</th>
                                    <th className="font-black">Profit</th>
                                    <th className="font-black">Transactions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isFetchingData ? (
                                    <span className="loading loading-ring loading-lg"></span>
                                ) : (
                                    tests &&
                                    tests.map((test: any, index: number) => {
                                        return (
                                            <tr key={index}>
                                                <td className="font-black">
                                                    {index +
                                                        1 +
                                                        20 * (pageNumber - 1)}
                                                </td>
                                                <td className="font-black">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox"
                                                        />
                                                    </label>
                                                </td>
                                                <td className="font-black">
                                                    {test.symbol}
                                                </td>
                                                <td className="flex justify-center items-center">
                                                    <button
                                                        className="btn btn-circle"
                                                        onClick={() =>
                                                            navigator.clipboard.writeText(
                                                                test.indicator
                                                            )
                                                        }
                                                    >
                                                        <Copy className="text-neutral-content" />
                                                    </button>
                                                </td>
                                                <td>
                                                    {
                                                        INTERVALS_MAPPING[
                                                            test.interval
                                                        ]
                                                    }
                                                </td>
                                                <td>{test.startDate}</td>
                                                <td>{test.endDate}</td>
                                                <td
                                                    className={`font-black text-lg ${
                                                        test.profit.charAt(0) ==
                                                        "-"
                                                            ? "text-red-500"
                                                            : "text-green-400"
                                                    }`}
                                                >
                                                    {test.profit}%
                                                </td>
                                                <td className="flex justify-center items-center">
                                                    {downloadAction ==
                                                    test.timestamp ? (
                                                        <span className="loading loading-ball loading-md"></span>
                                                    ) : (
                                                        <button
                                                            onClick={() =>
                                                                fetchTestActions(
                                                                    test.timestamp
                                                                )
                                                            }
                                                            className="btn btn-circle btn-info"
                                                        >
                                                            <Download className="text-neutral" />
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                        <div className="w-full flex justify-center items-center space-x-4">
                            <button
                                onClick={previousPage}
                                disabled={pageNumber === 1}
                                className="btn btn-circle"
                            >
                                <ChevronLeft />
                            </button>
                            <div className="flex justify-center items-center text-center font-bold text-lg h-4 w-4">
                                {pageNumber}
                            </div>
                            <button
                                onClick={nextPage}
                                disabled={tests && tests.length < 20}
                                className="btn btn-circle"
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default TestsArchive;
