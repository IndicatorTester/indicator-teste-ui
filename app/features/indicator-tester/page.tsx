"use client";

import React, { useEffect, useState } from "react";
import FormView, { TestParams } from "./FormView";
import { useUser } from "@auth0/nextjs-auth0/client";
import ResultView from "./ResultView";
import { API_KEY_LOCAL_STORAGE_KEY } from "@/app/constants/constants";
import { generateClientHash } from "@/utils/backend";
import XComponentStack from "@/app/components/XComponentStack";
import { Info, XOctagon } from "react-feather";
import fakeTestResult from "@/public/fake/testResult.json";
import { redirect } from "next/navigation";
import { scrollToTop } from "@/utils/view";

const App = () => {
    const user = useUser();

    if (user.user && !user.user?.email_verified) {
        redirect("/profile");
    }

    const [apiKey, setApiKey] = useState<string | null>(null);
    const [testResult, setTestResult] = useState<Object | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setApiKey(
            localStorage.getItem(
                API_KEY_LOCAL_STORAGE_KEY + user.user?.sub ?? ""
            ) ?? null
        );
    }, []);

    const handleRunTest = async (
        testParams: TestParams | null,
        error: string | null
    ) => {
        if ((apiKey === null || apiKey === "") && user.user) {
            setError(
                "You have to add your api key to use this tool, go to your profile."
            );
            scrollToTop(document);
            return;
        }

        setError(error);
        if (error !== null) {
            scrollToTop(document);
        }
        if (testParams === null) {
            return;
        }

        setError(null);
        setIsLoading(true);

        if (!user.user) {
            setTestResult(fakeTestResult);
            setIsLoading(false);
            scrollToTop(document);
            return;
        }

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
                    buyIndicator:
                        "(" +
                        testParams.buyIndicator
                            .toLowerCase()
                            .replace(/\s/g, "")
                            .replace(/\n/g, "")
                            .replace(/&/g, ")&(")
                            .replace(/\|/g, ")|(") +
                        ")",
                    sellIndicator:
                        "(" +
                        testParams.sellIndicator
                            .toLowerCase()
                            .replace(/\s/g, "")
                            .replace(/\n/g, "")
                            .replace(/&/g, ")&(")
                            .replace(/\|/g, ")|(") +
                        ")",
                    startDate: testParams.startDate,
                    endDate: testParams.endDate,
                    interval: testParams.interval,
                    userId: user.user?.sub ?? "",
                    type: testParams.type,
                    apiKey: apiKey,
                    timestamp: `${Math.floor(Date.now() / 1000)}`,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                setError(error.error);
                setIsLoading(false);
                scrollToTop(document);
                return;
            }

            const data = await response.json();
            setTestResult(data);
            scrollToTop(document);
        } catch (error) {
            setError("Something went wrong kindly try again later");
            scrollToTop(document);
        }

        setIsLoading(false);
    };

    const backAction: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setTestResult(null);
    };

    return (
        <>
            <div className="col-span-1 md:col-span-2"></div>
            <div className="col-span-10 md:col-span-8 row-span-1 min-h-screen flex flex-col justify-start items-center space-y-8">
                {!user.user && (
                    <div className="w-full">
                        <div role="alert" className="alert alert-info">
                            <Info />
                            <span>
                                You are using the static version. Login to be
                                able to use the real version.
                            </span>
                        </div>
                    </div>
                )}
                {error && (
                    <div className="w-full">
                        <div role="alert" className="alert alert-error">
                            <XOctagon />
                            <span>{error}</span>
                        </div>
                    </div>
                )}
                <XComponentStack
                    activeComponent={testResult ? 2 : 1}
                    components={[
                        <FormView
                            key={1}
                            data={testResult}
                            handleRunTest={handleRunTest}
                            isCalculating={isLoading}
                        />,
                        <ResultView
                            key={2}
                            data={testResult}
                            backAction={backAction}
                        />,
                    ]}
                />
            </div>
            <div className="col-span-1 md:col-span-2"></div>
        </>
    );
};

export default App;
