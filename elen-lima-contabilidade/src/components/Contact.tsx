'use client'

import { type ChangeEvent, useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    // Integração futura: webhook / e-mail
    setSubmitted(true)
  }

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="px-4 py-20 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-neutral-bg)' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Info de contato */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8" style={{ backgroundColor: 'var(--color-primary)' }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-primary)' }}
              >
                Contato
              </span>
            </div>
            <h2 id="contact-heading" className="section-title mb-6">
              Fale com a Elen Lima — Especialista em Contabilidade para Arquitetos
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Preencha o formulário ou entre em contato diretamente pelo WhatsApp.
              Respondemos em até 24 horas.
            </p>

            <address className="not-italic space-y-4">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'rgba(26,79,159,0.10)', color: 'var(--color-primary)' }}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>
                  Contagem, Minas Gerais — MG
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'rgba(26,79,159,0.10)', color: 'var(--color-primary)' }}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:contato@elenlimacontabilidade.com.br"
                  className="text-sm hover:underline"
                  style={{ color: 'var(--color-primary)' }}
                >
                  contato@elenlimacontabilidade.com.br
                </a>
              </div>
            </address>
          </div>

          {/* Formulário */}
          <div className="card">
            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-lg font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Mensagem enviada!
                </p>
                <p className="mt-2" style={{ color: 'var(--color-text-muted)' }}>
                  Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulário de contato"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    Nome <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none"
                    style={{ borderColor: 'var(--color-neutral-border)' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    E-mail <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none"
                    style={{ borderColor: 'var(--color-neutral-border)' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    Mensagem <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Como posso te ajudar?"
                    className="w-full resize-none rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none"
                    style={{ borderColor: 'var(--color-neutral-border)' }}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Enviar mensagem →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
