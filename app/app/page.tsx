"use client";

import React, { useState } from "react";
import FormView, { TestParams } from "./FormView";
import { useUser } from "@auth0/nextjs-auth0/client";
import ResultView from "./ResultView";

const App = () => {
    const user = useUser();
    const [testResult, setTestResult] = useState<Object | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleRunTest = async (testParams: TestParams) => {
        setIsLoading(true);

        try {
            setTestResult(null);
            const response = await fetch(
                `${process.env.X_INDICATOR_API}/calculate`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Auth: user.user?.sub ?? "",
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
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("An error occurred while making the request.");
            }

            const data = await response.json();
            setTestResult(data);
        } catch (error) {
            console.error(error);
        }

        setIsLoading(false);
    };

    const backAction: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        // console.log("HI");
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
                    {isLoading ? (
                        <span className="loading loading-ring loading-lg"></span>
                    ) : testResult ? (
                        <ResultView
                            data={testResult}
                            backAction={backAction}
                            downloadAction={downloadAction}
                        />
                    ) : (
                        <FormView handleRunTest={handleRunTest} />
                    )}
                </div>
            </div>
            <div className="col-span-2"></div>
        </>
    );
};

export default App;
