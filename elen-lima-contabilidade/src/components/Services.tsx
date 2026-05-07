const services = [
  {
    id: 'abertura-empresa',
    icon: (
      <svg
        aria-hidden="true"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    title: 'Abertura de Empresa em Contagem',
    pain: 'Trabalhar como autônomo custa caro e afasta grandes clientes.',
    description:
      'Transforme seu trabalho informal em um escritório legalmente constituído. Com o CNPJ certo para arquitetos, você paga até 40% menos em impostos e transmite credibilidade para fechar contratos maiores.',
    cta: 'Saiba como abrir sua empresa →',
    href: '#contato',
  },
  {
    id: 'gestao-fiscal',
    icon: (
      <svg
        aria-hidden="true"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
    title: 'Gestão Fiscal Estratégica',
    pain: 'ISS, Simples ou Lucro Presumido? A escolha errada pode custar milhares por ano.',
    description:
      'Analisamos o seu perfil de faturamento e escolhemos o regime tributário que faz mais sentido para você — arquiteto, engenheiro ou designer de interiores. Nada de impostos pagos a mais.',
    cta: 'Fazer simulação tributária →',
    href: '#contato',
  },
  {
    id: 'gestao-contabil',
    icon: (
      <svg
        aria-hidden="true"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
    title: 'Gestão Contábil e Conformidade CREA/CAU',
    pain: 'Fluxo de caixa desorganizado e obrigações do conselho profissional fora do prazo.',
    description:
      'Cuide dos projetos enquanto a gente cuida dos números. Organizamos seu fluxo de caixa, entregas contábeis e mantemos sua empresa em conformidade com as exigências do CREA e CAU.',
    cta: 'Conhecer a gestão contábil →',
    href: '#contato',
  },
]

export default function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="px-4 py-20 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-neutral-bg)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho da seção */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--color-primary)' }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-primary)' }}
            >
              O que oferecemos
            </span>
            <div className="h-px w-8" style={{ backgroundColor: 'var(--color-primary)' }} />
          </div>
          <h2 id="services-heading" className="section-title mb-4">
            Serviços especializados para profissionais do CREA e CAU
          </h2>
          <p className="mx-auto max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
            Cada serviço foi desenhado para resolver os problemas reais de
            arquitetos e engenheiros em Contagem e região.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid gap-8 md:grid-cols-3" role="list">
          {services.map((service) => (
            <article
              key={service.id}
              role="listitem"
              aria-labelledby={`service-title-${service.id}`}
              className="card flex flex-col"
            >
              {/* Ícone */}
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: 'rgba(26,79,159,0.10)',
                  color: 'var(--color-primary)',
                }}
                aria-hidden="true"
              >
                {service.icon}
              </div>

              {/* Conteúdo */}
              <h3
                id={`service-title-${service.id}`}
                className="mb-3 text-xl font-semibold"
                style={{ color: 'var(--color-accent)' }}
              >
                {service.title}
              </h3>

              {/* Dor do público */}
              <p
                className="mb-4 text-sm font-medium italic"
                style={{ color: 'var(--color-text-muted)' }}
              >
                &ldquo;{service.pain}&rdquo;
              </p>

              <p
                className="mb-6 flex-1 leading-relaxed"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {service.description}
              </p>

              {/* Separador decorativo estilo blueprint */}
              <div
                className="mb-6 h-px"
                style={{ backgroundColor: 'var(--color-neutral-border)' }}
              />

              <a
                href={service.href}
                className="service-link text-sm font-semibold transition-colors"
                aria-label={`${service.cta} — ${service.title}`}
              >
                {service.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
