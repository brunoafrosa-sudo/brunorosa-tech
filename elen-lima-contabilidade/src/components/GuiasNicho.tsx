const guias = [
  {
    href: '/guias/contabilidade-para-arquitetos',
    icon: (
      <svg aria-hidden="true" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    titulo: 'Contabilidade para Arquitetos',
    resumo:
      'Descubra como abrir sua empresa, registrar no CAU e pagar até 60% menos em impostos com o regime tributário certo para o seu escritório.',
    cta: 'Ler guia completo',
  },
  {
    href: '/guias/contabilidade-para-engenheiros',
    icon: (
      <svg aria-hidden="true" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m5.8-5.8l4.907-1.456a.75.75 0 01.927.927l-1.457 4.907m-5.377 0l1.457-4.907M11.42 9.37a2.03 2.03 0 01.6-1.154l4.125-4.125a2.25 2.25 0 013.182 3.182l-4.125 4.125a2.03 2.03 0 01-1.154.6m-5.628 0l-4.907 1.457m0 0l-1.457 4.907m1.457-4.907l4.907-1.457" />
      </svg>
    ),
    titulo: 'Contabilidade para Engenheiros',
    resumo:
      'Da ART ao CNPJ: entenda como estruturar seus contratos de engenharia de forma fiscal, sem pagar imposto a mais como autônomo.',
    cta: 'Ler guia completo',
  },
  {
    href: '/guias/abertura-de-empresa-para-arquitetos-e-engenheiros',
    icon: (
      <svg aria-hidden="true" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
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
          {guias.map(({ href, icon, titulo, resumo, cta }) => (
            <a
              key={href}
              href={href}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-primary-light/40 hover:bg-white/10"
            >
              <div className="mb-4 text-primary-light" role="presentation">{icon}</div>
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
