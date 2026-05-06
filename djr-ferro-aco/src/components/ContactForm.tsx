import { useState, useRef, FormEvent } from 'react'
import { Send, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'sending' | 'success' | 'error'

// Substitua pelo seu endpoint Formspree: https://formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/SEU_ID_AQUI'

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')
  // Honeypot: campo oculto — bots preenchem, humanos não
  const honeypotRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    // Se o campo honeypot estiver preenchido, é um bot — simular sucesso silenciosamente
    if (honeypotRef.current?.value) {
      setFormState('success')
      return
    }

    setFormState('sending')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ nome, telefone, mensagem }),
      })

      if (res.ok) {
        setFormState('success')
        setNome('')
        setTelefone('')
        setMensagem('')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  const whatsappUrl = `https://wa.me/5531993608992?text=${encodeURIComponent(
    `Olá! Vim pelo site e gostaria de um orçamento.\n\nNome: ${nome}\nMensagem: ${mensagem}`
  )}`

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm h-full">
      {formState === 'success' ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Mensagem enviada!</h3>
          <p className="text-slate-400">Retornaremos em breve. Você também pode nos chamar pelo WhatsApp.</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <MessageCircle size={18} />
            Chamar no WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot — visualmente oculto, invisível para usuários reais */}
          <input
            ref={honeypotRef}
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="contact-nome" className="block text-sm font-medium text-slate-700 mb-1">
                Nome / Empresa *
              </label>
              <input
                id="contact-nome"
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: Construtora Silva"
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="contact-tel" className="block text-sm font-medium text-slate-700 mb-1">
                Telefone / WhatsApp *
              </label>
              <input
                id="contact-tel"
                type="tel"
                required
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(31) 9XXXX-XXXX"
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="contact-msg" className="block text-sm font-medium text-slate-700 mb-1">
              Mensagem / Pedido de Orçamento *
            </label>
            <textarea
              id="contact-msg"
              required
              rows={4}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Descreva o material, quantidade e prazo necessário..."
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none transition-all"
            />
          </div>

          {formState === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm mb-4 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              <AlertCircle size={16} className="flex-shrink-0" />
              <span>
                Erro ao enviar. Tente pelo{' '}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline">
                  WhatsApp
                </a>
                .
              </span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={formState === 'sending'}
              className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              {formState === 'sending'
                ? <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                : <><Send size={18} /> Enviar Mensagem</>}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </form>
      )}
    </div>
  )
}
