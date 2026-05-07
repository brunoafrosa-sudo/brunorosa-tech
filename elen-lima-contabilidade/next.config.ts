import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [480, 768, 1200, 1920],
  },
  compress: true,
}

export default nextConfig
