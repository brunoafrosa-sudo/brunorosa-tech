import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useWhatsApp } from '../hooks/useWhatsApp'

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Telefones',
    lines: ['(31) 3671-1044', '(31) 99585-1044'],
  },
  {
    icon: Mail,
    label: 'E-mail',
    lines: ['administrativo@ellevy.co'],
  },
  {
    icon: MapPin,
    label: 'Endereço',
    lines: ['Rua do Carmo, 131', 'Sabará/MG'],
  },
]

export function Contact() {
  const { url } = useWhatsApp('Olá! Gostaria de agendar uma conversa com a Ellevy Consultoria.')

  return (
    <section id="contato" className="py-16 md:py-24 bg-brand-blue">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-white/40 rounded-full flex-shrink-0" />
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest">
                Entre em Contato
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Vamos conversar sobre{' '}
              <span className="text-brand-beige">o seu negócio?</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8 text-justify">
              Estamos prontos para entender seus desafios e oferecer as melhores
              soluções contábeis e estratégicas para a sua empresa.
            </p>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brand-blue font-bold px-8 py-4 rounded-full hover:bg-brand-beige transition-colors active:scale-95 min-h-[56px] shadow-lg"
              aria-label="Falar com a Ellevy pelo WhatsApp"
            >
              <MessageCircle size={22} aria-hidden="true" />
              Iniciar conversa no WhatsApp
            </a>
          </motion.div>

          {/* Info de contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-white font-medium">{line}</p>
                    ))}
                  </div>
                </div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
