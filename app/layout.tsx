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
                    <div className="grid grid-rows-expand grid-cols-12 min-h-screen">
                        <div className="col-span-2 h-fit"></div>
                        <div className="col-span-8 row-span-1 h-fit">
                            <XNavBar />
                        </div>
                        <div className="col-span-2 h-fit"></div>
                        {children}
                    </div>
                </UserProvider>
                <XFooter />
            </body>
        </html>
    );
}
