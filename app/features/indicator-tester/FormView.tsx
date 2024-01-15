"use client";

import React, { useState } from "react";
import XSelect, { Option } from "@/app/components/XSelect";
import { validBooleanExpression, validBrackets } from "@/utils/indicator";
import { Command } from "react-feather";
import Link from "next/link";

const INDICATOR_REGEX = /^[a-zA-Z0-9,()+\-*/|&<>=.! \n]+$/;

export type TestParams = {
    type: string;
    interval: string;
    symbol: string;
    exchange: string;
    startDate: string;
    endDate: string;
    buyIndicator: string;
    sellIndicator: string;
};

type FormViewProps = {
    data: any;
    isCalculating: boolean;
    handleRunTest: (
        testParams: TestParams | null,
        error: string | null
    ) => void;
};

const FormView: React.FC<FormViewProps> = ({
    data,
    isCalculating,
    handleRunTest,
}) => {
    const intervals = [
        { value: "1min", label: "One Minute" },
        { value: "5min", label: "Five Minutes" },
        { value: "15min", label: "15 Minutes" },
        { value: "30min", label: "30 Minutes" },
        { value: "45min", label: "45 Minutes" },
        { value: "1h", label: "One Hour" },
        { value: "2h", label: "Two Hours" },
        { value: "4h", label: "Four Hours" },
        { value: "1day", label: "One Day" },
        { value: "1week", label: "One Week" },
        { value: "1month", label: "One Month" },
    ];
    const [typeOptions, setTypeOptions] = useState([
        { value: "stocks", label: "Stock" },
        { value: "cryptocurrencies", label: "Cryptocurrencies" },
        { value: "etf", label: "ETF" },
        { value: "indices", label: "Indices" },
    ]);
    const [type, setType] = useState("");
    const [symbols, setSymbols] = useState<Option[] | null>(null);
    const [exchanges, setExchanges] = useState<Option[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [symbol, setSymbol] = useState("");
    const [exchange, setExchange] = useState("");
    const [interval, setInterval] = useState("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [buyIndicator, setBuyIndicator] = useState<string>("");
    const [buyIndicatorMessage, setBuyIndicatorMessage] = useState<string>("");
    const [sellIndicator, setSellIndicator] = useState<string>("");
    const [sellIndicatorMessage, setSellIndicatorMessage] =
        useState<string>("");

    const handleTypeChange: React.ChangeEventHandler<
        HTMLSelectElement
    > = async (e) => {
        setIsLoading(true);
        setSymbol("");
        setExchange("");
        const selectedValue = e.target.value;
        handleRunTest(null, null);

        await fetch(`${process.env.TWELVE_DATA_API}/${selectedValue}`)
            .then(async (response) => {
                const stream = response.body;
                const decoder = new TextDecoder();
                let chunks = "";
                if (stream != null) {
                    const reader = stream.getReader();
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;
                        chunks += decoder.decode(value);
                    }
                }

                const data = JSON.parse(chunks)["data"];

                const symbolsSet: Set<string> = new Set();
                data.map((object: any) => symbolsSet.add(object.symbol));
                const symbolsList: Option[] = [];
                symbolsSet.forEach((object: any) =>
                    symbolsList.push({
                        value: object,
                        label: object,
                    })
                );
                setSymbols(symbolsList);

                if ("cryptocurrencies" !== selectedValue) {
                    const exchangesSet: Set<string> = new Set();
                    data.map((object: any) =>
                        exchangesSet.add(object.exchange)
                    );
                    const exchangesList: Option[] = [];
                    exchangesSet.forEach((object: any) =>
                        exchangesList.push({
                            value: object,
                            label: object,
                        })
                    );
                    setExchanges(exchangesList);
                }

                setType(selectedValue);
            })
            .catch((error) => {
                console.error("Unable to load the needed symbols", error);
                handleRunTest(
                    null,
                    "Unable to load the needed symbols, kindly try again later"
                );
            });

        setIsLoading(false);
    };

    const handleIntervalChange: React.ChangeEventHandler<
        HTMLSelectElement
    > = async (e) => {
        const selectedValue = e.target.value;

        setInterval(selectedValue);
    };

    const symbolSelectHandler: (input: string) => void = (symbol) => {
        setSymbol(symbol);
    };

    const exchangeSelectHandler: (input: string) => void = (exchange) => {
        setExchange(exchange);
    };

    const handleStartDateChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        try {
            const rawDateValue = event.target.value;
            const formattedDate = new Date(rawDateValue)
                .toISOString()
                .split("T")[0];
            setStartDate(formattedDate);
        } catch (error) {
            setStartDate("");
        }
    };

    const handleEndDateChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        try {
            const rawDateValue = event.target.value;
            const formattedDate = new Date(rawDateValue)
                .toISOString()
                .split("T")[0];
            setEndDate(formattedDate);
        } catch (error) {
            setEndDate("");
        }
    };

    const handleBuyIndicatorChange: React.ChangeEventHandler<
        HTMLTextAreaElement
    > = (event) => {
        setBuyIndicator("");
        const value = event.target.value;

        if (value.length === 0) {
            setBuyIndicatorMessage("");
            return;
        }

        if (value.length > 300) {
            setBuyIndicatorMessage(
                "Indicator must be less than 300 characters"
            );
            return;
        }

        if (!INDICATOR_REGEX.test(value)) {
            setBuyIndicatorMessage("Invalid syntax");
            return;
        }

        if (!validBrackets(value)) {
            setBuyIndicatorMessage("Missing one or more brackets");
            return;
        }

        if (
            !validBooleanExpression(value.replace(/\n/g, "").replace(/ /g, ""))
        ) {
            setBuyIndicatorMessage(
                "This indicator does not result to a True/False"
            );
            return;
        }

        setBuyIndicatorMessage("");
        setBuyIndicator(value);
    };

    const handleSellIndicatorChange: React.ChangeEventHandler<
        HTMLTextAreaElement
    > = (event) => {
        setSellIndicator("");
        const value = event.target.value;

        if (value.length === 0) {
            setSellIndicatorMessage("");
            return;
        }

        if (value.length > 300) {
            setSellIndicatorMessage(
                "Indicator must be less than 300 characters"
            );
            return;
        }

        if (!INDICATOR_REGEX.test(value)) {
            setSellIndicatorMessage("Invalid syntax");
            return;
        }

        if (!validBrackets(value)) {
            setSellIndicatorMessage("Missing one or more brackets");
            return;
        }

        if (
            !validBooleanExpression(value.replace(/\n/g, "").replace(/ /g, ""))
        ) {
            setSellIndicatorMessage(
                "This indicator does not result to a True/False"
            );
            return;
        }

        setSellIndicatorMessage("");
        setSellIndicator(value);
    };

    const runTest: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        handleRunTest(null, null);

        if (type.length === 0) {
            handleRunTest(null, "Choose a type!");
        } else if (interval.length === 0) {
            handleRunTest(null, "Choose an interval!");
        } else if (type !== "cryptocurrencies" && exchange.length === 0) {
            handleRunTest(null, "Exchange is required for this type!");
        } else if (symbol.length === 0) {
            handleRunTest(null, "Choose a Symbol!");
        } else if (startDate.length === 0) {
            handleRunTest(null, "Choose a valid start date!");
        } else if (endDate.length === 0) {
            handleRunTest(null, "Choose a valid end date!");
        } else if (startDate >= endDate) {
            handleRunTest(null, "End date must be after the start date!");
        } else if (buyIndicator.length === 0) {
            handleRunTest(null, "Empty or Invalid buy indicator!");
        } else if (sellIndicator.length === 0) {
            handleRunTest(null, "Empty or Invalid sell indicator!");
        } else {
            const testParams: TestParams = {
                type: type,
                interval: interval,
                symbol: symbol.split(" ")[0],
                startDate: startDate,
                endDate: endDate,
                exchange: type === "cryptocurrencies" ? "" : exchange,
                buyIndicator: buyIndicator,
                sellIndicator: sellIndicator,
            };

            handleRunTest(testParams, null);
        }
    };

    return data ? (
        <div></div>
    ) : (
        <div className="w-full flex flex-col space-y-16 justify-center items-center">
            <div className="w-full max-w-[720px] bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 h-fit">
                <h1 className="text-5xl font-bold">Indicator Tester</h1>
                <div>
                    <p className="text-gray-400">
                        Do you want to test a signal indicator? Plug in the
                        required data and run a back test. See:{" "}
                        <Link
                            href={"/guidelines/writing-indicators"}
                            className="underline underline-offset-1 text-neutral-content"
                        >
                            Indicator test guide
                        </Link>
                        .
                    </p>
                </div>
                <div className="divider"></div>
                <div className="w-full grid grid-cols-2 gap-6">
                    <select
                        name="type"
                        defaultValue={type.length === 0 ? "Type" : type}
                        onChange={handleTypeChange}
                        className="w-full select border-neutral-content font-black md:col-span-1 col-span-2"
                    >
                        <option value="Type" disabled>
                            Choose Symbol Type
                        </option>
                        {typeOptions.map((type, index) => (
                            <option key={index} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                    <select
                        name="interval"
                        defaultValue={
                            interval.length === 0 ? "Interval" : interval
                        }
                        onChange={handleIntervalChange}
                        className="w-full select border-neutral-content font-black md:col-span-1 col-span-2"
                    >
                        <option value="Interval" disabled>
                            Choose Interval
                        </option>
                        {intervals.map((interval, index) => (
                            <option key={index} value={interval.value}>
                                {interval.label}
                            </option>
                        ))}
                    </select>
                    <div className="flex justify-center items-center col-span-2">
                        {isLoading ? (
                            <span className="loading loading-ring loading-lg"></span>
                        ) : (
                            <div className="w-full flex md:flex-row flex-col justify-center items-center md:space-x-6 md:space-y-0 space-y-6">
                                <XSelect
                                    options={exchanges ?? []}
                                    placeholder="Exchange"
                                    selectedHandler={exchangeSelectHandler}
                                    value={exchange}
                                    disabled={
                                        type.length === 0 ||
                                        type === "cryptocurrencies"
                                    }
                                />
                                <XSelect
                                    options={symbols ?? []}
                                    placeholder="Symbol"
                                    selectedHandler={symbolSelectHandler}
                                    value={symbol}
                                    disabled={
                                        (type !== "cryptocurrencies" &&
                                            exchange.length === 0) ||
                                        type.length === 0
                                    }
                                />
                            </div>
                        )}
                    </div>
                    <input
                        type="date"
                        defaultValue={startDate}
                        className="input input-bordered w-full border-neutral-content md:col-span-1 col-span-2"
                        onChange={handleStartDateChange}
                        placeholder="Start Date"
                    />
                    <input
                        type="date"
                        defaultValue={endDate}
                        className="input input-bordered w-full border-neutral-content md:col-span-1 col-span-2"
                        onChange={handleEndDateChange}
                        placeholder="End Date"
                    />
                    <div className="w-full flex flex-col space-y-2 justify-center items-start col-span-2">
                        <textarea
                            className="w-full h-28 textarea textarea-bordered border-neutral-content text-base"
                            defaultValue={
                                buyIndicator.length === 0 ? "" : buyIndicator
                            }
                            placeholder="Buy When. Example: sma(close) < sma(close, 35)"
                            onChange={handleBuyIndicatorChange}
                        ></textarea>
                        {buyIndicatorMessage.length !== 0 ? (
                            <p className="text-red-500 font-bold">
                                {buyIndicatorMessage}
                            </p>
                        ) : null}
                    </div>
                    <div className="w-full flex flex-col space-y-2 justify-center items-start col-span-2">
                        <textarea
                            className="w-full h-28 textarea textarea-bordered border-neutral-content text-base"
                            defaultValue={
                                sellIndicator.length === 0 ? "" : sellIndicator
                            }
                            placeholder="Sell When. Example: sma(close) > sma(open, 28)"
                            onChange={handleSellIndicatorChange}
                        ></textarea>
                        {sellIndicatorMessage.length !== 0 ? (
                            <p className="text-red-500 font-bold">
                                {sellIndicatorMessage}
                            </p>
                        ) : null}
                    </div>
                    <div className="flex justify-center items-center col-span-2">
                        {isCalculating ? (
                            <span className="loading loading-ring loading-lg"></span>
                        ) : (
                            <button
                                onClick={runTest}
                                disabled={
                                    buyIndicator.length === 0 ||
                                    sellIndicator.length === 0
                                }
                                className="btn btn-circle btn-info"
                            >
                                <Command className="text-neutral" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormView;
