import React from "react";

type XComponentStackProps = {
    components: React.ReactNode[];
    activeComponent: number;
};

const XComponentStack: React.FC<XComponentStackProps> = ({
    components,
    activeComponent,
}) => {
    return (
        <div className="w-full inline-grid" >
            {components.map((component, index) => {
                return (
                    <div
                        key={index}
                        className="transition-opacity duration-500 col-start-1 row-start-1 overflow-auto"
                        style={{
                            opacity: activeComponent - 1 === index ? 1 : 0,
                            zIndex: activeComponent - 1 === index ? 0 : -1,
                        }}
                    >
                        {component}
                    </div>
                );
            })}
        </div>
    );
};

export default XComponentStack;
