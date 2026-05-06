import { useState } from 'react'
import {
  Menu, X, Phone, MessageCircle, MapPin, Clock, ChevronRight,
  Building2, Layers, Sheet, Scissors, Columns, RulerIcon, ClipboardList,
  ShieldCheck, Timer, Boxes, Wrench, Mail, Instagram,
  HardHat, Factory, ChevronDown, LayoutGrid
} from 'lucide-react'
import WeightCalculator from './components/WeightCalculator'
import ContactForm from './components/ContactForm'
import ProductGallery from './components/ProductGallery'
import GoogleMap from './components/GoogleMap'
import CookieConsent from './components/CookieConsent'

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#especificacoes', label: 'Especificações' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#setores', label: 'Setores' },
  { href: '#calculadora', label: 'Calculadora' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
]

const PRODUTOS = [
  {
    categoria: 'Aço para Construção Civil',
    Icone: Building2,
    itens: [
      'Vergalhões CA-50 e CA-60 — barras e rolos',
      'Telas eletrosoldadas para lajes e pisos',
      'Treliças para lajes pré-moldadas',
      'Arame recozido e pregos',
    ],
  },
  {
    categoria: 'Perfis e Estruturais',
    Icone: Layers,
    itens: [
      'Vigas I, U e W para estruturas pesadas',
      'Cantoneiras e ferros chatos',
      'Tubos redondos, quadrados e retangulares',
    ],
  },
  {
    categoria: 'Chapas e Fechamentos',
    Icone: Sheet,
    itens: [
      'Chapas galvanizadas, pretas e finas a frio/quente',
      'Telas de alambrado',
      'Chapas expandidas',
    ],
  },
]

const SERVICOS = [
  {
    titulo: 'Corte e Dobra de Aço',
    descricao: 'Execução técnica conforme projeto estrutural, eliminando perdas e otimizando o cronograma de armação.',
    Icone: Scissors,
  },
  {
    titulo: 'Armação de Colunas e Vigas',
    descricao: 'Fornecimento de peças prontas para montagem, com precisão dimensional e conformidade com normas técnicas.',
    Icone: Columns,
  },
  {
    titulo: 'Corte de Chapas sob Medida',
    descricao: 'Guilhotina e dobra para chapas de diversas espessuras — atende indústria e serralheria.',
    Icone: RulerIcon,
  },
  {
    titulo: 'Consultoria Técnica',
    descricao: 'Auxílio na quantificação de materiais para evitar compras excessivas ou faltas no canteiro.',
    Icone: ClipboardList,
  },
]

const DIFERENCIAIS = [
  { titulo: 'Experiência Técnica', desc: 'Leitura e execução de projetos de armação de aço.', Icone: ShieldCheck },
  { titulo: 'Pontualidade', desc: 'Entrega rigorosa para evitar paradas no cronograma.', Icone: Timer },
  { titulo: 'Estoque Variado', desc: 'Atendimento imediato de demandas industriais.', Icone: Boxes },
  { titulo: 'Corte e Dobra', desc: 'Material pronto para uso, reduzindo desperdício no canteiro.', Icone: Wrench },
]

const SETORES = [
  { nome: 'Construção Civil', icone: HardHat, desc: 'Vergalhões, corte e dobra e telas para obras de qualquer porte.' },
  { nome: 'Serralherias', icone: Wrench, desc: 'Perfis, tubos e chapas com corte sob medida para serralheiros.' },
  { nome: 'Indústrias Mecânicas', icone: Factory, desc: 'Aço estrutural de alta resistência para fabricação de máquinas.' },
  { nome: 'Estruturas Metálicas', icone: LayoutGrid, desc: 'Vigas W, U e I para grandes galpões e projetos estruturais.' },
]

const ESPECIFICACOES = [
  {
    id: 'vigas-w',
    titulo: 'Vigas Laminadas (W)',
    tabela: [
      { bitola: 'W 150 x 13.0', peso: '13.0 kg/m', altura: '148 mm', mesa: '100 mm' },
      { bitola: 'W 200 x 15.0', peso: '15.0 kg/m', altura: '200 mm', mesa: '100 mm' },
      { bitola: 'W 250 x 17.9', peso: '17.9 kg/m', altura: '251 mm', mesa: '101 mm' },
      { bitola: 'W 310 x 21.0', peso: '21.0 kg/m', altura: '303 mm', mesa: '101 mm' },
    ]
  },
  {
    id: 'perfis-u',
    titulo: 'Perfis U e I (Dobrados/Laminados)',
    tabela: [
      { bitola: 'U 3" (primeira)', peso: '6.10 kg/m', altura: '76.2 mm', mesa: '35.8 mm' },
      { bitola: 'U 4" (primeira)', peso: '8.04 kg/m', altura: '101.6 mm', mesa: '40.2 mm' },
      { bitola: 'I 3" (primeira)', peso: '8.48 kg/m', altura: '76.2 mm', mesa: '59.1 mm' },
      { bitola: 'I 4" (primeira)', peso: '11.46 kg/m', altura: '101.6 mm', mesa: '67.6 mm' },
    ]
  },
  {
    id: 'chapas',
    titulo: 'Chapas (Grossas e Finas)',
    tabela: [
      { bitola: '1/8" (3.17mm)', peso: '25.00 kg/m²', aplicacao: 'Estrutural / Serralheria' },
      { bitola: '3/16" (4.75mm)', peso: '37.50 kg/m²', aplicacao: 'Estrutural Pesada' },
      { bitola: '1/4" (6.35mm)', peso: '50.00 kg/m²', aplicacao: 'Indústria / Bases' },
      { bitola: '3/8" (9.50mm)', peso: '75.00 kg/m²', aplicacao: 'Indústria Pesada' },
    ]
  }
]

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [accordionAtivo, setAccordionAtivo] = useState<string | null>('vigas-w')

  const whatsappUrl = 'https://wa.me/5531993608992?text=' + encodeURIComponent('Olá! Gostaria de um orçamento.')

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-100 selection:text-orange-900">

      {/* ===== NAVBAR ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-md">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <img src="/logo.png" alt="DJR Ferro e Aço Logo" className="h-10 w-auto" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
              >
                Orçamento
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-600 p-2"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Menu"
          >
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        {menuAberto && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 shadow-xl">
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuAberto(false)}
                    className="block text-slate-600 font-medium hover:text-orange-600 transition-colors py-1"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-orange-500 text-white font-bold py-2 rounded-lg mt-2"
                >
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="pt-16 min-h-[90vh] flex items-center relative overflow-hidden"
      >
        {/* Imagem de fundo cobrindo toda a seção */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/hero-djr.jpg"
            alt="Pátio industrial de aço da DJR em Sabará"
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              // Fallback: gradiente se imagem não existir
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              if (target.parentElement) {
                target.parentElement.className = 'absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900'
              }
            }}
          />
          {/* Overlay escuro para melhor legibilidade do texto */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Conteúdo sobre a imagem */}
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 relative z-10 w-full">
          <div className="max-w-2xl">
            {/* Callout com destaque */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 text-xs md:text-sm font-black px-4 py-2 rounded-md mb-4 uppercase tracking-widest animate-pulse shadow-lg shadow-yellow-400/30 whitespace-nowrap md:whitespace-normal">
              <span className="hidden sm:inline">⚡</span>
              Cobrimos qualquer orçamento comprovado!
            </div>
            <span className="inline-block bg-orange-500/30 text-orange-300 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest backdrop-blur-sm">
              Sabará · Grande BH · Desde 2000
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
              Aço com{' '}
              <span className="text-orange-400">Qualidade</span>{' '}
              e{' '}
              <span className="text-orange-400">Agilidade</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-100 mb-8 leading-relaxed">
              Fornecedor de vergalhões CA-50/CA-60, perfis estruturais, chapas e
              serviços de corte e dobra para construtoras e indústrias na Grande BH.
              Material pronto para uso, sem desperdício no canteiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg shadow-orange-500/50"
              >
                <MessageCircle size={20} />
                Solicitar Orçamento
              </a>
              <a
                href="#calculadora"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-8 rounded-xl text-lg transition-colors backdrop-blur-sm"
              >
                Calculadora de Peso
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOBRE ===== */}
      <section id="sobre" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">Quem Somos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Trajetória consolidada no mercado de Sabará e Grande BH, focada em
              soluções práticas para a construção civil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFERENCIAIS.map(({ titulo, desc, Icone }) => (
              <div
                key={titulo}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3 group-hover:bg-orange-500 group-hover:text-white transition-colors text-orange-500">
                  <Icone size={20} />
                </div>
                <h3 className="text-slate-900 font-bold mb-1">{titulo}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUTOS ===== */}
      <section id="produtos" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">Mix de Produtos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Estoque variado para atendimento imediato de demandas industriais e da construção civil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUTOS.map(({ categoria, Icone, itens }) => (
              <div
                key={categoria}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-orange-500/40 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
                  <Icone size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{categoria}</h3>
                <ul className="space-y-2">
                  {itens.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                      <ChevronRight size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ESPECIFICAÇÕES TÉCNICAS (ACCORDION) ===== */}
      <section id="especificacoes" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Dados Técnicos</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">Especificações de Vigas e Chapas</h2>
            <p className="text-slate-600">Confira as tabelas de referência para cálculo e planejamento da sua obra.</p>
          </div>

          <div className="space-y-3">
            {ESPECIFICACOES.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-orange-500/30">
                <button
                  onClick={() => setAccordionAtivo(accordionAtivo === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-slate-800">{item.titulo}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-orange-500 transition-transform duration-300 ${accordionAtivo === item.id ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${accordionAtivo === item.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                      <thead>
                        <tr className="border-b-2 border-slate-100">
                          {Object.keys(item.tabela[0]).map((header) => (
                            <th key={header} className="px-4 py-3 font-bold text-slate-700 uppercase tracking-wider text-[10px]">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {item.tabela.map((linha, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            {Object.values(linha).map((valor, i) => (
                              <td key={i} className="px-4 py-4 text-slate-600 font-medium whitespace-nowrap">
                                {valor}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALERIA DE PRODUTOS ===== */}
      <ProductGallery />

      {/* ===== SERVIÇOS ===== */}
      <section id="servicos" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">Nossos Serviços</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Soluções completas para otimizar seu cronograma de obra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICOS.map(({ titulo, descricao, Icone }) => (
              <div
                key={titulo}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 hover:border-orange-500/40 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500">
                  <Icone size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{titulo}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{descricao}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <MessageCircle size={18} />
              Solicitar Serviço
            </a>
          </div>
        </div>
      </section>

      {/* ===== SETORES ATENDIDOS ===== */}
      <section id="setores" className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">Setores Atendidos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Parceiro estratégico para diversos segmentos, do fornecimento pontual à execução de grandes projetos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SETORES.map(({ nome, icone: Icone, desc }) => (
              <div
                key={nome}
                className="group flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-500/30 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  <Icone size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{nome}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAPA E AVALIAÇÕES ===== */}
      <GoogleMap />

      {/* ===== CALCULADORA ===== */}
      <section id="calculadora" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">Calculadora de Peso</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Estime o peso de vergalhões CA-50/CA-60 rapidamente, direto do canteiro.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <WeightCalculator />
          </div>
        </div>
      </section>

      {/* ===== CONTATO ===== */}
      <section id="contato" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">Entre em Contato</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Solicite orçamento ou tire suas dúvidas. Respondemos em até 1 hora útil.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Info de contato */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h3 className="text-orange-500 font-bold mb-1 text-sm uppercase tracking-wider">Telefone / WhatsApp</h3>
                    <a href="tel:+553133968164" className="block text-slate-900 hover:text-orange-600 transition-colors font-medium">
                      (31) 3396-8164
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block text-slate-900 hover:text-orange-600 transition-colors font-medium">
                      (31) 99360-8992
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h3 className="text-orange-500 font-bold mb-1 text-sm uppercase tracking-wider">E-mail</h3>
                    <a href="mailto:contato@djrferroeaco.com.br" className="block text-slate-900 hover:text-orange-600 transition-colors font-medium break-all">
                      contato@djrferroeaco.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h3 className="text-orange-500 font-bold mb-1 text-sm uppercase tracking-wider">Endereço</h3>
                    <p className="text-slate-900 font-medium text-sm sm:text-base">R. Floriano Peixoto Viterbo, 210</p>
                    <p className="text-slate-600">Centro, Sabará - MG, 34505-790</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h3 className="text-orange-500 font-bold mb-1 text-sm uppercase tracking-wider">Horário</h3>
                    <p className="text-slate-900 font-medium">Segunda a Sexta-feira</p>
                    <p className="text-slate-600">7h00 às 17h30</p>
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-colors w-full mt-8 lg:mt-0 shadow-lg shadow-green-600/20"
              >
                <MessageCircle size={20} />
                Chamar no WhatsApp
              </a>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <img src="/logo.png" alt="DJR Logo" className="h-10 mx-auto mb-4 opacity-80" />
          <p className="text-slate-600 text-sm">R. Floriano Peixoto Viterbo, 210 — Centro, Sabará/MG</p>
          <p className="text-slate-600 text-sm mt-1">
            CNPJ: 18.586.811/0001-81 &nbsp;|&nbsp;
            <a href="mailto:contato@djrferroeaco.com.br" className="hover:text-orange-600 transition-colors">contato@djrferroeaco.com.br</a>
            &nbsp;|&nbsp; (31) 3396-8164
          </p>
          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="text-slate-400 text-xs">© {new Date().getFullYear()} DJR Ferro e Aço. Todos os direitos reservados.</p>
            <p className="text-slate-400 text-[10px] uppercase tracking-widest">
              Desenvolvido por <a href="https://brunorosa.tech" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-orange-500 transition-colors font-bold">Bruno Rosa</a>
            </p>
          </div>
        </div>
      </footer>

      {/* ===== BOTÕES FLUTUANTES ===== */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
        <a
          href="https://www.instagram.com/djrferroeaco/"
          target="_blank"
          rel="noopener noreferrer"
          title="Siga-nos no Instagram"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white shadow-lg transition-all hover:scale-110 hover:shadow-purple-500/20"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp DJR Ferro e Aço"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/30 transition-all hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
      <CookieConsent />
    </div>
  )
}
