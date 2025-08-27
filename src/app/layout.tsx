import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CursorProvider from '../components/CursorProvider'
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Farkhan Maul - Software Developer',
    template: '%s | Farkhan Maul'
  },
  description: 'Experienced Software Developer from Indonesia specializing in JavaScript, Node.js, React, and full-stack web development. View my latest projects including Movie Hanz, FRESHCAN, and HRIS systems.',
  keywords: [
    'Farkhan Maul',
    'Software Developer Indonesia',
    'JavaScript Developer',
    'Node.js Developer', 
    'React Developer',
    'Full Stack Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Movie Hanz',
    'FRESHCAN',
    'HRIS',
    'Portfolio',
    'GitHub farkhanmaul'
  ],
  authors: [{ name: 'Farkhan Maul', url: 'https://github.com/farkhanmaul' }],
  creator: 'Farkhan Maul',
  publisher: 'Farkhan Maul',
  category: 'Technology',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://farkhanmaul.github.io/farkhanmaul',
    title: 'Farkhan Maul - Software Developer',
    description: 'Experienced Software Developer from Indonesia specializing in JavaScript, Node.js, React, and full-stack web development.',
    siteName: 'Farkhan Maul Portfolio',
    images: [
      {
        url: 'https://farkhanmaul.github.io/farkhanmaul/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Farkhan Maul - Software Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farkhan Maul - Software Developer',
    description: 'Experienced Software Developer from Indonesia specializing in JavaScript, Node.js, React, and full-stack web development.',
    creator: '@farkhanmaul',
    images: ['https://farkhanmaul.github.io/farkhanmaul/og-image.webp'],
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
  verification: {
    google: 'your-google-site-verification-code',
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <CursorProvider>
          <Navigation />
          {children}
        </CursorProvider>
      </body>
    </html>
  )
}