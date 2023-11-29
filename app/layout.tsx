export const metadata = {
  title: 'Indicator Tester',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-screen w-screen overflow-hidden">
      <body>
        {children}
      </body>
    </html>
  )
}
