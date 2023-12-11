import React from "react";
import TransactionsTimeline from "./TransactionsTimeline";
import Title from "./Title";

const TransactionsPage = () => {
    return (
        <div className="snap-start lg:h-screen w-screen flex flex-col lg:flex-row lg:items-stretch items-center px-4 py-8 lg:py-0 lg:px-12">
            <Title />
            <TransactionsTimeline />
        </div>
    );
};

export default TransactionsPage;
