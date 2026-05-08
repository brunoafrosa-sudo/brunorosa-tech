import { motion } from 'framer-motion'
import { BarChart2, Shield, Radar } from 'lucide-react'

const DIFFERENTIALS = [
  {
    icon: BarChart2,
    title: 'Análise Empresarial',
    description: 'Soluções precisas baseadas em dados reais, nas mãos de especialistas com ampla experiência de mercado.',
  },
  {
    icon: Shield,
    title: 'Gestão Tributária Eficiente',
    description: 'Planejamento tributário inteligente para redução legal de custos e maximização dos resultados da sua empresa.',
  },
  {
    icon: Radar,
    title: 'Redução de Riscos',
    description: 'Antecipamos tendências econômicas e regulatórias para proteger seu negócio antes que os problemas apareçam.',
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

export function Differentials() {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-brand-beige">
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
              Diferenciais Estratégicos
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            Por que escolher a Ellevy?
          </h2>
          <p className="text-brand-gray text-lg max-w-xl text-justify">
            Combinamos profundidade técnica com uma abordagem humana e resolutiva,
            sendo parceiros reais no crescimento do seu negócio.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {DIFFERENTIALS.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-blue/20 transition-all"
              >
                <div className="w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center mb-5">
                  <Icon size={26} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-brand-gray leading-relaxed text-justify">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
