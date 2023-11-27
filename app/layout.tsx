export const metadata = {
  title: 'Indicator Tester',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
