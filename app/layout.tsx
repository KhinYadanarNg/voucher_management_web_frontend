import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import NavBar from './components/common/NavBar'
import Provider from './components/common/Provider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '800']
})

export const metadata: Metadata = {
  title: 'GIV Voucher Management',
  description: 'Created this Voucher Management Application by Group-IV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='flex flex-col min-h-screen'>
          <Provider>
            <NavBar />
            <main className='flex-grow'>{children}</main>
          </Provider>
        </div>

      </body>
    </html>
  )
}
