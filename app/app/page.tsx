"use client";

import React, { useState } from "react";
import FormView, { TestParams } from "./FormView";
import { useUser } from "@auth0/nextjs-auth0/client";
import ResultView from "./ResultView";
import { API_KEY_LOCAL_STORAGE_KEY } from "../constants/constants";
import { AlertTriangle } from "react-feather";
import Link from "next/link";
import { generateClientHash } from "../utils";

const App = () => {
    const user = useUser();
    const apiKey = localStorage.getItem(API_KEY_LOCAL_STORAGE_KEY) ?? null;
    const [testResult, setTestResult] = useState<Object | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleRunTest = async (testParams: TestParams) => {
        setIsLoading(true);

        try {
            setTestResult(null);
            const response = await fetch("/api/calculate", {
                method: "POST",
                headers: {
                    auth: generateClientHash(
                        testParams.symbol.toUpperCase(),
                        user.user?.sub ?? "",
                        apiKey ?? ""
                    ),
                },
                body: JSON.stringify({
                    exchange: testParams.exchange.toUpperCase(),
                    symbol: testParams.symbol.toUpperCase(),
                    indicator: testParams.indicator.toLowerCase(),
                    startDate: testParams.startDate,
                    endDate: testParams.endDate,
                    interval: testParams.interval,
                    userId: user.user?.sub ?? "",
                    type: testParams.type,
                    apiKey: apiKey,
                }),
            });

            if (!response.ok) {
                throw new Error("An error occurred while making the request.");
            }

            const data = await response.json();
            setTestResult(data);
        } catch (error) {}

        setIsLoading(false);
    };

    const backAction: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setTestResult(null);
    };

    const downloadAction: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {};

    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-8 row-span-1">
                <div className="flex flex-col space-y-16 justify-start items-center text-center">
                    <h1 className="lg:text-6xl text-5xl font-black">
                        Test Your Indicator
                    </h1>
                    {!apiKey && (
                        <div className="w-full">
                            <div role="alert" className="alert alert-warning">
                                <AlertTriangle />
                                <span>
                                    Warning: Add your Twelvedata api key in{" "}
                                    <Link
                                        href={"/profile"}
                                        className="border-b border-gray-500 font-bold"
                                    >
                                        your profile.
                                    </Link>
                                </span>
                            </div>
                        </div>
                    )}
                    {testResult ? (
                        <ResultView
                            data={testResult}
                            backAction={backAction}
                            downloadAction={downloadAction}
                        />
                    ) : (
                        apiKey && (
                            <FormView
                                handleRunTest={handleRunTest}
                                isCalculating={isLoading}
                            />
                        )
                    )}
                </div>
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default App;
