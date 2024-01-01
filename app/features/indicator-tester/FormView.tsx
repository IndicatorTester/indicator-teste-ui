"use client";

import React, { useState } from "react";
import XSelect, { Option } from "../../components/XSelect";

const INDICATOR_REGEX = /^[a-zA-Z0-9,()+\-*/|&<>=. ]+$/;

export type TestParams = {
    type: string;
    interval: string;
    symbol: string;
    exchange: string;
    startDate: string;
    endDate: string;
    indicator: string;
};

type FormViewProps = {
    data: any;
    isCalculating: boolean;
    handleRunTest: (testParams: TestParams) => void;
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
    const [isLoading, setIsLoading] = useState(false);
    const [symbol, setSymbol] = useState("");
    const [interval, setInterval] = useState("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [indicator, setIndicator] = useState<string>("");
    const [indicatorMessage, setIndicatorMessage] = useState<string>("");

    const handleTypeChange: React.ChangeEventHandler<
        HTMLSelectElement
    > = async (e) => {
        setIsLoading(true);
        const selectedValue = e.target.value;

        const response = await fetch(
            `${process.env.TWELVE_DATA_API}/${selectedValue}`
        );

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

        const symbolsList: Option[] = data.map((object: any) => ({
            value:
                object.symbol +
                (object.exchange ? ` - ${object.exchange}` : ""),
            label:
                object.symbol +
                (object.exchange ? ` - ${object.exchange}` : ""),
        }));

        setSymbols(symbolsList);

        setType(selectedValue);
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

    const handleStartDateChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const rawDateValue = event.target.value;

        const formattedDate = new Date(rawDateValue)
            .toISOString()
            .split("T")[0];

        setStartDate(formattedDate);
    };

    const handleEndDateChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const rawDateValue = event.target.value;

        const formattedDate = new Date(rawDateValue)
            .toISOString()
            .split("T")[0];

        setEndDate(formattedDate);
    };

    const handleIndicatorChange: React.ChangeEventHandler<
        HTMLTextAreaElement
    > = (event) => {
        setIndicator("");
        const value = event.target.value;

        if (value.length === 0) {
            setIndicatorMessage("");
            return;
        }

        if (!INDICATOR_REGEX.test(value)) {
            setIndicatorMessage("Invalid syntax");
            return;
        }

        setIndicatorMessage("");
        setIndicator(value);
    };

    const runTest: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        const testParams: TestParams = {
            type: type,
            interval: interval,
            symbol: symbol.split(" ")[0],
            startDate: startDate,
            endDate: endDate,
            exchange: type === "cryptocurrencies" ? "" : symbol.split(" ")[2],
            indicator: indicator,
        };

        handleRunTest(testParams);
    };

    return data ? (
        <div></div>
    ) : (
        <div className="w-full flex flex-col space-y-16 justify-center items-center">
            <div className="max-w-[720px] bg-base-200 p-8 rounded-3xl flex flex-col space-y-8 h-fit">
                <h1 className="text-5xl font-bold">Indicator Tester</h1>
                <div>
                    <p className="text-gray-400">
                        Have questions or feedback? We are here to help. Send us
                        a message, or an email on{" "}
                        <span className="underline underline-offset-2 text-neutral-content">
                            support@xindicator.com
                        </span>
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
                            <XSelect
                                options={symbols ?? []}
                                placeholder="Symbol"
                                selectedHandler={symbolSelectHandler}
                                defaultValue={symbol}
                                disabled={type.length === 0}
                            />
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
                            className="w-full h-48 textarea textarea-bordered border-neutral-content text-base"
                            defaultValue={
                                indicator.length === 0 ? "" : indicator
                            }
                            placeholder="Your Indicator"
                            onChange={handleIndicatorChange}
                        ></textarea>
                        {indicatorMessage.length !== 0 ? (
                            <p className="text-red-500 font-bold">
                                {indicatorMessage}
                            </p>
                        ) : null}
                    </div>
                    <div className="flex justify-center items-center col-span-2">
                        {isCalculating ? (
                            <span className="loading loading-ring loading-lg"></span>
                        ) : (
                            <button
                                onClick={runTest}
                                className="btn btn-active bg-gradient-to-r from-pink-700 to-red-500 w-48 h-12"
                            >
                                Run The Test
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormView;
