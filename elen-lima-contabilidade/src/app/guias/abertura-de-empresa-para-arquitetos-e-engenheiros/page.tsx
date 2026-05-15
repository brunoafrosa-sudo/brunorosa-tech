import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME, WHATSAPP_PHONE } from '@/config/constants'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const SLUG = 'abertura-de-empresa-para-arquitetos-e-engenheiros'
const TITLE = 'Abertura de Empresa para Arquitetos e Engenheiros'
const DESCRIPTION =
  'Guia prático para abrir CNPJ como arquiteto ou engenheiro em Contagem/MG: porte da empresa, CNAE, registro no CAU/CREA, Simples Nacional e planejamento tributário com a Elen Lima Contabilidade.'

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
    question: 'Quanto tempo demora para abrir empresa de arquitetura ou engenharia?',
    answer:
      'Com a documentação completa, o CNPJ é emitido em 1 a 5 dias úteis pelo portal Gov.br. O registro no CAU ou CREA leva mais alguns dias. O contador cuida de toda a parte burocrática para que você não precise se preocupar com prazos e formulários.',
  },
  {
    question: 'Qual o custo mensal de manter um CNPJ para arquiteto ou engenheiro?',
    answer:
      'Os principais custos são: DAS do Simples Nacional (varia com o faturamento, começa em ~6%), honorária contábil (em média R$ 200–400/mês) e anuidades do CAU ou CREA. Com faturamento de R$ 10.000/mês no Anexo III, o DAS fica em torno de R$ 600 — muito abaixo do que você pagaria como autônomo.',
  },
  {
    question: 'Posso abrir empresa em Contagem e atender projetos em outros municípios?',
    answer:
      'Sim. A sede em Contagem/MG não limita a atuação geográfica. Você pode prestar serviços em qualquer município. Porém, dependendo do contrato, pode ser necessário recolher ISS no local da obra (ISS do tomador). O contador orienta caso a caso.',
  },
  {
    question: 'Arquiteto e engenheiro podem ser sócios na mesma empresa?',
    answer:
      'Sim, desde que o objeto social contemple ambas as atividades e que cada profissional tenha registro ativo no seu respectivo conselho (CAU para arquitetos, CREA para engenheiros). A empresa também deve ser registrada nos dois conselhos.',
  },
  {
    question: 'O que é o Fator R e como ele afeta meu imposto?',
    answer:
      'O Fator R é a proporção entre a folha de pagamento (incluindo pró-labore) e o faturamento dos últimos 12 meses. Se essa proporção for ≥ 28%, você é tributado pelo Anexo III (mínimo de 6%). Se for menor, cai no Anexo V (mínimo de 15,5%). Estruturar corretamente o pró-labore pode reduzir pela metade o imposto mensal.',
  },
  {
    question: 'Preciso de contador especializado para meu escritório técnico?',
    answer:
      'Sim. Um contador que entende as particularidades de arquitetos e engenheiros — como emissão de RRT/ART por CNPJ, regras de ISS em contratos de obra, e a tributação do Simples Nacional para atividades técnicas — faz diferença significativa na economia fiscal e na conformidade.',
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

const etapas = [
  {
    titulo: 'Análise do perfil tributário',
    detalhe: 'Antes de abrir, o contador avalia seu faturamento atual, tipo de contrato (projetos, execução, consultoria) e o melhor regime: Simples Nacional, Lucro Presumido ou Lucro Real.',
  },
  {
    titulo: 'Escolha do CNAE',
    detalhe: 'CNAEs principais: 7111-1/00 (Arquitetura) e 7112-0/00 (Engenharia). Atividades como design de interiores, topografia ou perícia têm CNAEs próprios que podem ser incluídos como secundários.',
  },
  {
    titulo: 'Abertura do CNPJ',
    detalhe: 'Registro na Junta Comercial de Minas Gerais (JUCEMG) via portal Gov.br, com contrato social ou SLU. O CNPJ é emitido pela Receita Federal automaticamente após o deferimento.',
  },
  {
    titulo: 'Inscrição municipal (ISS)',
    detalhe: 'Cadastro na Prefeitura de Contagem para habilitar a emissão de NFS-e e recolhimento do ISS. A alíquota em Contagem varia de 2% a 5% para serviços de engenharia e arquitetura.',
  },
  {
    titulo: 'Registro no CAU ou CREA',
    detalhe: 'A empresa deve ser inscrita no conselho profissional correspondente (CAU para arquitetos, CREA para engenheiros). Isso permite emitir RRT e ART pelo CNPJ, dando respaldo legal aos projetos.',
  },
  {
    titulo: 'Abertura de conta PJ e início da operação',
    detalhe: 'Conta bancária empresarial, configuração de boletos/PIX CNPJ nas plataformas de cobrança e início do acompanhamento contábil mensal com emissão correta do DAS.',
  },
]

export default function AberturaEmpresaArquitetosEngenheiros() {
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
                <li className="text-white" aria-current="page">Abertura de Empresa</li>
              </ol>
            </nav>
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Abertura de Empresa para Arquitetos e Engenheiros
            </h1>
            <p className="mx-auto max-w-xl text-lg text-white/80">
              Do CNPJ ao primeiro projeto assinado como empresa: cuide do que importa,
              deixe a burocracia com quem entende.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=Ol%C3%A1%2C+quero+abrir+minha+empresa+de+arquitetura+ou+engenharia.`}
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
                Por que abrir empresa em vez de atuar como autônomo?
              </h2>
              <p className="mb-3 text-text-muted">
                Arquitetos e engenheiros que faturam acima de R$ 5.000/mês como autônomos
                (CPF) estão pagando imposto em excesso. A tabela progressiva do IR cobra até
                27,5% — além de 11% de INSS. Com uma empresa no{' '}
                <strong>Simples Nacional Anexo III</strong>, a carga tributária total pode
                ficar entre <strong>8% e 14%</strong> sobre o faturamento.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Economia média em impostos', valor: '40–60%' },
                  { label: 'Dias para abrir o CNPJ', valor: '1–5 dias' },
                  { label: 'Alíquota mínima Simples', valor: '6,0%' },
                ].map(({ label, valor }) => (
                  <div key={label} className="card text-center">
                    <p className="text-2xl font-bold text-primary">{valor}</p>
                    <p className="mt-1 text-xs text-text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Seção 2: Fator R destaque */}
            <section aria-labelledby="s2" className="mt-10">
              <h2 id="s2" className="section-title mb-4">
                O Fator R: a chave para pagar menos imposto
              </h2>
              <div className="rounded-xl border border-success/30 bg-success/5 p-5">
                <p className="text-sm text-text-muted">
                  O <strong>Fator R</strong> é calculado dividindo a folha de salários
                  (pró-labore + funcionários) pelo faturamento dos últimos 12 meses.
                  Quando esse percentual é <strong>≥ 28%</strong>, seu escritório é tributado
                  pelo <strong>Anexo III</strong> do Simples Nacional — alíquota a partir de 6%.
                  Abaixo de 28%, cai para o Anexo V (15,5%). Estruturar o pró-labore
                  estrategicamente pode <strong>reduzir pela metade</strong> o imposto mensal.
                </p>
                <p className="mt-3 text-sm text-text-muted">
                  Simule o impacto na nossa{' '}
                  <a href="/#calculadora" className="service-link font-medium underline">
                    Calculadora CLT vs PJ
                  </a>.
                </p>
              </div>
            </section>

            {/* Passo a passo */}
            <section aria-labelledby="s3" className="mt-10">
              <h2 id="s3" className="section-title mb-5">
                Como a Elen Lima abre sua empresa: passo a passo
              </h2>
              <ol className="space-y-4">
                {etapas.map(({ titulo, detalhe }, i) => (
                  <li key={i} className="flex gap-4 text-text-muted">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-accent">{titulo}</h3>
                      <p className="mt-0.5 text-sm">{detalhe}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-titulo" className="mt-14">
              <h2 id="faq-titulo" className="section-title mb-6">
                Perguntas Frequentes
              </h2>
              <div className="space-y-4">
                {faqs.map(({ question, answer }, i) => (
                  <details key={i} className="card group" name="faq-abertura">
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
                Abra sua empresa com quem entende do setor
              </h2>
              <p className="mb-5 text-sm text-text-muted">
                A Elen Lima é especialista em arquitetos e engenheiros. Cuide do seu escritório
                técnico, ela cuida da parte fiscal.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=Ol%C3%A1%2C+quero+abrir+minha+empresa+de+arquitetura+%2F+engenharia+com+a+Elen+Lima.`}
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
