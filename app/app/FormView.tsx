"use client";

import React, { useState } from "react";
import XSelect, { Option } from "../components/XSelect";

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
    handleRunTest: (testParams: TestParams) => void;
};

const FormView: React.FC<FormViewProps> = ({ handleRunTest }) => {
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

    return (
        <div className="w-full flex flex-col space-y-8">
            <div className="w-full flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-8 justify-start items-center">
                <select
                    name="type"
                    defaultValue={type.length === 0 ? "Type" : type}
                    onChange={handleTypeChange}
                    className="w-full select border-neutral-content font-black"
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
                    defaultValue={interval.length === 0 ? "Interval" : interval}
                    onChange={handleIntervalChange}
                    className="w-full select border-neutral-content font-black"
                    disabled={type.length === 0}
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
            </div>
            <div className="w-full flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-8 justify-center items-center">
                {isLoading ? (
                    <span className="loading loading-ring loading-lg"></span>
                ) : (
                    <XSelect
                        options={symbols ?? []}
                        placeholder="Symbol"
                        selectedHandler={symbolSelectHandler}
                        disabled={interval.length === 0}
                    />
                )}
            </div>
            <div className="w-full flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-8 justify-start items-center">
                <input
                    type="date"
                    defaultValue={startDate}
                    className="input input-bordered w-full border-neutral-content"
                    onChange={handleStartDateChange}
                    placeholder="Start Date"
                    disabled={symbol.length === 0}
                />
                <input
                    type="date"
                    defaultValue={endDate}
                    className="input input-bordered w-full border-neutral-content"
                    onChange={handleEndDateChange}
                    placeholder="End Date"
                    disabled={startDate.length === 0}
                />
            </div>
            <div className="w-full flex flex-col space-y-2 justify-center items-start">
                <textarea
                    className="w-full h-32 textarea textarea-bordered border-neutral-content"
                    defaultValue={indicator.length === 0 ? "" : indicator}
                    placeholder="Your Indicator"
                    disabled={endDate.length === 0}
                    onChange={handleIndicatorChange}
                ></textarea>
                {indicatorMessage.length !== 0 ? (
                    <p className="text-red-500 font-bold">
                        {" "}
                        {indicatorMessage}{" "}
                    </p>
                ) : null}
            </div>
            <div className="w-full flex justify-center items-center">
                {indicator.length !== 0 ? (
                    <button
                        onClick={runTest}
                        className="btn btn-active bg-gradient-to-r from-pink-700 to-red-500 w-48 h-12"
                    >
                        Run The Test
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default FormView;
