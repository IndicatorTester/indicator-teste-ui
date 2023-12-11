import React from "react";

const SymbolsView = ({ data }: { data: any }) => {
    const exchanges: string[] = Object.keys(data.symbolsData);

    return (
        <div className="flex flex-col items-center">
            <div className="flex">
                {exchanges.map((exchange, index) => (
                    <input
                        key={index}
                        type="button"
                        value={exchange}
                        className={`w-32 mx-4 btn ${
                            data.selectedExchange === exchange ? "btn-info" : ""
                        }`}
                        onClick={() => data.handleExchangeChange(exchange)}
                    />
                ))}
            </div>
            <div className="h-8"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-4">
                {data.symbolsData[data.selectedExchange].map(
                    (symbolData: any, index: number) => (
                        <div>
                            <p
                                key={index}
                                className="px-4 pt-4 text-center font-black text-lg"
                            >
                                {symbolData.symbol}
                            </p>
                            <p
                                key={index}
                                className="p-1 text-center text-sm text-gray-400"
                            >
                                {symbolData.name}
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default SymbolsView;
