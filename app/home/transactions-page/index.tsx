import React from "react";
import TransactionsTimeline from "./TransactionsTimeline";
import Title from "./Title";

const TransactionsPage = () => {
    return (
        <div className="flex flex-col space-y-12 justify-start items-center text-center">
            <Title />
            <TransactionsTimeline />
        </div>
    );
};

export default TransactionsPage;
