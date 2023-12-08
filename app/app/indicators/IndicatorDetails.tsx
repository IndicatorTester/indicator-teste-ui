import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const IndicatorDetails = ({ data }: { data: any }) => {
    return (
        <div className="w-full flex flex-col">
            <h1 className="text-3xl font-bold">Details:</h1>
            <div className="h-8"></div>
            <p className="text-xl">{data.details}</p>
            <div className="h-12"></div>
            <h1 className="text-3xl font-bold">Example:</h1>
            <div className="h-8"></div>
            <p className="text-xl italic">{data.example}</p>
            <div className="h-12"></div>
            <h1 className="text-3xl font-bold">Code:</h1>
            <div className="h-8"></div>
            <div>
                <div className="mockup-code">
                    <SyntaxHighlighter language="python" style={vscDarkPlus}>
                        {data.code}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default IndicatorDetails;
