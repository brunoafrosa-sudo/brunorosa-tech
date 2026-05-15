import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME, WHATSAPP_PHONE } from '@/config/constants'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const SLUG = 'contabilidade-para-arquitetos'
const TITLE = 'Contabilidade para Arquitetos'
const DESCRIPTION =
  'Guia completo de contabilidade para arquitetos: abertura de empresa, CNPJ CAU, Simples Nacional, emissão de ART/RRT e redução de impostos em Contagem/MG. Especialista Elen Lima.'

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
    question: 'Arquiteto autônomo precisa de CNPJ?',
    answer:
      'Não é obrigatório, mas ter CNPJ permite reduzir drasticamente a carga tributária. Como pessoa física, o arquiteto pode pagar até 27,5% de IR. Com empresa no Simples Nacional, a alíquota efetiva pode cair para 6%, além de facilitar a emissão de NFS-e e RRT junto ao CAU.',
  },
  {
    question: 'Arquiteto pode ser MEI?',
    answer:
      'Não. A atividade de arquitetura (CNAE 7111-1/00) é vedada ao MEI. A alternativa é abrir uma ME ou EPP, optando pelo Simples Nacional ou Lucro Presumido dependendo do faturamento.',
  },
  {
    question: 'Como funciona o Simples Nacional para arquitetos?',
    answer:
      'Arquitetos enquadram-se no Anexo III ou V do Simples Nacional. O Fator R determina qual anexo se aplica: se o pró-labore for ≥ 28% do faturamento mensal, usa-se o Anexo III (começa em 6%). Caso contrário, aplica-se o Anexo V (começa em 15,5%). Um planejamento tributário correto pode garantir o Anexo III.',
  },
  {
    question: 'A empresa de arquitetura precisa de registro no CAU?',
    answer:
      'Sim. Além do registro individual no CAU-BR, a pessoa jurídica que presta serviços de arquitetura deve obter o registro de pessoa jurídica no CAU do estado. Sem isso, não é possível emitir RRT (Registro de Responsabilidade Técnica) pela empresa.',
  },
  {
    question: 'Como emitir RRT como pessoa jurídica?',
    answer:
      'Com a empresa registrada no CAU, o arquiteto sócio assina como responsável técnico e emite o RRT vinculado ao CNPJ. O contador orienta sobre como contabilizar corretamente o valor dos RRTs na receita da empresa.',
  },
  {
    question: 'Posso ter sócios no escritório de arquitetura?',
    answer:
      'Sim. A estrutura mais comum é a Sociedade Limitada (Ltda.) entre arquitetos parceiros. O contrato social define a participação de cada sócio, a divisão de lucros e a responsabilidade técnica. Cada sócio precisa de registro individual no CAU.',
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

export default function ContabilidadeParaArquitetos() {
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
                <li className="text-white" aria-current="page">Arquitetos</li>
              </ol>
            </nav>
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Contabilidade para Arquitetos
            </h1>
            <p className="mx-auto max-w-xl text-lg text-white/80">
              Regularize seu escritório, reduza impostos e foque no que você faz de melhor:
              projetar.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=Ol%C3%A1%2C+sou+arquiteto+e+quero+saber+mais+sobre+abrir+minha+empresa.`}
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
                Por que arquitetos devem ter CNPJ?
              </h2>
              <p className="mb-3 text-text-muted">
                Arquitetos que atuam como autônomos (CPF) pagam até{' '}
                <strong>27,5% de Imposto de Renda</strong> sobre seus honorários, além de
                contribuição previdenciária de 11% sobre o valor recebido. Com uma empresa
                enquadrada no <strong>Simples Nacional</strong>, essa carga pode cair para
                apenas <strong>6% a 14,5%</strong> do faturamento bruto.
              </p>
              <p className="text-text-muted">
                Além da economia fiscal, o CNPJ facilita a emissão de RRT no CAU, a abertura
                de conta PJ, o acesso a crédito empresarial e a participação em licitações e
                concursos de projetos.
              </p>
            </section>

            {/* Seção 2: Tabela */}
            <section aria-labelledby="s2" className="mt-10">
              <h2 id="s2" className="section-title mb-4">
                Simples Nacional para arquitetos: Anexo III ou V?
              </h2>
              <p className="mb-4 text-text-muted">
                O enquadramento depende do <strong>Fator R</strong> — relação entre folha de
                salários (incluindo pró-labore) e faturamento:
              </p>
              <div className="mb-4 overflow-hidden rounded-xl border border-neutral-border">
                <table className="w-full text-sm">
                  <thead className="bg-primary/5">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-accent">Situação</th>
                      <th className="px-4 py-3 text-left font-semibold text-accent">Anexo</th>
                      <th className="px-4 py-3 text-left font-semibold text-accent">Alíquota mínima</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-neutral-border">
                      <td className="px-4 py-3 text-text-muted">Pró-labore ≥ 28% do faturamento</td>
                      <td className="px-4 py-3 font-medium text-success">III</td>
                      <td className="px-4 py-3 font-medium text-success">6,0%</td>
                    </tr>
                    <tr className="border-t border-neutral-border bg-neutral-bg">
                      <td className="px-4 py-3 text-text-muted">Pró-labore &lt; 28% do faturamento</td>
                      <td className="px-4 py-3 font-medium text-orange-600">V</td>
                      <td className="px-4 py-3 font-medium text-orange-600">15,5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-text-muted">
                Use nossa{' '}
                <a href="/#calculadora" className="service-link font-medium underline">
                  Calculadora CLT vs PJ
                </a>{' '}
                para simular o impacto real nos seus honorários.
              </p>
            </section>

            {/* Seção 3: Passo a passo */}
            <section aria-labelledby="s3" className="mt-10">
              <h2 id="s3" className="section-title mb-4">
                Passo a passo: como abrir seu escritório de arquitetura
              </h2>
              <ol className="space-y-4 text-text-muted">
                {[
                  ['Escolher o porte e regime', 'ME (até R$ 360k/ano) no Simples Nacional é a escolha mais comum para arquitetos autônomos.'],
                  ['Definir o CNAE correto', 'CNAE principal: 7111-1/00 (Serviços de Arquitetura). Atividades secundárias como design de interiores podem exigir CNAEs adicionais.'],
                  ['Registrar a empresa no CAU', 'A pessoa jurídica deve ser inscrita no CAU-BR e no CAU estadual para poder emitir RRT e assinar projetos como empresa.'],
                  ['Abrir conta PJ', 'Separe completamente receitas da empresa das finanças pessoais — requisito básico para uma contabilidade limpa.'],
                  ['Configurar emissão de NFS-e', 'Credenciar-se na prefeitura de Contagem para emitir notas de serviço eletrônicas a cada projeto concluído.'],
                  ['Acompanhamento contábil mensal', 'Apuração do DAS, folha de pró-labore, DEFIS anual e planejamento do Fator R para manter o Anexo III.'],
                ].map(([titulo, descricao], i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-accent">{titulo}</h3>
                      <p className="mt-0.5 text-sm">{descricao}</p>
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
                  <details key={i} className="card group" name="faq-arquitetos">
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
                Pronto para regularizar seu escritório?
              </h2>
              <p className="mb-5 text-sm text-text-muted">
                Fale com a Elen Lima e receba uma análise personalizada para o seu caso.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=Ol%C3%A1%2C+sou+arquiteto+e+quero+uma+an%C3%A1lise+para+meu+escrit%C3%B3rio.`}
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
