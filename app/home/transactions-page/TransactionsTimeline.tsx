import React from "react";

const TransactionsTimeline = () => {
    return (
        <div className="bg-neutral p-4 rounded-3xl shadow-xl">
            <table className="table overflow-x-auto">
                <thead className="lg:text-xl md:text-lg sm:text-sm font-black text-neutral-content">
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Cash</th>
                        <th>Stocks</th>
                    </tr>
                </thead>
                <tbody className="lg:text-xl md:text-lg sm:text-sm">
                    <tr>
                        <th className="font-black">#1</th>
                        <td>2023-02-14</td>
                        <td>2343.976</td>
                        <td className="font-black text-green-400">Buy</td>
                        <td className="font-black">$0</td>
                        <td>0.04</td>
                    </tr>
                    <tr>
                        <th className="font-black">#2</th>
                        <td>2023-04-23</td>
                        <td>2524.991</td>
                        <td className="font-black text-red-500">Sell</td>
                        <td className="font-black">$1539.693</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="font-black">#3</th>
                        <td>2023-06-02</td>
                        <td>2094.072</td>
                        <td className="font-black text-green-400">Buy</td>
                        <td className="font-black">$0</td>
                        <td>0.06</td>
                    </tr>
                    <tr>
                        <th className="font-black">#4</th>
                        <td>2023-09-17</td>
                        <td>3091.901</td>
                        <td className="font-black text-red-500">Sell</td>
                        <td className="font-black">$2914.019</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TransactionsTimeline;
