import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME, WHATSAPP_PHONE } from '@/config/constants'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const SLUG = 'contabilidade-para-engenheiros'
const TITLE = 'Contabilidade para Engenheiros'
const DESCRIPTION =
  'Tudo que engenheiros autônomos e consultores precisam saber: CNPJ CREA, Simples Nacional, emissão de ART, gestão fiscal de contratos e redução de impostos em Contagem/MG.'

export const metadata: Metadata = {
  title: `${TITLE} | ${SITE_NAME}`,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/guias/${SLUG}` },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/guias/${SLUG}`,
    locale: 'pt_BR',
    type: 'article',
  },
}

const faqs = [
  {
    question: 'Engenheiro autônomo precisa de CNPJ?',
    answer:
      'Não é obrigatório, mas é altamente vantajoso. Como pessoa física, o engenheiro paga até 27,5% de IR sobre os honorários. Com CNPJ no Simples Nacional, essa carga pode cair para 6% a 14,5%, representando economia significativa especialmente em contratos de alto valor.',
  },
  {
    question: 'Engenheiro pode ser MEI?',
    answer:
      'Não. A atividade de engenharia (consultoria, projetos, laudos) não é permitida no MEI. O engenheiro deve abrir uma ME ou EPP enquadrada no Simples Nacional ou Lucro Presumido.',
  },
  {
    question: 'Como registrar empresa de engenharia no CREA?',
    answer:
      'A empresa de engenharia deve obter o Registro de Empresa no CREA do estado onde atua. O responsável técnico deve ser engenheiro com registro individual ativo no CREA. Sem esse registro, a empresa não pode emitir ART (Anotação de Responsabilidade Técnica) pelo CNPJ.',
  },
  {
    question: 'Como funciona a tributação de contratos de engenharia?',
    answer:
      'Os honorários de projetos, laudos e consultorias são tratados como receita de prestação de serviço. No Simples Nacional, incide o DAS unificado. Em contratos com retenção de ISS na fonte pelo contratante, o contador orienta sobre o aproveitamento correto na apuração mensal.',
  },
  {
    question: 'Simples Nacional Anexo III ou V para engenheiros?',
    answer:
      'Engenheiros enquadram-se no Anexo III (alíquota a partir de 6%) quando o Fator R — relação entre pró-labore e faturamento — for ≥ 28%. Caso contrário, aplicam-se as alíquotas do Anexo V (a partir de 15,5%). O contador estrutura o pró-labore para garantir o Anexo III sempre que possível.',
  },
  {
    question: 'É possível ter sócios na empresa de engenharia?',
    answer:
      'Sim. Empresas de engenharia frequentemente operam como Ltda. com dois ou mais engenheiros sócios. O contrato social define a participação, a responsabilidade técnica de cada sócio e a distribuição de lucros — que são isentos de IR quando distribuídos corretamente.',
  },
]

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Guias por Nicho', item: `${SITE_URL}/guias` },
    { '@type': 'ListItem', position: 3, name: TITLE, item: `${SITE_URL}/guias/${SLUG}` },
  ],
}

const especialidades = [
  { area: 'Engenharia Civil', detalhe: 'Projetos estruturais, laudos, obras e gerenciamento de contratos com construtoras.' },
  { area: 'Engenharia Elétrica', detalhe: 'Projetos de instalações, laudos de conformidade ABNT e contratos com concessionárias.' },
  { area: 'Engenharia Mecânica', detalhe: 'Laudos periciais, projetos industriais e prestação de serviços para indústrias.' },
  { area: 'Engenharia Ambiental', detalhe: 'Relatórios técnicos, licenciamentos e consultorias para órgãos públicos e privados.' },
]

export default function ContabilidadeParaEngenheiros() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="hero-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-white/60">
                <li><a href="/" className="hover:text-white">Início</a></li>
                <li aria-hidden="true">/</li>
                <li><a href="/guias" className="hover:text-white">Guias por Nicho</a></li>
                <li aria-hidden="true">/</li>
                <li className="text-white" aria-current="page">Engenheiros</li>
              </ol>
            </nav>
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Contabilidade para Engenheiros
            </h1>
            <p className="mx-auto max-w-xl text-lg text-white/80">
              Da ART ao balanço: estruture seu CNPJ, reduza impostos e tenha segurança
              fiscal nos seus contratos de engenharia.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=Ol%C3%A1%2C+sou+engenheiro+e+quero+saber+mais+sobre+abrir+minha+empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-8 inline-flex"
            >
              Falar com a Elen Lima
            </a>
          </div>
        </section>

        {/* Conteúdo */}
        <article className="px-4 py-14 text-justify sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">

            {/* Seção 1 */}
            <section aria-labelledby="s1">
              <h2 id="s1" className="section-title mb-4">
                A vantagem tributária do engenheiro PJ
              </h2>
              <p className="mb-3 text-text-muted">
                Um engenheiro que recebe R$ 15.000/mês como autônomo (CPF) pode pagar mais de
                R$ 3.500 em Imposto de Renda + INSS. Com CNPJ no Simples Nacional, esse mesmo
                faturamento pode gerar um imposto de apenas <strong>R$ 900 a R$ 2.300</strong>,
                dependendo do enquadramento.
              </p>
              <p className="text-text-muted">
                A estrutura correta também permite distribuir o lucro remanescente com isenção
                de IR — um benefício que o regime CLT não oferece.
              </p>
            </section>

            {/* Seção 2: Especialidades */}
            <section aria-labelledby="s2" className="mt-10">
              <h2 id="s2" className="section-title mb-5">
                Atendemos engenheiros de todas as especialidades
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {especialidades.map(({ area, detalhe }) => (
                  <div key={area} className="card">
                    <h3 className="mb-1 font-semibold text-accent">{area}</h3>
                    <p className="text-sm text-text-muted">{detalhe}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Seção 3: Tabela regimes */}
            <section aria-labelledby="s3" className="mt-10">
              <h2 id="s3" className="section-title mb-4">
                Qual regime tributário escolher?
              </h2>
              <div className="overflow-hidden rounded-xl border border-neutral-border">
                <table className="w-full text-sm">
                  <thead className="bg-primary/5">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-accent">Regime</th>
                      <th className="px-4 py-3 text-left font-semibold text-accent">Quando usar</th>
                      <th className="px-4 py-3 text-left font-semibold text-accent">Carga aprox.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Simples Nacional Anexo III', 'Fator R ≥ 28%', '~6% a 14%'],
                      ['Simples Nacional Anexo V', 'Fator R < 28%', '~15% a 22%'],
                      ['Lucro Presumido', 'Faturamento alto ou distribuição de lucros elevada', '~13% a 16%'],
                    ].map(([regime, quando, carga]) => (
                      <tr key={regime as string} className="border-t border-neutral-border">
                        <td className="px-4 py-3 font-medium text-accent">{regime}</td>
                        <td className="px-4 py-3 text-text-muted">{quando}</td>
                        <td className="px-4 py-3 text-text-muted">{carga}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-text-muted">
                * Percentuais aproximados sobre o faturamento bruto. A análise precisa deve ser feita com seu contador.
              </p>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-titulo" className="mt-14">
              <h2 id="faq-titulo" className="section-title mb-6">
                Perguntas Frequentes
              </h2>
              <div className="space-y-4">
                {faqs.map(({ question, answer }, i) => (
                  <details key={i} className="card group" name="faq-engenheiros">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-accent">
                      {question}
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-sm text-text-muted">{answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-primary/5 p-8 text-center">
              <h2 className="mb-2 text-xl font-semibold text-accent">
                Quer pagar menos imposto nos seus contratos?
              </h2>
              <p className="mb-5 text-sm text-text-muted">
                A Elen Lima faz o diagnóstico tributário completo para engenheiros e indica
                o caminho mais eficiente para o seu perfil.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=Ol%C3%A1%2C+sou+engenheiro+e+quero+uma+an%C3%A1lise+do+meu+caso.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Falar agora pelo WhatsApp
              </a>
            </div>

          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
