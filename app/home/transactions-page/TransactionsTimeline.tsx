import React from "react";

const TransactionsTimeline = () => {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <time className="italic text-gray-400">
                        2023/02/10
                    </time>
                    <div className="text-2xl font-black text-green-400 mt-3 mb-2">Buy</div>
                    <div className="text-start md:text-xl" >
                        Stocks: 1.98765
                        <br />
                        Cash: 0<br />
                        price: 2.5
                    </div>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="timeline-end md:text-start mb-10">
                    <time className="italic text-gray-400">
                        2023/04/05
                    </time>
                    <div className="text-2xl font-black text-red-500 mt-3 mb-2">Sell</div>
                    <div className="md:text-xl" >
                        Stocks: 0
                        <br />
                        Cash: 150.264<br />
                        price: 2.74
                    </div>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <time className="italic text-gray-400">
                        2023/06/17
                    </time>
                    <div className="text-2xl font-black text-green-400 mt-3 mb-2">Buy</div>
                    <div className="text-start md:text-xl" >
                        Stocks: 10.9817
                        <br />
                        Cash: 0<br />
                        price: 1.52
                    </div>
                </div>
                <hr />
            </li>
            
        </ul>
    );
};

export default TransactionsTimeline;
