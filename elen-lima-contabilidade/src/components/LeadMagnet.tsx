'use client'

import { useState } from 'react'

export default function LeadMagnet() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    // Integração futura: enviar para CRM/webhook
    setSubmitted(true)
  }

  const checklistItems = [
    'Escolha do regime tributário ideal',
    'Documentos para abertura do CNPJ',
    'Obrigações mensais do escritório',
    'Como reduzir o ISS legalmente',
    'Checklist de conformidade CREA/CAU',
  ]

  return (
    <section
      id="checklist"
      aria-labelledby="lead-magnet-heading"
      className="hero-bg px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Conteúdo da oferta */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8" style={{ backgroundColor: 'var(--color-primary-light)' }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-primary-light)' }}
              >
                Material Gratuito
              </span>
            </div>
            <h2
              id="lead-magnet-heading"
              className="mb-4 text-3xl font-bold text-white lg:text-4xl"
            >
              Dê o Primeiro Passo Sem Sair de Casa
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Baixe grátis o checklist com os{' '}
              <strong className="text-white">5 passos</strong> para legalizar
              seu escritório de arquitetura ou engenharia. Simples, direto e sem
              juridiquês.
            </p>

            <ul className="space-y-3" role="list" aria-label="Conteúdo do checklist">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0"
                    style={{ color: 'var(--color-success)' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formulário de captura */}
          <div className="rounded-2xl bg-white p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center">
                <div
                  aria-hidden="true"
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}
                >
                  <svg
                    className="h-8 w-8"
                    style={{ color: 'var(--color-success)' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3
                  className="mb-2 text-xl font-bold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Checklist enviado!
                </h3>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  A Elen vai entrar em contato pelo WhatsApp em breve.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="mb-6 text-xl font-bold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Receber o Checklist Grátis
                </h3>
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Formulário do checklist gratuito"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="lead-name"
                      className="mb-1.5 block text-sm font-medium"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      Seu nome{' '}
                      <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Ex: Rafael Mendes"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none"
                      style={{ borderColor: 'var(--color-neutral-border)' }}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="lead-phone"
                      className="mb-1.5 block text-sm font-medium"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      WhatsApp{' '}
                      <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="(31) 9 0000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none"
                      style={{ borderColor: 'var(--color-neutral-border)' }}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    📥 Baixar Checklist Gratuito
                  </button>

                  <p
                    className="mt-4 text-center text-xs"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Seus dados estão seguros. Sem spam, prometemos.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
