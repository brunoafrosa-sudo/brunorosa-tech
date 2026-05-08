import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { useWhatsApp } from '../hooks/useWhatsApp'
import heroImg from '../assets/images/hero.jpg'

export function Hero() {
  const { url } = useWhatsApp('Olá! Gostaria de conhecer as soluções da Ellevy Consultoria.')

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-brand-beige pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-20">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Faixa azul "marca-texto" */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-1 bg-brand-blue rounded-full flex-shrink-0" />
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest">
              Inteligência Empresarial
            </p>
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl font-black text-brand-dark leading-tight mb-6"
          >
            Soluções que vão{' '}
            <span className="text-brand-blue">além dos números</span>
          </h1>

          <p className="text-brand-gray text-lg leading-relaxed mb-8 max-w-md text-justify">
            Transformamos complexidades fiscais em estratégias claras e acessíveis
            para o crescimento sustentável do seu negócio em Sabará e Região.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-8 py-4 rounded-full transition-colors active:scale-95 min-h-[56px] shadow-md"
              aria-label="Falar com a Ellevy pelo WhatsApp"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Falar no WhatsApp
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 text-brand-blue font-semibold px-6 py-4 rounded-full border-2 border-brand-blue hover:bg-brand-blue/10 transition-colors min-h-[56px]"
            >
              Ver Serviços
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-brand-blue/10 rounded-3xl" />
            <img
              src={heroImg}
              alt="Equipe Ellevy Consultoria em reunião estratégica"
              loading="lazy"
              width={540}
              height={620}
              className="relative rounded-3xl object-cover w-full max-h-[320px] md:max-h-none shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
