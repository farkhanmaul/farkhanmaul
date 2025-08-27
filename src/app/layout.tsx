import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CursorProvider from '../components/CursorProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Farkhan Maul - Software Developer',
  description: 'Portfolio of Farkhan Maul, a passionate Software Developer from Indonesia specializing in modern web technologies.',
  keywords: 'Farkhan Maul, Software Developer, Web Developer, React, Next.js, TypeScript, JavaScript, Frontend, Backend, Full Stack',
  authors: [{ name: 'Farkhan Maul', url: 'https://github.com/farkhanmaul' }],
  creator: 'Farkhan Maul',
  publisher: 'Farkhan Maul',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://farkhanmaul.github.io/farkhanmaul',
    title: 'Farkhan Maul - Software Developer',
    description: 'Portfolio of Farkhan Maul, a passionate Software Developer from Indonesia specializing in modern web technologies.',
    siteName: 'Farkhan Maul Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farkhan Maul - Software Developer',
    description: 'Portfolio of Farkhan Maul, a passionate Software Developer from Indonesia specializing in modern web technologies.',
    creator: '@farkhanmaul',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://farkhanmaul.github.io/farkhanmaul',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <CursorProvider>
          {children}
        </CursorProvider>
      </body>
    </html>
  )
}