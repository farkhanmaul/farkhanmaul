import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Farkhan Maul - Software Developer Portfolio',
    short_name: 'Farkhan Maul',
    description: 'Portfolio of Farkhan Maul, a passionate Software Developer from Indonesia specializing in modern web technologies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#F59E0B',
    orientation: 'portrait-primary',
    categories: ['portfolio', 'developer', 'software'],
    lang: 'en-US',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}