import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const IndicatorDetails = ({ data }: { data: any }) => {
    return (
        <div className="w-full flex flex-col">
            <h1 className="text-3xl font-black">Details:</h1>
            <div className="h-8"></div>
            <p className="text-xl">{data.details}</p>
            <div className="h-12"></div>
            <h1 className="text-3xl font-black">Example:</h1>
            <div className="h-8"></div>
            <p className="text-xl italic">{data.example}</p>
            <div className="h-12"></div>
            <h1 className="text-3xl font-black">Code:</h1>
            <div className="h-8"></div>
            <div>
                <div className="mockup-code border border-neutral">
                    <SyntaxHighlighter language="python" style={dracula}>
                        {data.code}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default IndicatorDetails;
