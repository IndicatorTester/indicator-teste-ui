import "./globals.css";
import "tailwindcss/tailwind.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import XNavBar from "./components/XNavBar";

export const metadata = {
    title: "XIndicator",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="text-neutral-content">
                <UserProvider>
                    <div className="grid grid-rows-expand grid-cols-12">
                        <div className="col-span-2"></div>
                        <div className="col-span-8 row-span-1 pt-4">
                            <XNavBar />
                        </div>
                        <div className="col-span-2"></div>
                        {children}
                    </div>
                </UserProvider>
            </body>
        </html>
    );
}
