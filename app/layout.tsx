import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata = {
    title: "Indicator Tester",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="h-screen w-screen overflow-hidden"
        >
            <UserProvider>
                <body>{children}</body>
            </UserProvider>
        </html>
    );
}
