import "./globals.css";
import "tailwindcss/tailwind.css";

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
            <body className="text-neutral-content">{children}</body>
        </html>
    );
}
