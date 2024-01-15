import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const IndicatorDetails = ({ data }: { data: any }) => {
    return (
        <div className="w-full flex flex-col space-y-8">
            <div className="w-full flex flex-col space-y-4">
                <h1 className="text-2xl font-bold">Usages:</h1>
                {data.shorts.map((short: any, index: number) => (
                    <div key={index} className="w-full flex flex-col space-y-2">
                        <h2 className="text-lg">
                            <span className="font-bold">{index + 1}.</span>{" "}
                            {short.name}
                        </h2>
                        <h3 className="text-md ml-4 flex flex-col space-y-1">
                            <p>
                                <span className="font-bold">• </span>Required
                                Fields:
                            </p>
                            <ul className="ml-4">
                                {short.requiredFields.map(
                                    (field: any, index: number) => (
                                        <p key={index}>
                                            <span className="font-bold">
                                                ◦ {field.name}:{" "}
                                            </span>
                                            {field.description}
                                        </p>
                                    )
                                )}
                            </ul>
                        </h3>
                        {short.optionalFields && (
                            <>
                                <h3 className="text-md ml-4 flex flex-col space-y-1">
                                    <p>
                                        <span className="font-bold">• </span>
                                        Optional Fields:
                                    </p>

                                    <ul className="ml-4">
                                        {short.optionalFields.map(
                                            (field: any, index: number) => (
                                                <p key={index}>
                                                    <span className="font-bold">
                                                        ◦ {field.name}:{" "}
                                                    </span>
                                                    {field.description} With
                                                    default value [{" "}
                                                    <span className="font-black">
                                                        {field.defaultValue}
                                                    </span>{" "}
                                                    ].
                                                </p>
                                            )
                                        )}
                                    </ul>
                                </h3>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-col space-y-4">
                <h1 className="text-2xl font-bold">Examples:</h1>
                <ul className="ml-4">
                    {data.examples.map((example: any, index: number) => (
                        <p key={index}>
                            <span className="font-bold">• </span>
                            {example}
                        </p>
                    ))}
                </ul>
            </div>
            <div className="w-full flex flex-col space-y-4">
                <h1 className="text-2xl font-bold">Code:</h1>
                <div className="mockup-code">
                    <SyntaxHighlighter language="python" style={dracula}>
                        {data.code}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default IndicatorDetails;
