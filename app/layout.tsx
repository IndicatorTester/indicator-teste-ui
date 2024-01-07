import "./globals.css";
import "tailwindcss/tailwind.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import XNavBar from "./components/XNavBar";
import XFooter from "./components/XFooter";

export const metadata = {
    title: "XIndicator",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-[100%]">
            <head>
                <link rel="icon" href="/Logo.svg" sizes="any" />
            </head>
            <body className="h-[100%] text-neutral-content">
                <UserProvider>
                    <XNavBar />
                    <div className="grid grid-rows-expand grid-cols-12">
                        {children}
                    </div>
                </UserProvider>
                <XFooter />
            </body>
        </html>
    );
}
