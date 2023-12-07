import React from "react";

const ResultPage = ({ data }: { data: any }) => {
    const calculateChangePercentage = (newValue: number, oldValue: number) => {
        return ((newValue - oldValue) / oldValue) * 100.0;
    };

    return (
        <div className="snap-none w-screen p-6 md:p-16 flex flex-col justify-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Transactions:
            </h1>
            <div className="h-12"></div>
            <table className="table">
                <thead className="text-xl font-bold text-neutral-content">
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>
                            Cash{" "}
                            <span className="text-base text-gray-400">
                                (Profit so far)
                            </span>
                        </th>
                        <th>Stocks</th>
                    </tr>
                </thead>
                <tbody className="text-xl">
                    {data.actions.map((action: any, index: number) => (
                        <tr key={index}>
                            <th className="font-bold">{index + 1}</th>
                            <td>{action.date}</td>
                            <td>{action.price.toFixed(2)}</td>
                            <td
                                className={
                                    action.action === "buy"
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
                            >
                                {action.action}
                            </td>
                            <td className="font-bold">
                                {index % 2 === 1 && index !== 1 ? (
                                    <>
                                        ${action.cash.toFixed(2)}
                                        <span className="text-base font-normal text-gray-400">
                                            {" "}
                                            (
                                            {calculateChangePercentage(
                                                action.cash,
                                                data.actions[1].cash
                                            ).toFixed(2)}
                                            %)
                                        </span>
                                    </>
                                ) : (
                                    <>${action.cash.toFixed(2)}</>
                                )}
                            </td>
                            <td>{action.stocks.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="h-12"></div>
        </div>
    );
};

export default ResultPage;
