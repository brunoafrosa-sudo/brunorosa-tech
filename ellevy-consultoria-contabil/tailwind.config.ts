import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:        '#1A3D8F',
          'blue-dark': '#142E6E',
          'blue-light':'#2A52B2',
          beige:       '#F2E8C9',
          'off-white': '#FAF6EE',
          dark:        '#1A1A1A',
          gray:        '#4A4A4A',
          'gray-light':'#8A8A8A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
