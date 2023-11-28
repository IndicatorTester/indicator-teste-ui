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
        <div className="">
          <div className="grid text-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
