import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, X, MessageCircle } from 'lucide-react'
import { useWhatsApp } from '../hooks/useWhatsApp'

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function calcularEconomia(faturamento: number) {
  // Estimativa conservadora: planejamento tributário pode reduzir entre 10% e 20% da carga
  const economiaMin = faturamento * 0.10
  const economiaMax = faturamento * 0.20
  return { economiaMin, economiaMax }
}

export function TaxCalculator() {
  const [faturamento, setFaturamento] = useState('')
  const [resultado, setResultado] = useState<{ economiaMin: number; economiaMax: number } | null>(null)
  const [modalAberto, setModalAberto] = useState(false)

  const valorNumerico = parseFloat(faturamento.replace(/\D/g, '')) / 100 || 0

  const handleCalcular = () => {
    if (valorNumerico <= 0) return
    setResultado(calcularEconomia(valorNumerico))
    setModalAberto(true)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '')
    const numero = parseFloat(raw) / 100
    setFaturamento(
      numero > 0
        ? numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
        : ''
    )
  }

  const { url } = useWhatsApp(
    `Olá! Fiz a simulação de economia tributária com faturamento de ${formatBRL(valorNumerico)} e gostaria de saber mais.`
  )

  return (
    <section id="calculadora" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-brand-blue rounded-full flex-shrink-0" />
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest">
              Simulador
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            Quanto você pode economizar?
          </h2>
          <p className="text-brand-gray text-lg max-w-xl text-justify">
            Descubra o potencial de economia tributária do seu negócio com um
            planejamento estratégico da Ellevy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-beige rounded-3xl p-6 sm:p-8 md:p-12 w-full"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center">
              <Calculator size={24} className="text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark">Simulador de Economia Tributária</h3>
          </div>

          <label className="block text-sm font-semibold text-brand-gray mb-2" htmlFor="faturamento">
            Faturamento Mensal da Empresa
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray font-medium">R$</span>
              <input
                id="faturamento"
                type="text"
                inputMode="numeric"
                value={faturamento}
                onChange={handleInput}
                placeholder="0,00"
                className="w-full pl-10 pr-4 py-4 bg-white border-2 border-slate-200 focus:border-brand-blue rounded-xl text-brand-dark font-semibold text-lg outline-none transition-colors"
              />
            </div>
            <button
              onClick={handleCalcular}
              disabled={valorNumerico <= 0}
              className="bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-xl transition-colors w-full sm:w-auto min-h-[56px]"
            >
              Calcular
            </button>
          </div>

          <p className="text-brand-gray-light text-xs mt-3">
            * Estimativa baseada em médias de planejamento tributário. Valores reais dependem de análise especializada.
          </p>
        </motion.div>

      </div>

      {/* Modal de resultado */}
      <AnimatePresence>
        {modalAberto && resultado && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
            onClick={() => setModalAberto(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-brand-dark">Resultado da Simulação</h3>
                <button
                  onClick={() => setModalAberto(false)}
                  aria-label="Fechar"
                  className="text-brand-gray hover:text-brand-dark transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="bg-brand-beige rounded-2xl p-6 mb-6">
                <p className="text-brand-gray text-sm mb-1">Faturamento informado</p>
                <p className="text-brand-dark font-bold text-xl mb-4">{formatBRL(valorNumerico)}/mês</p>

                <p className="text-brand-gray text-sm mb-1">Potencial de economia anual</p>
                <p className="text-brand-blue font-black text-xl sm:text-3xl break-words">
                  {formatBRL(resultado.economiaMin * 12)}
                  <span className="text-brand-gray font-normal text-base sm:text-lg"> – </span>
                  {formatBRL(resultado.economiaMax * 12)}
                </p>
              </div>

              <p className="text-brand-gray text-sm leading-relaxed mb-6 text-justify">
                Com um planejamento tributário da Ellevy, sua empresa pode economizar
                entre <strong>{formatBRL(resultado.economiaMin)}</strong> e{' '}
                <strong>{formatBRL(resultado.economiaMax)}</strong> por mês de forma legal.
                Fale com um especialista para uma análise personalizada.
              </p>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-4 rounded-xl transition-colors w-full"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Falar com um especialista
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
