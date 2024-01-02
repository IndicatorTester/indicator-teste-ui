"use client";

import { INTERVALS_MAPPING, generateClientHash } from "@/app/utils";
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useEffect, useState } from "react";
import {
    Check,
    ChevronLeft,
    ChevronRight,
    Copy,
    Download,
    Info,
} from "react-feather";
import fakeTestsArchive from "@/public/fake/testsArchive.json";
import fakeTestActions from "@/public/fake/testActions.json";

const TestsArchive = () => {
    const user = useUser();
    const [tests, setTests] = useState<any>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
    const [downloadAction, setDownloadAction] = useState<string | null>(null);

    const fetchTests = async (timestamp: string, pageNumber: number) => {
        if (!user.user) {
            setTests(fakeTestsArchive);
            return;
        }

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
        if (!user.user) {
            const jsonString = JSON.stringify(fakeTestActions);
            const blob = new Blob([jsonString], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${Math.floor(Date.now() / 1000)}.json`;
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
            return;
        }

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
    }, [fetchTests]);

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
        const firstTimestamp = tests[0].timestamp;
        setTests(null);
        await fetchTests(firstTimestamp, pageNumber - 1);
        setPageNumber(pageNumber - 1);
    };

    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1 min-h-screen">
                <div className="w-full flex flex-col space-y-8 justify-center items-center">
                    {!user.user && (
                        <div className="w-full">
                            <div role="alert" className="alert alert-info">
                                <Info />
                                <span>
                                    You are using the static version. Login to
                                    be able to use the real version.
                                </span>
                            </div>
                        </div>
                    )}
                    <div className="w-full bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 h-fit">
                        <h1 className="text-5xl font-bold">Tests Archive</h1>
                        <div>
                            <p className="text-gray-400">
                                Check your tests history and download all
                                tractions for{" "}
                                <span className="underline underline-offset-1 text-neutral-content">
                                    all your tests
                                </span>
                                .
                            </p>
                        </div>
                        <div className="divider"></div>
                        <div className="w-full flex flex-col space-y-8 overflow-auto bg-base-200 px-2 rounded-3xl">
                            {isFetchingData ? (
                                <div className="w-full flex justify-center items-center">
                                    <span className="loading loading-ring loading-lg"></span>
                                </div>
                            ) : (
                                <table className="table text-center">
                                    <thead className="text-base text-neutral-content font-black">
                                        <tr>
                                            <th className="font-black">#</th>
                                            <th className="font-black"></th>
                                            <th className="font-black">
                                                Symbol
                                            </th>
                                            <th className="font-black">
                                                Indicator
                                            </th>
                                            <th className="font-black">
                                                Interval
                                            </th>
                                            <th className="font-black">From</th>
                                            <th className="font-black">To</th>
                                            <th className="font-black">
                                                Profit
                                            </th>
                                            <th className="font-black">
                                                Transactions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tests &&
                                            tests.map(
                                                (test: any, index: number) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="font-black">
                                                                {index +
                                                                    1 +
                                                                    20 *
                                                                        (pageNumber -
                                                                            1)}
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
                                                                <label className="swap">
                                                                    <input
                                                                        type="checkbox"
                                                                        onClick={() =>
                                                                            navigator.clipboard.writeText(
                                                                                test.indicator
                                                                            )
                                                                        }
                                                                    />
                                                                    <div className="swap-off fill-current flex justify-center items-center">
                                                                        <Copy className="text-neutral-content" />
                                                                    </div>
                                                                    <div className="swap-on fill-current flex justify-center items-center">
                                                                        <Check className="text-green-400" />
                                                                    </div>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                {
                                                                    INTERVALS_MAPPING[
                                                                        test
                                                                            .interval
                                                                    ]
                                                                }
                                                            </td>
                                                            <td>
                                                                {test.startDate}
                                                            </td>
                                                            <td>
                                                                {test.endDate}
                                                            </td>
                                                            <td
                                                                className={`font-black text-lg ${
                                                                    test.profit.charAt(
                                                                        0
                                                                    ) == "-"
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
                                                }
                                            )}
                                    </tbody>
                                </table>
                            )}
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
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default TestsArchive;
