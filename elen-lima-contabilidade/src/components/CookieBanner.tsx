'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cookieConsent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Só exibe o banner se o usuário ainda não consentiu
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
    // Dispara evento para que scripts de Analytics possam ser carregados
    window.dispatchEvent(new CustomEvent('cookieConsent', { detail: 'accepted' }))
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Aviso de cookies e privacidade"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-border bg-white px-4 py-5 shadow-lg sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <p className="text-sm leading-relaxed text-text-primary">
            <strong className="font-semibold">Utilizamos cookies</strong> para
            melhorar sua experiência, analisar o tráfego do site e personalizar
            conteúdo, conforme nossa{' '}
            <a
              href="/politica-de-privacidade"
              className="font-medium text-primary underline hover:text-primary-hover"
            >
              Política de Privacidade
            </a>{' '}
            e a{' '}
            <abbr title="Lei Geral de Proteção de Dados">LGPD</abbr>.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={handleDecline}
            className="rounded-md border border-neutral-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-neutral-bg"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  )
}
