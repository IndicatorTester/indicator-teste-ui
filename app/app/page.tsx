"use client";

import React, { useEffect, useState } from "react";
import FormView, { TestParams } from "./FormView";
import { useUser } from "@auth0/nextjs-auth0/client";
import ResultView from "./ResultView";
import { API_KEY_LOCAL_STORAGE_KEY } from "../constants/constants";
import { generateClientHash } from "../utils";
import XComponentStack from "../components/XComponentStack";

const App = () => {
    const user = useUser();
    const [apiKey, setApiKey] = useState<string | null>(null);
    const [testResult, setTestResult] = useState<Object | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setApiKey(localStorage.getItem(API_KEY_LOCAL_STORAGE_KEY) ?? null);
    }, []);

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
            <div className="col-span-8 row-span-1 min-h-screen">
                    <XComponentStack
                        activeComponent={testResult ? 2 : 1}
                        components={[
                            <FormView
                                data={testResult}
                                handleRunTest={handleRunTest}
                                isCalculating={isLoading}
                            />,
                            <ResultView
                                data={testResult}
                                backAction={backAction}
                                downloadAction={downloadAction}
                            />,
                        ]}
                    />
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default App;
