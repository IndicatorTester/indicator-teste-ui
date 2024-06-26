"use client";

import React, { useState, useEffect } from "react";

export type Option = {
    value: string;
    label: string;
};

type XSelectProps = {
    value?: string;
    options: Option[];
    disabled?: boolean;
    placeholder?: string;
    selectedHandler: (selectedValue: string) => void;
};

const XSelect: React.FC<XSelectProps> = ({
    value,
    options,
    disabled,
    placeholder,
    selectedHandler,
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [visibleOptions, setVisibleOptions] = useState<Option[]>([]);
    const [selectedOption, setSelectedOption] = useState<Option | undefined>(
        undefined
    );

    useEffect(() => {
        setVisibleOptions(
            options
                .filter(
                    (option) =>
                        searchTerm.trim() !== "" &&
                        option.label
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                )
                .slice(0, 8)
        );
    }, [searchTerm, options]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setSelectedOption(undefined);
        selectedHandler("");
    };

    const handleOptionSelect = (selected: Option) => {
        setSelectedOption(selected);
        selectedHandler(selected.value);
        setSearchTerm("");
    };

    return (
        <div className="w-full flex flex-col overflow-auto">
            <input
                type="text"
                placeholder={placeholder || "Search for an option..."}
                value={
                    selectedOption?.label ?? searchTerm.length === 0
                        ? value
                        : searchTerm
                }
                onChange={handleInputChange}
                className="input input-bordered border-neutral-content h-12"
                disabled={disabled ?? true}
            />
            {visibleOptions.length !== 0 ? (
                <ul className="max-w-[240px] grid grid-cols-1 gap-2 bg-neutral menu rounded-xl text-start absolute z-[1] mt-14 overflow-auto">
                    {visibleOptions.map((option) => (
                        <li
                            key={option.value}
                            value={option.value}
                            className="lg:text-lg text-base"
                        >
                            <button onClick={() => handleOptionSelect(option)}>
                                {option.label}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default XSelect;
