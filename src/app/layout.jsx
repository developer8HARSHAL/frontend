import './globals.css'

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard created with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}