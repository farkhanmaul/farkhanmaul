/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/farkhanmaul' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/farkhanmaul/' : '',
}

module.exports = nextConfig