"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React, { ReactNode } from "react";
import Loading from "../loading";
import NotFoundPage from "../not-found";
import { redirect } from "next/navigation";

const AuthWrapper = ({ children }: { children: ReactNode }) => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <Loading />;
    if (error) return <NotFoundPage />;

    if (!user) {
        redirect("/api/auth/login");
        return null;
    }

    return <>{children}</>;
};

export default AuthWrapper;
