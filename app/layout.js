import './globals.css'
import  ApplicationContextProvider  from './context/data-provider'

export const metadata = {
  title: 'Alliance Recruit',
  description: 'Recruiting application for aspiring Alliance employees',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApplicationContextProvider>
          {children}
        </ApplicationContextProvider>
      </body>
    </html>
  )
}
