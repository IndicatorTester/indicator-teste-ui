import { UserProvider } from "@auth0/nextjs-auth0/client";
import AuthWrapper from "../wrapper/AuthWrapper";

export const metadata = {
    title: "XIndicator",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <UserProvider>
            <AuthWrapper>{children}</AuthWrapper>
        </UserProvider>
    );
}
