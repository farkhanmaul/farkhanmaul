import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CursorProvider from '../components/CursorProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Farkhan Maul - Software Developer',
  description: 'Portfolio of Farkhan Maul, a passionate software developer from Jakarta, Indonesia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorProvider>
          {children}
        </CursorProvider>
      </body>
    </html>
  )
}