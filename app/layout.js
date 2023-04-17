import './globals.css'

export const metadata = {
  title: 'Alliance Recruit',
  description: 'Recruiting application for aspiring Alliance employees',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
