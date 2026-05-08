import { motion } from 'framer-motion'
import { Radar, BarChart2, FolderOpen } from 'lucide-react'

const CARDS = [
  {
    icon: Radar,
    title: 'Radar da Reforma',
    description: 'Acompanhe em tempo real as mudanças da Reforma Tributária e saiba exatamente o que impacta o seu negócio.',
    badge: 'Tributário',
  },
  {
    icon: BarChart2,
    title: 'Dashboard de Indicadores',
    description: 'Visualize os principais KPIs financeiros e contábeis da sua empresa em painéis claros e acionáveis.',
    badge: 'Financeiro',
  },
  {
    icon: FolderOpen,
    title: 'Hub de Documentos',
    description: 'Centralize certidões, obrigações e documentos fiscais com alertas de vencimento e conformidade.',
    badge: 'Compliance',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Intelligence() {
  return (
    <section id="inteligencia" className="py-16 md:py-24 bg-brand-beige">
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
              Recursos de Inteligência
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            Tecnologia a favor da sua empresa
          </h2>
          <p className="text-brand-gray text-lg max-w-xl text-justify">
            Ferramentas inteligentes para transformar dados em decisões estratégicas,
            com clareza e segurança para o seu negócio.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CARDS.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-blue/20 transition-all group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center group-hover:bg-brand-blue-dark transition-colors">
                    <Icon size={26} className="text-white" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{card.title}</h3>
                <p className="text-brand-gray leading-relaxed text-justify">{card.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
