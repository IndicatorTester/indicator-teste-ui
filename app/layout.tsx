import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import "tailwindcss/tailwind.css";

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
            className="h-screen w-screen overflow-hidden text-neutral-content"
        >
            <UserProvider>
                <body>{children}</body>
            </UserProvider>
        </html>
    );
}
