import AuthWrapper from "../wrapper/AuthWrapper";

export const metadata = {
    title: "XIndicator",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AuthWrapper>{children}</AuthWrapper>;
}
