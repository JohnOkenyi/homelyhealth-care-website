import './globals.css'
// Trigger rebuild for Tailwind CSS

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
            <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}