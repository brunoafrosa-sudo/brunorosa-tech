const testimonials = [
  {
    id: 1,
    quote:
      'Finalmente entendi como funciona o meu imposto. A Elen me ajudou a sair da informalidade e hoje pago menos imposto do que antes como autônomo.',
    author: 'Rafael M.',
    role: 'Arquiteto — Contagem/MG',
    initials: 'RM',
  },
  {
    id: 2,
    quote:
      'Abri meu escritório em menos de 2 semanas. Todo o processo foi simples e a Elen explicou cada passo. Recomendo muito!',
    author: 'Camila S.',
    role: 'Engenheira Civil — BH',
    initials: 'CS',
  },
  {
    id: 3,
    quote:
      'Meu fluxo de caixa era um caos. Hoje tenho relatórios mensais e sei exatamente onde estou. Parceria que vale cada centavo.',
    author: 'Lucas T.',
    role: 'Designer de Interiores — Contagem/MG',
    initials: 'LT',
  },
]

const credentialsLogos = [
  { name: 'CREA', label: 'Conselho Regional de Engenharia e Agronomia' },
  { name: 'CAU', label: 'Conselho de Arquitetura e Urbanismo' },
  { name: 'CFC', label: 'Conselho Federal de Contabilidade' },
]

export default function SocialProof() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="social-proof-heading"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Selos de credibilidade */}
        <div className="mb-14 text-center">
          <p
            className="mb-6 text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Especialista reconhecida pelos conselhos profissionais
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {credentialsLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 rounded-lg border px-5 py-3"
                style={{ borderColor: 'var(--color-neutral-border)' }}
                aria-label={logo.label}
              >
                <span className="text-lg font-bold" style={{ color: 'var(--color-accent)' }}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Título */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--color-primary)' }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-primary)' }}
            >
              Depoimentos
            </span>
            <div className="h-px w-8" style={{ backgroundColor: 'var(--color-primary)' }} />
          </div>
          <h2 id="social-proof-heading" className="section-title">
            Profissionais que já regularizaram seus escritórios
          </h2>
        </div>

        {/* Depoimentos */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="card"
              aria-label={`Depoimento de ${t.author}`}
            >
              {/* Estrelas */}
              <div className="mb-4 flex gap-1" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    aria-hidden="true"
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote
                className="mb-5 leading-relaxed"
                style={{ color: 'var(--color-text-primary)' }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption
                className="flex items-center gap-3 border-t pt-5"
                style={{ borderColor: 'var(--color-neutral-border)' }}
              >
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--color-accent)' }}>
                    {t.author}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
