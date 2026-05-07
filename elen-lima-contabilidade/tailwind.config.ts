import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A4F9F',
          hover: '#0F3A7A',
          light: '#2E6CC7',
        },
        accent: '#0D2B5E',
        neutral: {
          bg: '#F5F7FA',
          border: '#E2E8F0',
        },
        text: {
          primary: '#1A1A2E',
          muted: '#6B7280',
        },
        success: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      boxShadow: {
        card: '0 2px 8px rgba(26, 79, 159, 0.08)',
        'card-hover': '0 4px 16px rgba(26, 79, 159, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D2B5E 0%, #1A4F9F 60%, #2E6CC7 100%)',
      },
    },
  },
  plugins: [],
}

export default config
