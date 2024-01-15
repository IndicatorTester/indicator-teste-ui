import "@/app/globals.css";
import "tailwindcss/tailwind.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import XNavBar from "@/app/components/XNavBar";
import XFooter from "@/app/components/XFooter";

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
            <body id="body" className="h-[100%] text-neutral-content">
                <UserProvider>
                    <XNavBar />
                    <div className="grid grid-rows-expand grid-cols-12 min-h-screen">
                        {children}
                    </div>
                </UserProvider>
                <XFooter />
            </body>
        </html>
    );
}
