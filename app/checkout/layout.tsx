import AuthWrapper from "../wrapper/AuthWrapper";

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AuthWrapper>{children}</AuthWrapper>;
}
