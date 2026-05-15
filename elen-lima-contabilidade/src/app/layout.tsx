import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/config/constants'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  // ─── SEO Básico ───────────────────────────────────────────────────────────
  title: `${SITE_NAME} | Especialista em Arquitetos e Engenheiros`,
  description: SITE_DESCRIPTION,
  keywords: [
    'contabilidade para arquitetos',
    'abertura de empresa Contagem',
    'gestão fiscal engenheiros',
    'CNPJ arquiteto',
    'Simples Nacional arquitetura',
    'contabilidade Contagem MG',
    'regularização escritório arquitetura',
  ],
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },

  // ─── Open Graph (Facebook / WhatsApp / Instagram) ─────────────────────────
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `${SITE_NAME} | Especialista em Arquitetos e Engenheiros`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/img/og-image-whatsapp.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Especialista em Arquitetos e Engenheiros`,
        type: 'image/jpeg',
      },
    ],
    locale: 'pt_BR',
    siteName: SITE_NAME,
  },

  // ─── Twitter Cards ────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Especialista em Arquitetos e Engenheiros`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/img/og-image-whatsapp.jpg`,
        alt: `${SITE_NAME} - Especialista em Arquitetos e Engenheiros`,
      },
    ],
  },

  // ─── Outros ───────────────────────────────────────────────────────────────
  other: {
    'geo.region': 'BR-MG',
    'geo.placename': 'Contagem, Minas Gerais',
    'theme-color': '#1A4F9F',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AccountingService',
              name: 'Elen Lima Contabilidade',
              description:
                'Contabilidade especializada para arquitetos e engenheiros em Contagem, MG.',
              url: 'https://www.elenlimacontabilidade.com.br/',
              telephone: '',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Contagem',
                addressRegion: 'MG',
                addressCountry: 'BR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '-19.9317',
                longitude: '-44.0536',
              },
              areaServed: {
                '@type': 'City',
                name: 'Contagem',
              },
              knowsAbout: [
                'Contabilidade para Arquitetos',
                'Abertura de Empresa',
                'Gestão Fiscal',
                'Simples Nacional',
                'CREA',
                'CAU',
              ],
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  )
}
