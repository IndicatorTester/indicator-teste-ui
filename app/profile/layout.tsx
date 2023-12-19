import AuthWrapper from "../wrapper/AuthWrapper";

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AuthWrapper>{children}</AuthWrapper>;
}