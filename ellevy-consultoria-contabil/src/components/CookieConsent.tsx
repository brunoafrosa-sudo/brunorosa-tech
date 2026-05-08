import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, ChevronDown, ChevronUp } from 'lucide-react'

const STORAGE_KEY = 'ellevy_cookie_consent'

type ConsentState = {
  essential: true
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({
    essential: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      // Aguarda 1s para não sobrepor o carregamento inicial
      const t = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(t)
    }
  }, [])

  const save = (data: ConsentState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...data, date: new Date().toISOString() }))
    setVisible(false)
  }

  const acceptAll = () => save({ essential: true, analytics: true, marketing: true })
  const acceptEssential = () => save({ essential: true, analytics: false, marketing: false })
  const saveCustom = () => save(consent)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          role="dialog"
          aria-label="Política de Cookies"
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto px-4 py-5">

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <Cookie size={20} className="text-brand-blue flex-shrink-0" aria-hidden="true" />
                <p className="font-bold text-brand-dark text-sm">
                  Sua privacidade importa para a Ellevy
                </p>
              </div>
              <button
                onClick={acceptEssential}
                aria-label="Fechar e aceitar apenas essenciais"
                className="text-brand-gray-light hover:text-brand-dark transition-colors flex-shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Texto LGPD */}
            <p className="text-brand-gray text-xs leading-relaxed mb-4 max-w-3xl">
              Utilizamos cookies para garantir o funcionamento do site, analisar o desempenho e
              personalizar sua experiência. Conforme a{' '}
              <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>, você
              tem o direito de escolher quais cookies aceita. O responsável pelo tratamento de
              dados é a <strong>Ellevy Consultoria</strong>, Rua do Carmo, 131 — Sabará/MG.
              Dúvidas:{' '}
              <a href="mailto:administrativo@ellevy.co" className="text-brand-blue underline">
                administrativo@ellevy.co
              </a>
            </p>

            {/* Personalização expansível */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-brand-blue text-xs font-semibold mb-3 hover:underline"
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {expanded ? 'Ocultar preferências' : 'Personalizar preferências'}
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden mb-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-brand-beige rounded-xl p-4">

                    {/* Essenciais — sempre ativo */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-brand-dark font-semibold text-xs mb-1">Essenciais</p>
                        <p className="text-brand-gray text-[11px] leading-relaxed">
                          Necessários para o funcionamento básico do site. Não podem ser desativados.
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-9 h-5 bg-brand-blue rounded-full flex items-center justify-end px-1">
                        <div className="w-3.5 h-3.5 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Analíticos */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-brand-dark font-semibold text-xs mb-1">Analíticos</p>
                        <p className="text-brand-gray text-[11px] leading-relaxed">
                          Nos ajudam a entender como o site é utilizado para melhorar a experiência.
                        </p>
                      </div>
                      <button
                        role="switch"
                        aria-checked={consent.analytics}
                        onClick={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                        className={`flex-shrink-0 w-9 h-5 rounded-full flex items-center px-1 transition-colors ${consent.analytics ? 'bg-brand-blue justify-end' : 'bg-slate-300 justify-start'}`}
                      >
                        <div className="w-3.5 h-3.5 bg-white rounded-full shadow" />
                      </button>
                    </div>

                    {/* Marketing */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-brand-dark font-semibold text-xs mb-1">Marketing</p>
                        <p className="text-brand-gray text-[11px] leading-relaxed">
                          Permitem exibir conteúdo relevante com base nos seus interesses.
                        </p>
                      </div>
                      <button
                        role="switch"
                        aria-checked={consent.marketing}
                        onClick={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                        className={`flex-shrink-0 w-9 h-5 rounded-full flex items-center px-1 transition-colors ${consent.marketing ? 'bg-brand-blue justify-end' : 'bg-slate-300 justify-start'}`}
                      >
                        <div className="w-3.5 h-3.5 bg-white rounded-full shadow" />
                      </button>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
              <button
                onClick={acceptEssential}
                className="text-brand-gray text-xs font-semibold px-5 py-2.5 rounded-full border border-slate-200 hover:border-brand-blue hover:text-brand-blue transition-colors min-h-[40px]"
              >
                Apenas essenciais
              </button>
              {expanded && (
                <button
                  onClick={saveCustom}
                  className="text-brand-blue text-xs font-semibold px-5 py-2.5 rounded-full border-2 border-brand-blue hover:bg-brand-blue/10 transition-colors min-h-[40px]"
                >
                  Salvar preferências
                </button>
              )}
              <button
                onClick={acceptAll}
                className="bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors min-h-[40px]"
              >
                Aceitar todos
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
