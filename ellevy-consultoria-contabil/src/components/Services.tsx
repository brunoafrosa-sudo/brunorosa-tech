import { motion } from 'framer-motion'
import { BookOpen, Scale, Users, Briefcase, TrendingUp } from 'lucide-react'
import { useWhatsApp } from '../hooks/useWhatsApp'

const SERVICES = [
  {
    icon: BookOpen,
    title: 'Contabilidade Consultiva',
    description: 'Soluções personalizadas e suporte estratégico que transformam sua contabilidade em vantagem competitiva.',
  },
  {
    icon: Scale,
    title: 'Assessoria Tributária',
    description: 'Maximizamos seus benefícios tributários e garantimos conformidade legal, reduzindo riscos e custos.',
  },
  {
    icon: Users,
    title: 'Assessoria Trabalhista',
    description: 'Conformidade plena em rotinas de departamento pessoal para proteger sua empresa de passivos trabalhistas.',
  },
  {
    icon: Briefcase,
    title: 'Consultoria Empresarial',
    description: 'Orientação estratégica e soluções customizadas para os desafios reais do seu negócio.',
  },
  {
    icon: TrendingUp,
    title: 'Planejamento Estratégico',
    description: 'Planos robustos e orientados a dados para impulsionar o crescimento sustentável da sua empresa.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Services() {
  const { url } = useWhatsApp('Olá! Tenho interesse em conhecer os serviços da Ellevy.')

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header da seção */}
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
              Nossos Serviços
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            Soluções para cada etapa do seu negócio
          </h2>
          <p className="text-brand-gray text-lg max-w-xl text-justify">
            Cada empresa tem necessidades únicas. Oferecemos serviços especializados
            para garantir conformidade, eficiência e crescimento.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-0"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`flex items-start gap-6 py-7 ${i < SERVICES.length - 1 ? 'border-b border-slate-100' : ''}`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                  <Icon size={22} className="text-brand-blue" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">{service.title}</h3>
                  <p className="text-brand-gray leading-relaxed text-justify">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-8 py-4 rounded-full transition-colors min-h-[52px] shadow-md"
          >
            Falar sobre minha necessidade
          </a>
        </motion.div>

      </div>
    </section>
  )
}
