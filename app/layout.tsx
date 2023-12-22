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
        <html lang="en" className="h-[100%]" >
            <head>
                <link rel="icon" href="/Logo.svg" sizes="any" />
            </head>
            <body className="min-h-[100%] text-neutral-content">
                <UserProvider>
                    <div className="grid grid-rows-expand grid-cols-12 min-h-screen">
                        <div className="col-span-2"></div>
                        <div className="col-span-8 row-span-1 pt-4">
                            <XNavBar />
                        </div>
                        <div className="col-span-2"></div>
                        {children}
                        <div className="col-span-12 h-24"></div>
                        <div className="col-span-2 bg-base-200"></div>
                        <div className="col-span-8 row-span-1 bg-base-200">
                            <XFooter />
                        </div>
                        <div className="col-span-2 bg-base-200"></div>
                    </div>
                </UserProvider>
            </body>
        </html>
    );
}
