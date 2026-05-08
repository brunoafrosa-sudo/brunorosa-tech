import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    pergunta: 'Minha empresa tem múltiplos CNPJs. Como a Ellevy pode me ajudar?',
    resposta: 'Gerenciamos toda a inteligência contábil do seu grupo econômico de forma integrada — obrigações, cruzamento de dados e planejamento tributário entre os CNPJs, reduzindo custos e eliminando riscos de inconsistência.',
  },
  {
    pergunta: 'Como a Reforma Tributária vai impactar meu negócio?',
    resposta: 'Monitoramos ativamente as mudanças legislativas e traduzimos o impacto real para a sua empresa. Nossa consultoria ativa garante que você esteja preparado antes que as novas regras entrem em vigor, sem surpresas.',
  },
  {
    pergunta: 'Minha empresa tem irregularidades fiscais ou trabalhistas. É possível regularizar?',
    resposta: 'Sim. O saneamento de irregularidades é um dos nossos principais diferenciais. Atuamos na regularização fiscal, contábil e trabalhista com um plano estruturado para eliminar passivos e devolver a conformidade à sua empresa.',
  },
  {
    pergunta: 'Qual a diferença entre contabilidade tradicional e contabilidade consultiva?',
    resposta: 'A contabilidade tradicional registra o que já aconteceu. A contabilidade consultiva da Ellevy analisa os dados para orientar decisões futuras — reduzindo impostos, antecipando riscos e transformando números em estratégia de crescimento.',
  },
  {
    pergunta: 'Como funciona o início do atendimento com a Ellevy?',
    resposta: 'O primeiro passo é uma conversa sem compromisso. Entendemos o momento da sua empresa, identificamos as principais oportunidades e apresentamos um plano personalizado. Basta entrar em contato pelo WhatsApp.',
  },
]

export function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null)

  const toggle = (i: number) => setAberto(aberto === i ? null : i)

  return (
    <section id="faq" className="py-16 md:py-24 bg-brand-beige">
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
              Perguntas Frequentes
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            Dúvidas que resolvemos todo dia
          </h2>
          <p className="text-brand-gray text-lg max-w-xl text-justify">
            Respostas diretas para as principais dores de quem busca uma consultoria
            contábil de verdade.
          </p>
        </motion.div>

        <div className="max-w-3xl flex flex-col">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`border-b border-brand-beige-mid ${i === 0 ? 'border-t' : ''}`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                aria-expanded={aberto === i}
              >
                <span className={`font-semibold text-base leading-snug ${aberto === i ? 'text-brand-blue' : 'text-brand-dark'}`}>
                  {faq.pergunta}
                </span>
                <span className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                  {aberto === i
                    ? <Minus size={16} className="text-brand-blue" />
                    : <Plus size={16} className="text-brand-gray" />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {aberto === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-brand-gray leading-relaxed pb-5 text-justify pr-12">
                      {faq.resposta}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
