import './globals.css'

export const metadata = {
  title: 'Homely Health Care - Professional Home Care Services',
  description: 'Compassionate home care services across the UK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}