import { UserContext } from "@auth0/nextjs-auth0/client";
import React from "react";
import { AlertTriangle, Info, XOctagon } from "react-feather";

type ProfileAlertProps = {
    user: UserContext;
    apiKey: string | null;
    infoMessage: string | null;
    errorMessage: string | null;
};

const ProfileAlert: React.FC<ProfileAlertProps> = ({
    user,
    apiKey,
    infoMessage,
    errorMessage,
}) => {
    return (
        <div className="w-full flex flex-col space-y-2">
            {errorMessage && (
                <div className="w-full">
                    <div role="alert" className="alert alert-error">
                        <XOctagon />
                        <span>Error: {errorMessage}</span>
                    </div>
                </div>
            )}
            {!user.user?.email_verified && (
                <div className="w-full">
                    <div role="alert" className="alert alert-warning">
                        <AlertTriangle />
                        <span>Warning: Verify your email to get unlimited Bronze tests</span>
                    </div>
                </div>
            )}
            {!apiKey && (
                <div className="w-full">
                    <div role="alert" className="alert alert-warning">
                        <AlertTriangle />
                        <span>Warning: Add your Twelvedata api key</span>
                    </div>
                </div>
            )}
            {infoMessage && (
                <div className="w-full">
                    <div role="alert" className="alert alert-info">
                        <Info />
                        <span>{infoMessage}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileAlert;
