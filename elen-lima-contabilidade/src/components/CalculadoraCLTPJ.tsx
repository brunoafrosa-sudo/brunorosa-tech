'use client'

import { useState, useMemo } from 'react'

// ─── Tabelas vigentes 2024 ──────────────────────────────────────────────────

const INSS_FAIXAS = [
  { limite: 1412.00, aliquota: 0.075 },
  { limite: 2666.68, aliquota: 0.09 },
  { limite: 4000.03, aliquota: 0.12 },
  { limite: 7786.02, aliquota: 0.14 },
]
const INSS_TETO = 908.86

const IR_FAIXAS = [
  { limite: 2259.20, aliquota: 0, deducao: 0 },
  { limite: 2826.65, aliquota: 0.075, deducao: 169.44 },
  { limite: 3751.05, aliquota: 0.15, deducao: 381.44 },
  { limite: 4664.68, aliquota: 0.225, deducao: 662.77 },
  { limite: Infinity, aliquota: 0.275, deducao: 896.00 },
]

// Simples Nacional Anexo III e V (faixas de faturamento anual)
const SIMPLES_ANEXO_III = [
  { ate: 180000, aliquota: 0.06, deducao: 0 },
  { ate: 360000, aliquota: 0.112, deducao: 9360 },
  { ate: 720000, aliquota: 0.135, deducao: 17640 },
  { ate: 1800000, aliquota: 0.16, deducao: 35640 },
  { ate: 3600000, aliquota: 0.21, deducao: 125640 },
  { ate: 4800000, aliquota: 0.33, deducao: 648000 },
]
const SIMPLES_ANEXO_V = [
  { ate: 180000, aliquota: 0.155, deducao: 0 },
  { ate: 360000, aliquota: 0.18, deducao: 4500 },
  { ate: 720000, aliquota: 0.195, deducao: 9900 },
  { ate: 1800000, aliquota: 0.205, deducao: 17100 },
  { ate: 3600000, aliquota: 0.23, deducao: 62100 },
  { ate: 4800000, aliquota: 0.305, deducao: 540000 },
]

// ─── Funções de cálculo ─────────────────────────────────────────────────────

function calcularINSS(salarioBruto: number): number {
  let inss = 0
  let base = salarioBruto
  let limiteAnterior = 0
  for (const faixa of INSS_FAIXAS) {
    if (base <= 0) break
    const faixaValor = Math.min(base, faixa.limite - limiteAnterior)
    inss += faixaValor * faixa.aliquota
    base -= faixaValor
    limiteAnterior = faixa.limite
  }
  return Math.min(inss, INSS_TETO)
}

function calcularIR(baseCalculo: number): number {
  for (const faixa of IR_FAIXAS) {
    if (baseCalculo <= faixa.limite) {
      return Math.max(0, baseCalculo * faixa.aliquota - faixa.deducao)
    }
  }
  return 0
}

function aliquotaEfetivaSimples(faturamentoAnual: number, tabela: typeof SIMPLES_ANEXO_III): number {
  for (const faixa of tabela) {
    if (faturamentoAnual <= faixa.ate) {
      return (faturamentoAnual * faixa.aliquota - faixa.deducao) / faturamentoAnual
    }
  }
  return tabela[tabela.length - 1].aliquota
}

function fmt(valor: number): string {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

// ─── Componente ─────────────────────────────────────────────────────────────

export default function CalculadoraCLTPJ() {
  const [salarioBruto, setSalarioBruto] = useState(8000)
  const [faturamentoPJ, setFaturamentoPJ] = useState(10000)
  const [prolabore, setProlabore] = useState(1412)

  const resultado = useMemo(() => {
    // ── CLT ──
    const inss = calcularINSS(salarioBruto)
    const baseIR = salarioBruto - inss - 528.0 // dedução dependente simplificada
    const ir = calcularIR(Math.max(0, baseIR))
    const liquidoCLT = salarioBruto - inss - ir
    const fgts = salarioBruto * 0.08

    // ── PJ ──
    const faturamentoAnual = faturamentoPJ * 12
    const fatorR = prolabore / faturamentoPJ

    // Fator R >= 28% → Anexo III (mais vantajoso), caso contrário → Anexo V
    const usaAnexoIII = fatorR >= 0.28
    const tabela = usaAnexoIII ? SIMPLES_ANEXO_III : SIMPLES_ANEXO_V
    const aliqEfetiva = aliquotaEfetivaSimples(faturamentoAnual, tabela)
    const impostoSimples = faturamentoPJ * aliqEfetiva

    // INSS sobre pró-labore (contribuinte individual: 11%)
    const inssProlabore = Math.min(prolabore * 0.11, INSS_TETO)
    const irProlabore = calcularIR(Math.max(0, prolabore - inssProlabore))

    const liquidoPJ = faturamentoPJ - impostoSimples - inssProlabore - irProlabore

    const economia = liquidoPJ - liquidoCLT
    const percentual = liquidoCLT > 0 ? (economia / liquidoCLT) * 100 : 0

    return {
      clt: { bruto: salarioBruto, inss, ir, liquido: liquidoCLT, fgts },
      pj: {
        faturamento: faturamentoPJ,
        impostoSimples,
        aliqEfetiva,
        anexo: usaAnexoIII ? 'III' : 'V',
        fatorR,
        inssProlabore,
        irProlabore,
        liquido: liquidoPJ,
      },
      economia,
      percentual,
    }
  }, [salarioBruto, faturamentoPJ, prolabore])

  const barMax = Math.max(resultado.clt.liquido, resultado.pj.liquido)

  return (
    <section
      id="calculadora"
      aria-labelledby="calc-titulo"
      className="bg-neutral-bg px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Ferramenta Gratuita
          </span>
          <h2 id="calc-titulo" className="section-title mb-3">
            Calculadora CLT vs PJ para Arquitetos e Engenheiros
          </h2>
          <p className="mx-auto max-w-xl text-text-muted">
            Simule quanto você ganha a mais atuando como PJ. Os cálculos consideram INSS,
            Imposto de Renda, Simples Nacional (Anexo III ou V) e o{' '}
            <strong>Fator R</strong> — essencial para escritórios de arquitetura e engenharia.
          </p>
        </div>

        {/* Inputs */}
        <div className="card mb-8 grid gap-6 sm:grid-cols-3">
          <div>
            <label htmlFor="salario-bruto" className="mb-1 block text-sm font-medium text-text-primary">
              Salário Bruto CLT
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-text-muted">
                R$
              </span>
              <input
                id="salario-bruto"
                type="number"
                min={1412}
                max={50000}
                step={100}
                value={salarioBruto}
                onChange={(e) => setSalarioBruto(Number(e.target.value))}
                className="w-full rounded-md border border-neutral-border bg-white py-2 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="faturamento-pj" className="mb-1 block text-sm font-medium text-text-primary">
              Faturamento PJ / mês
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-text-muted">
                R$
              </span>
              <input
                id="faturamento-pj"
                type="number"
                min={1500}
                max={400000}
                step={500}
                value={faturamentoPJ}
                onChange={(e) => setFaturamentoPJ(Number(e.target.value))}
                className="w-full rounded-md border border-neutral-border bg-white py-2 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="prolabore" className="mb-1 block text-sm font-medium text-text-primary">
              Pró-labore mensal
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-text-muted">
                R$
              </span>
              <input
                id="prolabore"
                type="number"
                min={1412}
                max={faturamentoPJ}
                step={100}
                value={prolabore}
                onChange={(e) => setProlabore(Number(e.target.value))}
                className="w-full rounded-md border border-neutral-border bg-white py-2 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <p className="mt-1 text-xs text-text-muted">
              Fator R:{' '}
              <strong className={resultado.pj.fatorR >= 0.28 ? 'text-success' : 'text-orange-500'}>
                {(resultado.pj.fatorR * 100).toFixed(1)}%
              </strong>{' '}
              → Anexo <strong>{resultado.pj.anexo}</strong>
            </p>
          </div>
        </div>

        {/* Resultado visual */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* CLT */}
          <div className="card border-l-4 border-l-primary">
            <h3 className="mb-4 font-semibold text-accent">Regime CLT</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-text-muted">Salário bruto</dt>
                <dd className="font-medium">{fmt(resultado.clt.bruto)}</dd>
              </div>
              <div className="flex justify-between text-red-600">
                <dt>(-) INSS</dt>
                <dd>- {fmt(resultado.clt.inss)}</dd>
              </div>
              <div className="flex justify-between text-red-600">
                <dt>(-) IR retido</dt>
                <dd>- {fmt(resultado.clt.ir)}</dd>
              </div>
              <div className="mt-3 flex justify-between border-t border-neutral-border pt-3">
                <dt className="font-semibold text-accent">Líquido mensal</dt>
                <dd className="text-lg font-bold text-accent">{fmt(resultado.clt.liquido)}</dd>
              </div>
              <div className="flex justify-between text-xs text-text-muted">
                <dt>+ FGTS (8%)</dt>
                <dd>{fmt(resultado.clt.fgts)}</dd>
              </div>
            </dl>

            {/* Barra */}
            <div className="mt-4">
              <div className="h-3 overflow-hidden rounded-full bg-neutral-border">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${Math.round((resultado.clt.liquido / barMax) * 100)}%` }}
                  role="presentation"
                />
              </div>
              <p className="mt-1 text-right text-xs text-text-muted">
                {Math.round((resultado.clt.liquido / barMax) * 100)}% do maior valor
              </p>
            </div>
          </div>

          {/* PJ */}
          <div className="card border-l-4 border-l-success">
            <h3 className="mb-4 font-semibold text-accent">Regime PJ</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-text-muted">Faturamento</dt>
                <dd className="font-medium">{fmt(resultado.pj.faturamento)}</dd>
              </div>
              <div className="flex justify-between text-red-600">
                <dt>
                  (-) Simples Nacional{' '}
                  <span className="text-xs">
                    (Anx.{resultado.pj.anexo} {(resultado.pj.aliqEfetiva * 100).toFixed(2)}%)
                  </span>
                </dt>
                <dd>- {fmt(resultado.pj.impostoSimples)}</dd>
              </div>
              <div className="flex justify-between text-red-600">
                <dt>(-) INSS pró-labore</dt>
                <dd>- {fmt(resultado.pj.inssProlabore)}</dd>
              </div>
              <div className="flex justify-between text-red-600">
                <dt>(-) IR pró-labore</dt>
                <dd>- {fmt(resultado.pj.irProlabore)}</dd>
              </div>
              <div className="mt-3 flex justify-between border-t border-neutral-border pt-3">
                <dt className="font-semibold text-accent">Líquido mensal</dt>
                <dd className="text-lg font-bold text-success">{fmt(resultado.pj.liquido)}</dd>
              </div>
            </dl>

            {/* Barra */}
            <div className="mt-4">
              <div className="h-3 overflow-hidden rounded-full bg-neutral-border">
                <div
                  className="h-full rounded-full bg-success transition-all duration-500"
                  style={{ width: `${Math.round((resultado.pj.liquido / barMax) * 100)}%` }}
                  role="presentation"
                />
              </div>
              <p className="mt-1 text-right text-xs text-text-muted">
                {Math.round((resultado.pj.liquido / barMax) * 100)}% do maior valor
              </p>
            </div>
          </div>
        </div>

        {/* Economia */}
        <div
          className={`mt-6 rounded-xl p-5 text-center ${resultado.economia >= 0 ? 'bg-success/10' : 'bg-orange-50'}`}
          role="status"
          aria-live="polite"
        >
          {resultado.economia >= 0 ? (
            <>
              <p className="text-sm font-medium text-success">
                Como PJ, você pode receber
              </p>
              <p className="text-3xl font-bold text-success">
                {fmt(resultado.economia)} a mais / mês
              </p>
              <p className="mt-1 text-sm text-text-muted">
                {resultado.percentual.toFixed(1)}% a mais que no regime CLT
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-orange-600">
                Neste cenário, o CLT é mais vantajoso por
              </p>
              <p className="text-3xl font-bold text-orange-600">
                {fmt(Math.abs(resultado.economia))} / mês
              </p>
            </>
          )}
          <p className="mt-3 text-xs text-text-muted">
            * Estimativa simplificada. Consulte um contador para análise completa do seu caso.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="mb-3 text-sm text-text-muted">
            Quer uma análise completa para o seu <strong>escritório de arquitetura ou engenharia</strong>?
          </p>
          <a href="#contato" className="btn-primary">
            Falar com a Elen Lima — É Grátis
            <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
