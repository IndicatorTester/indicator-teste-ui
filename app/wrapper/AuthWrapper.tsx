"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React, { ReactNode } from "react";
import Loading from "../loading";

const AuthWrapper = ({ children }: { children: ReactNode }) => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <Loading />;

    return <>{children}</>;
};

export default AuthWrapper;
