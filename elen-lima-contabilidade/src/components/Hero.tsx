import Image from 'next/image'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-bg px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Texto */}
        <div className="text-center lg:text-left">
          {/* Linha decorativa estilo blueprint */}
          <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--color-primary-light)' }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-primary-light)' }}
            >
              Contabilidade Especializada
            </span>
            <div className="h-px w-8" style={{ backgroundColor: 'var(--color-primary-light)' }} />
          </div>

          <h1
            id="hero-heading"
            className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl"
          >
            Contabilidade para{' '}
            <span style={{ color: 'var(--color-primary-light)' }}>
              Arquitetos e Engenheiros
            </span>{' '}
            em Contagem
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-white/80 lg:text-xl">
            Chega de perder dinheiro na informalidade. Abra seu CNPJ, reduza
            impostos e foque no que você faz de melhor:{' '}
            <strong className="font-semibold text-white">projetar.</strong>
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#contato" className="btn-primary w-full sm:w-auto">
              Quero regularizar meu escritório →
            </a>
            <a href="#checklist" className="btn-outline w-full sm:w-auto">
              Baixar checklist gratuito
            </a>
          </div>

          {/* Indicadores de credibilidade */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            {[
              'Especialista em CREA/CAU',
              'Abertura em Contagem/MG',
              'Simples Nacional e Lucro Presumido',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/70">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
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
              </div>
            ))}
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:max-w-md lg:max-w-lg" style={{ aspectRatio: '4/5' }}>
            <Image
              src="/img/hero-elen.png"
              alt="Elen Lima — Contadora especialista em arquitetos e engenheiros em Contagem"
              fill
              priority
              fetchPriority="high"
              className="object-cover object-center"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 448px, 512px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
