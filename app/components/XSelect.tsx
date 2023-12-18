"use client";

import React, { useState, useEffect } from "react";

export type Option = {
    value: string;
    label: string;
};

type XSelectProps = {
    options: Option[];
    disabled?: boolean;
    placeholder?: string;
    selectedHandler: (selectedValue: string) => void;
};

const XSelect: React.FC<XSelectProps> = ({
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
                .slice(0, 25)
        );
    }, [searchTerm, options]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setSelectedOption(undefined);
    };

    const handleOptionSelect = (selected: Option) => {
        setSelectedOption(selected);
        selectedHandler(selected.value);
        setSearchTerm("");
    };

    return (
        <div className="w-full flex flex-col">
            <input
                type="text"
                placeholder={placeholder || "Search for an option..."}
                value={selectedOption?.label ?? searchTerm}
                onChange={handleInputChange}
                className="input input-bordered border-neutral-content h-12"
                disabled={disabled ?? true}
            />
            {visibleOptions.length !== 0 ? (
                <ul className="menu bg-base-200 rounded-xl text-start absolute z-[1] mt-14 max-h-56 overflow-y-scroll">
                    {visibleOptions.map((option) => (
                        <li
                            key={option.value}
                            value={option.value}
                            className="w-fit"
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
