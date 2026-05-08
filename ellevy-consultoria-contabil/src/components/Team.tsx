import { motion } from 'framer-motion'
import { GraduationCap, Lightbulb, Handshake } from 'lucide-react'
import teamImg from '../assets/images/team.jpg'

const VALUES = [
  {
    icon: GraduationCap,
    title: 'Qualificados',
    description: 'Equipe com ampla experiência e formação acadêmica de excelência, sempre atualizada com as mudanças do mercado.',
  },
  {
    icon: Lightbulb,
    title: 'Inovadores',
    description: 'Desenvolvemos soluções criativas para os desafios únicos do seu negócio, além das respostas convencionais.',
  },
  {
    icon: Handshake,
    title: 'Parceiros Confiáveis',
    description: 'Atuamos como uma extensão da sua equipe, construindo relacionamentos sólidos baseados em confiança e resultados.',
  },
]

export function Team() {
  return (
    <section id="time" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-brand-beige rounded-3xl" />
            <img
              src={teamImg}
              alt="Time Ellevy Consultoria — especialistas em contabilidade consultiva"
              loading="lazy"
              width={540}
              height={480}
              className="relative rounded-3xl object-cover w-full shadow-xl"
            />
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-brand-blue rounded-full flex-shrink-0" />
              <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest">
                Nosso Time
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
              Apaixonados por resultados,{' '}
              <span className="text-brand-blue">parceiros de verdade</span>
            </h2>

            <p className="text-brand-gray text-lg leading-relaxed mb-8 text-justify">
              Nosso time une conhecimento técnico de excelência com paixão genuína
              pelo sucesso dos clientes. Não somos apenas prestadores de serviço —
              somos parte da sua equipe.
            </p>

            <div className="flex flex-col gap-6">
              {VALUES.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                      <Icon size={20} className="text-brand-blue" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-dark mb-1">{value.title}</h3>
                      <p className="text-brand-gray text-sm leading-relaxed text-justify">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
