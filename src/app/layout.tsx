import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}