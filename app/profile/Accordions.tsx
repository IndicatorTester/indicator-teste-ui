import React from "react";

type AccordionsProps = {
    apiKey: string | null;
    saveApiKey: React.FormEventHandler<HTMLFormElement>;
    resetApiKey: React.MouseEventHandler<HTMLButtonElement>;
};

const Accordions: React.FC<AccordionsProps> = ({
    apiKey,
    saveApiKey,
    resetApiKey,
}) => {
    return (
        <div className="w-full flex flex-col space-y-2">
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="profile-accordion" />
                <div className="collapse-title font-black">Your Tests</div>
                <div className="collapse-content">
                    <ul>
                        <li>#1</li>
                        <li>#2</li>
                        <li>#3</li>
                        <li>#4</li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="profile-accordion" />
                <div className="collapse-title font-black">Subscription</div>
                <div className="collapse-content">
                    <p>Verify your email to start the free trial.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="profile-accordion" />
                <div className="collapse-title font-black">API Key</div>
                <div className="collapse-content">
                    <form  onSubmit={saveApiKey} className="flex justify-start items-center space-x-2">
                        <input
                            type="text"
                            name="apiKey"
                            placeholder={apiKey ?? "Your api key"}
                            className="input input-bordered w-full"
                        />
                        <button
                            type="submit"
                            className="btn btn-neutral"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Accordions;
