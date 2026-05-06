import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    middlewares: [
      {
        apply: 'serve',
        use: (req, res, next) => {
          // Security Headers
          res.setHeader('X-Content-Type-Options', 'nosniff')
          res.setHeader('X-Frame-Options', 'SAMEORIGIN')
          res.setHeader('X-XSS-Protection', '1; mode=block')
          res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
          res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
          res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
          res.setHeader(
            'Content-Security-Policy',
            "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';"
          )
          next()
        }
      }
    ]
  }
})
