import { UserContext } from "@auth0/nextjs-auth0/client";
import React from "react";
import { AlertTriangle, Info } from "react-feather";

type ProfileAlertProps = {
    user: UserContext;
    apiKey: string | null;
    infoMessage: string | null;
};

const ProfileAlert: React.FC<ProfileAlertProps> = ({
    user,
    apiKey,
    infoMessage,
}) => {
    return (
        <div className="w-full flex flex-col space-y-2">
            {!user.user?.email_verified && (
                <div className="w-full">
                    <div role="alert" className="alert alert-warning">
                        <AlertTriangle />
                        <span>Warning: Your email is not verified</span>
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
