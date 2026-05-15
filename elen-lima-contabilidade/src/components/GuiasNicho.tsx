const guias = [
  {
    href: '/guias/contabilidade-para-arquitetos',
    emoji: '📐',
    titulo: 'Contabilidade para Arquitetos',
    resumo:
      'Descubra como abrir sua empresa, registrar no CAU e pagar até 60% menos em impostos com o regime tributário certo para o seu escritório.',
    cta: 'Ler guia completo',
  },
  {
    href: '/guias/contabilidade-para-engenheiros',
    emoji: '⚙️',
    titulo: 'Contabilidade para Engenheiros',
    resumo:
      'Da ART ao CNPJ: entenda como estruturar seus contratos de engenharia de forma fiscal, sem pagar imposto a mais como autônomo.',
    cta: 'Ler guia completo',
  },
  {
    href: '/guias/abertura-de-empresa-para-arquitetos-e-engenheiros',
    emoji: '🏛️',
    titulo: 'Abertura de Empresa para Arquitetos e Engenheiros',
    resumo:
      'Guia passo a passo: CNAE, registro no CREA/CAU, NFS-e em Contagem e planejamento do Fator R para garantir a menor alíquota do Simples Nacional.',
    cta: 'Ler guia completo',
  },
]

export default function GuiasNicho() {
  return (
    <section
      id="guias"
      aria-labelledby="guias-heading"
      className="px-4 py-20 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-accent)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--color-primary-light)' }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-primary-light)' }}
            >
              Conhecimento Gratuito
            </span>
            <div className="h-px w-8" style={{ backgroundColor: 'var(--color-primary-light)' }} />
          </div>
          <h2 id="guias-heading" className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Guias por Nicho
          </h2>
          <p className="mx-auto max-w-2xl text-justify text-white/70">
            Conteúdo especializado para arquitetos e engenheiros que querem entender
            seus direitos tributários, estruturar suas empresas corretamente e parar
            de pagar mais imposto do que deveriam.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {guias.map(({ href, emoji, titulo, resumo, cta }) => (
            <a
              key={href}
              href={href}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-primary-light/40 hover:bg-white/10"
            >
              <span className="mb-4 text-4xl" role="presentation">{emoji}</span>
              <h3 className="mb-3 text-lg font-semibold text-white group-hover:text-primary-light transition-colors">
                {titulo}
              </h3>
              <p className="mb-5 flex-1 text-justify text-sm leading-relaxed text-white/60">
                {resumo}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-light">
                {cta}
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
