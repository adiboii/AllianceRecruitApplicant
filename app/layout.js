import './globals.css'
import  ApplicationContextProvider  from './context/data-provider'
import Head from 'next/head';
export const metadata = {
  title: 'Alliance Recruit',
  description: 'Recruiting application for aspiring Alliance employees',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.7.570/pdf.min.js"
            crossOrigin="anonymous"
          ></script>
      </Head>
      <body>
        <ApplicationContextProvider>
          {children}
        </ApplicationContextProvider>
      </body>
    </html>
  )
}
