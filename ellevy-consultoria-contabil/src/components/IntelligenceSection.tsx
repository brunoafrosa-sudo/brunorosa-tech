import { motion } from 'framer-motion'
import { TrendingUp, PieChart, BarChart2, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'
import { useWhatsApp } from '../hooks/useWhatsApp'

// --- KPI Widget ---
function KPICard({
  label,
  value,
  trend,
  delta,
}: {
  label: string
  value: string
  trend: 'up' | 'down' | 'neutral'
  delta: string
}) {
  const Icon = trend === 'up' ? ArrowUpRight : trend === 'down' ? ArrowDownRight : Minus
  const color = trend === 'up' ? 'text-emerald-500' : trend === 'down' ? 'text-red-400' : 'text-brand-gray-light'

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
      <p className="text-brand-gray-light text-xs uppercase tracking-widest mb-2">{label}</p>
      <p className="text-brand-dark font-black text-2xl mb-1">{value}</p>
      <div className={`flex items-center gap-1 text-xs font-semibold ${color}`}>
        <Icon size={14} aria-hidden="true" />
        {delta}
      </div>
    </div>
  )
}

// --- Bar Chart Mockup ---
const BARS = [
  { label: 'Jan', h: 40 },
  { label: 'Fev', h: 60 },
  { label: 'Mar', h: 50 },
  { label: 'Abr', h: 75 },
  { label: 'Mai', h: 65 },
  { label: 'Jun', h: 90 },
]

function BarChartMock() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-brand-dark font-bold text-sm">Economia Tributária</p>
          <p className="text-brand-gray-light text-xs">Últimos 6 meses</p>
        </div>
        <BarChart2 size={18} className="text-brand-blue" aria-hidden="true" />
      </div>
      <div className="flex items-end gap-2 mt-auto" style={{ height: 96 }}>
        {BARS.map((bar) => (
          <div key={bar.label} className="flex flex-col items-center gap-1 flex-1 h-full">
            <div
              className="w-full bg-brand-blue rounded-t-md opacity-80 hover:opacity-100 transition-opacity mt-auto"
              style={{ height: `${bar.h}%` }}
            />
            <span className="text-brand-gray-light text-[10px]">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- Gauge / Pie Mockup ---
function GaugeMock({ label, pct, color }: { label: string; pct: number; color: string }) {
  const r = 30
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
          <circle cx="40" cy="40" r={r} fill="none" stroke="#E2E8F0" strokeWidth="8" />
          <circle
            cx="40" cy="40" r={r} fill="none"
            stroke={color} strokeWidth="8"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-brand-dark font-black text-sm">
          {pct}%
        </span>
      </div>
      <p className="text-brand-gray text-xs text-center leading-tight">{label}</p>
    </div>
  )
}

function PieChartCard() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-brand-dark font-bold text-sm">Conformidade Fiscal</p>
          <p className="text-brand-gray-light text-xs">Indicadores gerais</p>
        </div>
        <PieChart size={18} className="text-brand-blue" aria-hidden="true" />
      </div>
      <div className="flex justify-around">
        <GaugeMock label="Obrigações em dia" pct={94} color="#1A3D8F" />
        <GaugeMock label="Documentos OK" pct={87} color="#2A52B2" />
        <GaugeMock label="Sem pendências" pct={78} color="#C9A84C" />
      </div>
    </div>
  )
}

// --- Trend Line Mockup ---
const POINTS = [20, 35, 28, 50, 42, 60, 55, 72, 68, 85]

function LineMock() {
  const w = 300
  const h = 80
  const pts = POINTS.map((p, i) => `${(i / (POINTS.length - 1)) * w},${h - (p / 100) * h}`).join(' ')

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-brand-dark font-bold text-sm">Tendência de Crescimento</p>
          <p className="text-brand-gray-light text-xs">Planejamento estratégico</p>
        </div>
        <TrendingUp size={18} className="text-emerald-500" aria-hidden="true" />
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full flex-1" preserveAspectRatio="none" style={{ minHeight: 80 }}>
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A3D8F" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1A3D8F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points={`0,${h} ${pts} ${w},${h}`}
          fill="url(#lineGrad)"
        />
        <polyline
          points={pts}
          fill="none"
          stroke="#1A3D8F"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

// --- Main Section ---
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
}

const KPIS = [
  { label: 'Economia Tributária', value: 'R$ 48k',  trend: 'up'      as const, delta: '+12% vs mês anterior' },
  { label: 'Obrigações em Dia',   value: '94%',      trend: 'up'      as const, delta: '+3% este mês' },
  { label: 'CNPJs Gerenciados',   value: '7',        trend: 'neutral' as const, delta: 'Grupo econômico ativo' },
  { label: 'Pendências Fiscais',  value: '2',        trend: 'down'    as const, delta: '-5 resolvidas' },
]

export function IntelligenceSection() {
  const { url } = useWhatsApp('Olá! Gostaria de conhecer os recursos de Business Intelligence da Ellevy.')

  return (
    <section id="central-inteligencia" className="py-16 md:py-24 bg-brand-beige">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
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
              Central de Inteligência
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            Transformamos dados em{' '}
            <span className="text-brand-blue">inteligência</span>
          </h2>
          <p className="text-brand-gray text-lg max-w-xl text-justify">
            Acompanhe a saúde da sua empresa em tempo real. Nossos painéis de BI
            traduzem números complexos em decisões assertivas e estratégias claras.
          </p>
        </motion.div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {KPIS.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <KPICard {...kpi} />
            </motion.div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 items-stretch">
          <motion.div custom={4} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <BarChartMock />
          </motion.div>
          <motion.div custom={5} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <LineMock />
          </motion.div>
        </div>

        {/* Gauge row */}
        <motion.div custom={6} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <PieChartCard />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-8 py-4 rounded-full transition-colors min-h-[52px] shadow-md"
          >
            Quero um dashboard para minha empresa
          </a>
        </motion.div>

      </div>
    </section>
  )
}
