import { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  Briefcase,
  FileText,
  Leaf,
  Users,
  Home,
  TrendingUp,
  Globe,
  UserX,
  BookOpen,
  Lightbulb,
  Building2,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronRight,
  Quote,
} from 'lucide-react';

// --- Dados do Protótipo ---
const SERVICES = [
  { title: 'Administrativo', icon: FileText, desc: 'Assessoria em licitações, contratos com o poder público, impugnações e recursos administrativos perante órgãos governamentais.' },
  { title: 'Ambiental', icon: Leaf, desc: 'Consultoria em licenciamentos ambientais, defesa em infrações, regularização fundiária e compliance ambiental para empresas.' },
  { title: 'Civil', desc: 'Atuação em contratos, responsabilidade civil, cobranças, direito de família, herança, partilha de bens e disputas imobiliárias.', icon: Users },
  { title: 'Comercial', icon: Home, desc: 'Estruturação e revisão de contratos empresariais, defesa em litígios comerciais, relações entre sócios e recuperação de crédito.' },
  { title: 'Fiscal e Tributário', icon: TrendingUp, desc: 'Planejamento tributário, defesa em autuações fiscais, recuperação de tributos pagos indevidamente e consultoria para redução da carga fiscal.' },
  { title: 'Internacional', icon: Globe, desc: 'Consultoria em negócios transfronteiriços, contratos internacionais, arbitragem, importação/exportação e investimento estrangeiro.' },
  { title: 'Penal e Econômico', icon: UserX, desc: 'Defesa em crimes contra a ordem econômica, lavagem de dinheiro, crimes tributários, corrupção e demais infrações penais empresariais.' },
  { title: 'Previdenciário', icon: BookOpen, desc: 'Aposentadorias, pensões, revisões de benefícios, planejamento previdenciário e defesa em processos junto ao INSS e à Justiça Federal.' },
  { title: 'Propriedade Intelectual', icon: Lightbulb, desc: 'Registro e proteção de marcas, patentes, direitos autorais, combate à pirataria e disputas envolvendo ativos intangíveis.' },
  { title: 'Societário', icon: Building2, desc: 'Constituição e reestruturação de empresas, fusões, aquisições, contratos sociais, governança corporativa e dissolução societária.' },
  { title: 'Trabalhista', icon: Briefcase, desc: 'Defesa de empresas e trabalhadores em reclamações trabalhistas, consultoria preventiva, compliance e gestão de passivos trabalhistas.' },
];

const TESTIMONIALS = [
  {
    name: 'Roberto Silva',
    text: 'O Dr. Elias Neto demonstrou um profissionalismo exemplar e uma ética inquestionável na condução do meu processo.',
    role: 'Empresário'
  },
  {
    name: 'Ana Maria Oliveira',
    text: 'Atendimento humano e ágil. Senti total segurança desde a primeira consulta até a resolução do caso.',
    role: 'Cliente'
  }
];

const WHATSAPP_NUMBER = '5531999999999'; // Mock
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta jurídica.')}`;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen selection-crimson font-sans">
        <Helmet>
          <title>Elias Neto Advogados Associados | Especialistas Jurídicos</title>
          <meta name="description" content="Excelência e suporte integral em todas as esferas do Direito, do consultivo ao contencioso. Defesa estratégica e soluções jurídicas multidisciplinares." />
          <meta property="og:title" content="Elias Neto Advogados Associados | Especialistas Jurídicos" />
          <meta property="og:description" content="Defesa Estratégica e Soluções Jurídicas Multidisciplinares. Excelência e suporte integral em todas as esferas do Direito." />
          <meta property="og:url" content="https://eliasneto.brunorosa.tech" />
          <meta property="og:site_name" content="Elias Neto Advogados Associados" />
          <meta property="og:image" content="https://eliasneto.com.br/images/temp/pag1.jpg" />
          <meta property="og:type" content="website" />
          <meta name="theme-color" content="#0F172A" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
        </Helmet>

        {/* --- NAVBAR --- */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy shadow-xl py-3' : 'bg-transparent py-6'
            }`}
        >
          <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
            <a href="#inicio" aria-label="Elias Neto Advogados Associados">
              <img
                src="/logo.png"
                alt="Elias Neto Advogados Associados"
                className="h-20 w-auto max-w-[280px] mix-blend-screen"
              />
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6 text-ice font-medium text-sm">
              <li><a href="#inicio" className="hover:text-crimson transition-colors">Home</a></li>
              <li><a href="#sobre" className="hover:text-crimson transition-colors">Escritório</a></li>
              <li><a href="#atuacao" className="hover:text-crimson transition-colors">Área de Atuação</a></li>
              <li><a href="#fundador" className="hover:text-crimson transition-colors">Fundador e Sócio</a></li>
              <li><a href="#noticias" className="hover:text-crimson transition-colors">Notícias</a></li>
              <li><a href="#parceiro" className="hover:text-crimson transition-colors">Seja nosso parceiro</a></li>
              <li>
                <a
                  href="#contato"
                  className="bg-crimson hover:bg-crimson-hover text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-ice p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-navy/95 backdrop-blur-md absolute top-full left-0 right-0 border-t border-white/10 p-6 flex flex-col gap-4 text-ice text-lg">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Escritório</a>
              <a href="#atuacao" onClick={() => setIsMenuOpen(false)}>Área de Atuação</a>
              <a href="#fundador" onClick={() => setIsMenuOpen(false)}>Fundador e Sócio</a>
              <a href="#noticias" onClick={() => setIsMenuOpen(false)}>Notícias</a>
              <a href="#parceiro" onClick={() => setIsMenuOpen(false)}>Seja nosso parceiro</a>
              <a
                href="#contato"
                className="bg-crimson text-center py-4 rounded-xl font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </div>
          )}
        </header>

        <main>
          {/* --- HERO SECTION --- */}
          <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1920"
                alt="Escritório de Associados"
                className="w-full h-full object-cover grayscale brightness-[0.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-7xl text-ice font-serif font-extrabold leading-[1.1] mb-6">
                  Defesa Estratégica e<br />
                  <span className="text-crimson">Soluções Jurídicas</span><br />
                  Multidisciplinares.
                </h1>
                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
                  Excelência e suporte integral em todas as esferas do Direito, do consultivo ao contencioso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-crimson hover:bg-crimson-hover text-white font-bold py-5 px-10 rounded-2xl text-lg transition-all shadow-2xl shadow-crimson/30 hover:-translate-y-1"
                  >
                    <MessageCircle size={24} />
                    Falar com Especialista
                  </a>
                  <a
                    href="#atuacao"
                    className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-ice border border-white/20 font-bold py-5 px-10 rounded-2xl text-lg transition-all backdrop-blur-sm"
                  >
                    Nossas Áreas
                  </a>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
              <div className="w-1 h-12 rounded-full bg-gradient-to-b from-crimson to-transparent" />
            </div>
          </section>

          {/* --- SERVICES GRID --- */}
          <section id="atuacao" className="py-24 md:py-32" style={{ backgroundColor: '#1E293B' }}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl text-ice font-serif font-bold pb-6" style={{ borderBottom: '3px solid #8B0000' }}>
                  Áreas de Atuação
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/10">
                {SERVICES.map((s, i) => {
                  const isActive = activeService === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveService(isActive ? null : i)}
                      className={`flex flex-col items-center justify-center gap-4 p-6 md:p-8 transition-all duration-300 group cursor-pointer text-left ${isActive
                          ? 'bg-crimson text-white'
                          : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`}
                      style={{ backgroundColor: isActive ? '#8B0000' : '#1E293B' }}
                    >
                      <s.icon size={32} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                      <span className="text-xs md:text-sm font-bold text-center leading-tight uppercase tracking-wide">
                        {s.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Painel de descrição */}
              <div
                className={`overflow-hidden transition-all duration-500 ${activeService !== null ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {activeService !== null && (
                  <div className="bg-white/5 border border-white/10 rounded-b-xl p-8 flex gap-6 items-start">
                    <div className="shrink-0 p-4 bg-crimson rounded-xl">
                      {(() => { const Icon = SERVICES[activeService].icon; return <Icon size={32} className="text-white" />; })()}
                    </div>
                    <div>
                      <h3 className="text-ice font-serif font-bold text-xl mb-3">
                        {SERVICES[activeService].title}
                      </h3>
                      <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                        {SERVICES[activeService].desc}
                      </p>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-5 bg-crimson hover:bg-crimson-hover text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors"
                      >
                        <MessageCircle size={16} />
                        Consultar especialista
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* --- ESCRITÓRIO --- */}
          <section id="sobre" className="bg-white">
            {/* Header vermelho */}
            <div className="bg-crimson px-8 py-6">
              <h2 className="text-2xl md:text-3xl text-white font-serif font-bold">O Escritório</h2>
            </div>

            <div className="max-w-5xl mx-auto px-8 py-16">
              <h3 className="text-2xl md:text-3xl text-crimson font-serif font-bold mb-10">
                Conheça um pouco mais da nossa história
              </h3>

              <div className="space-y-6 text-slate-700 text-base leading-relaxed text-justify">
                <p>
                  O gestor Dr. Elias Nejm Neto, advogado renomado, com atuação de destaque no judiciário mineiro, é consultor dos maiores grupos empresariais atacadistas do Estado de Minas Gerais, com profundo conhecimento no campo da orientação jurídica preventiva e estratégia negocial.
                </p>
                <p>
                  O escritório Elias Neto Advogados Associados possui correspondentes nas principais capitais do País, destacando-se São Paulo/SP, Rio de Janeiro/RJ, Vitória/ES, Salvador/BA e Porto Alegre/RS, desenvolvendo um sistema de parceria com escritórios de reconhecida idoneidade, sempre mediante orientação e acompanhamento diretos.
                </p>
                <p>
                  Os serviços prestados pelo escritório são sempre voltados para a obtenção de soluções objetivas para seus clientes, com atendimento personalizado, dedicado e profissional, <strong>em estreita cooperação ética e técnica entre clientes e advogados</strong>, tradição passada de pai para filho, hoje seguida pelo Dr. Estevão Siqueira Nejm.
                </p>
              </div>

              {/* CTA "Trabalhe Conosco" */}
              <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 border border-slate-200 rounded-xl px-8 py-6">
                <div>
                  <p className="text-navy font-bold text-lg">Gostou do escritório?</p>
                  <p className="text-slate-500 text-sm">venha trabalhar conosco</p>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-crimson hover:bg-crimson-hover text-white font-bold px-10 py-4 rounded-lg transition-all whitespace-nowrap"
                >
                  Trabalhe Conosco
                </a>
              </div>
            </div>
          </section>

          {/* --- FUNDADOR E SÓCIO --- */}
          <section id="fundador" className="bg-white">
            <div className="bg-crimson px-8 py-6">
              <h2 className="text-2xl md:text-3xl text-white font-serif font-bold">Fundador e Sócio</h2>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-14">
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">

                {/* Foto + badge */}
                <div className="flex flex-col rounded-xl overflow-hidden border border-slate-200">
                  <div className="h-80 overflow-hidden">
                    <img
                      src="https://eliasneto.com.br/images/team/pers_1.jpg"
                      alt="Dr. Elias Neto"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="bg-[#c8a96e] px-5 py-4">
                    <p className="text-navy font-bold text-base">Dr. Elias Neto</p>
                    <p className="text-navy/70 text-sm">Advogado — Fundador</p>
                    <p className="text-navy/70 text-sm">OAB|MG</p>
                    <a href="mailto:contato@eliasneto.com.br" className="text-navy text-xs mt-2 block italic hover:underline">
                      contato@eliasneto.com.br
                    </a>
                  </div>
                </div>

                {/* Texto biográfico */}
                <div className="space-y-5 text-slate-600 text-base leading-relaxed text-justify">
                  <p>
                    Elias Nejm Neto iniciou suas atividades profissionais, como advogado, no ano de 1990. Anteriormente, graduou-se em engenharia civil no ano de 1978, trabalhando por 05 anos no Estado de São Paulo.
                  </p>
                  <p>
                    Retornou para Minas Gerais em 1983, onde passou a atuar como empresário na indústria de alimentos. A opção por advogar se deu em função de um grande fascínio pela dinâmica da profissão e pelo importante papel prestado na defesa da ordem social no Estado Democrático de Direito, através da tutela de interesses coletivos e individuais.
                  </p>
                  <p>
                    Ao longo de duas décadas no exercício da advocacia, Dr. Elias Neto expandiu sua área de atuação, de acordo com a demanda e exigência de mercado, estando hoje adaptado ao universo jurídico globalizado.
                  </p>
                  <p>
                    Em reconhecimento à excelência dos serviços prestado à sociedade, no ano de 2002, a OAB/MG concedeu premiação ao Dr. Elias Neto, parabenizando o advogado pela expressiva marca de processos em tramitação perante o Tribunal de Justiça de Minas Gerais.
                  </p>
                  <p>
                    A consultoria jurídica especializada, direcionada para o segmento empresarial, tornou imperiosa a estruturação da prestação do serviço, que culminou na fundação do escritório Elias Neto Advogados Associados, no ano de 2008.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- SÓCIOS --- */}
          <section id="socios" className="bg-white">
            <div className="bg-crimson px-8 py-6">
              <h2 className="text-2xl md:text-3xl text-white font-serif font-bold">Conheça melhor nossos Sócios</h2>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-14 space-y-10">
              {[
                {
                  nome: 'Dr. Estevão',
                  cargo: 'Advogado',
                  oab: 'OAB|MG 107.000',
                  email: 'estevao@eliasneto.com.br',
                  foto: 'https://eliasneto.com.br/images/team/pers_4.jpg',
                  formacao: [
                    'Graduação em Direito pela Faculdade de Direito Milton Campos',
                    'Pós-Graduação IEC em Direito empresarial pela Pontifica Universidade Católica de Minas Gerais',
                    'Pós-Graduação em Direito do Trabalho pela Faculdade Pitágoras',
                  ],
                  experiencia: [
                    'Atuação nas áreas: Tributário, Civil, Comercial e Trabalhista',
                    'Consultoria jurídica empresarial',
                    'Advogado desde 01/2007 do escritório de advocacia Elias Neto Advogados Associados',
                  ],
                  academico: [
                    'Monografia (Pós-Graduação em Direito Empresarial PUC): Contratos de depósito bancário',
                    'Monografia (Graduação): Crédito Trabalhista na nova lei de falências',
                  ],
                },
                {
                  nome: 'Dr. Adriano',
                  cargo: 'Advogado',
                  oab: 'OAB|MG 69.710',
                  email: 'adriano@eliasneto.com.br',
                  foto: 'https://eliasneto.com.br/images/team/pers_2.jpg',
                  formacao: [
                    'Graduação em Direito',
                    'Mestrado em Direito e Economia',
                    'Pós-Graduação em Direito do Trabalho e Direito Processual do Trabalho',
                  ],
                  experiencia: [
                    'Advogado especializado em Direito do Trabalho e Direito Civil',
                  ],
                  academico: [
                    'Professor de Direito do Trabalho e Processo do Trabalho, atualmente das Faculdades Pitágoras',
                    'Palestrante em assuntos jurídicos',
                  ],
                },
                {
                  nome: 'Dr. Alessandro',
                  cargo: 'Advogado',
                  oab: 'OAB|MG 89.378',
                  email: 'alessandro@eliasneto.com.br',
                  foto: 'https://eliasneto.com.br/images/team/pers_3.jpg',
                  formacao: [
                    'Graduação em Direito',
                    'Pós-Graduação em Direito de Empresa',
                  ],
                  experiencia: [
                    'Atuação nas áreas: Civil, Empresarial e Trabalhista',
                    'Consultoria jurídica empresarial',
                    'Advogado desde 01/2002',
                    'Advogado Sócio do Escritório Elias Neto Advogados Associados',
                  ],
                  academico: [
                    'Professor Acadêmico',
                    'Palestrante em assuntos jurídicos',
                  ],
                },
              ].map((socio, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-0 border border-slate-200 rounded-xl overflow-hidden">
                  {/* Card da foto */}
                  <div className="flex flex-col">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={socio.foto}
                        alt={socio.nome}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="bg-[#c8a96e] px-5 py-4">
                      <p className="text-navy font-bold text-base">{socio.nome}</p>
                      <p className="text-navy/70 text-sm">{socio.cargo}</p>
                      <p className="text-navy/70 text-sm">{socio.oab}</p>
                      <a href={`mailto:${socio.email}`} className="text-navy text-xs mt-2 block italic hover:underline">
                        {socio.email}
                      </a>
                    </div>
                  </div>

                  {/* Colunas de informação */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                    {[
                      { titulo: 'Formação', itens: socio.formacao },
                      { titulo: 'Experiência Profissional', itens: socio.experiencia },
                      { titulo: 'Dados Acadêmicos', itens: socio.academico },
                    ].map((col, j) => (
                      <div key={j} className="p-6">
                        <h4 className="font-bold text-navy text-sm mb-4">{col.titulo}</h4>
                        <ul className="space-y-2">
                          {col.itens.map((item, k) => (
                            <li key={k} className="text-slate-600 text-sm leading-snug flex gap-2">
                              <span className="text-crimson mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- SEJA NOSSO PARCEIRO --- */}
          <section id="parceiro" className="bg-white">
            {/* Header com imagem de fundo */}
            <div
              className="px-8 py-8 relative overflow-hidden"
              style={{ backgroundColor: '#8B0000' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200')" }}
              />
              <h2 className="text-2xl md:text-3xl text-white font-serif font-bold relative z-10">Seja nosso parceiro</h2>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-12">
              <p className="text-slate-600 text-sm mb-8">
                Preencha nosso mini-formulário e envie a sua proposta, iremos analisar e logo{' '}
                <span className="text-crimson">entraremos em contato</span>.
              </p>

              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full border border-slate-200 rounded px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-crimson"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-slate-200 rounded px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-crimson"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="w-full border border-slate-200 rounded px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-crimson"
                  />
                  <label className="w-full border border-slate-200 rounded px-4 py-3 text-sm text-slate-400 flex items-center gap-2 cursor-pointer hover:border-crimson transition-colors">
                    <span className="bg-slate-100 border border-slate-300 text-slate-600 text-xs px-3 py-1 rounded">Escolher arquivo</span>
                    <span className="truncate">Nenhum arquivo selecionado</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
                <textarea
                  placeholder="Mensagem"
                  rows={5}
                  className="w-full border border-slate-200 rounded px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-crimson resize-none"
                />
                <div>
                  <button
                    type="submit"
                    className="bg-navy hover:bg-crimson text-white font-bold px-8 py-3 rounded transition-colors"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* --- NOTÍCIAS --- */}
          <section id="noticias" className="py-24 bg-ice">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="text-center mb-16">
                <span className="text-crimson font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Informação Jurídica</span>
                <h2 className="text-4xl md:text-6xl text-navy font-serif font-bold mb-6">Notícias</h2>
                <div className="w-20 h-1.5 bg-crimson mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    tag: 'Direito Civil',
                    title: 'Mudanças no Código Civil e seus impactos nos contratos',
                    date: 'Maio 2025',
                    img: 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&q=80&w=600'
                  },
                  {
                    tag: 'Trabalhista',
                    title: 'Reforma trabalhista: o que muda para empresas em 2025',
                    date: 'Abril 2025',
                    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600'
                  },
                  {
                    tag: 'Família',
                    title: 'Guarda compartilhada: direitos e deveres dos pais',
                    date: 'Março 2025',
                    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600'
                  }
                ].map((n, i) => (
                  <article key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <div className="h-48 overflow-hidden">
                      <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-8">
                      <span className="text-crimson text-xs font-bold uppercase tracking-widest">{n.tag}</span>
                      <h3 className="text-navy font-serif font-bold text-xl mt-2 mb-4 leading-snug">{n.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">{n.date}</span>
                        <a href={WHATSAPP_LINK} className="flex items-center gap-1 text-crimson font-bold text-sm hover:gap-3 transition-all">
                          Ler mais <ChevronRight size={16} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* --- TESTIMONIALS --- */}
          <section id="depoimentos" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <span className="text-crimson font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Feedback</span>
                  <h2 className="text-4xl md:text-5xl text-navy font-serif font-bold">O que dizem <br />nossos clientes</h2>
                </div>
                <p className="text-slate-500 max-w-sm">
                  A confiança é o pilar de nossa relação com cada pessoa e empresa que representamos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="relative bg-ice p-10 md:p-14 rounded-[3rem]">
                    <Quote className="absolute top-10 right-10 text-crimson/10 w-20 h-20" />
                    <p className="text-xl md:text-2xl text-navy font-medium italic leading-relaxed mb-10 relative z-10">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-1.5 bg-crimson rounded-full" />
                      <div>
                        <h4 className="font-bold text-navy text-lg">{t.name}</h4>
                        <span className="text-slate-500 text-sm uppercase tracking-widest">{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- FALE CONOSCO --- */}
          <section id="contato" className="bg-white">
            <div className="bg-crimson px-8 py-6">
              <h2 className="text-2xl md:text-3xl text-white font-serif font-bold">Fale Conosco</h2>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-14">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Contatos */}
                <div>
                  <h3 className="text-navy font-bold text-lg mb-6">Contatos:</h3>
                  <div className="space-y-5 text-slate-600 text-sm">
                    <div>
                      <p className="text-navy font-bold">Endereço:</p>
                      <p>Av. Augusto de Lima, 1.376 - 18º andar - Barro Preto<br />Belo Horizonte / MG</p>
                    </div>
                    <div>
                      <p className="text-navy font-bold">Telefone:</p>
                      <a href="tel:3133201544" className="text-crimson hover:underline">31 3201.5444</a>
                    </div>
                    <div>
                      <p className="text-navy font-bold">Fax:</p>
                      <span>31 3212.2832</span>
                    </div>
                    <div>
                      <p className="text-navy font-bold">Email:</p>
                      <a href="mailto:contato@eliasneto.com.br" className="text-crimson hover:underline">contato@eliasneto.com.br</a>
                    </div>
                  </div>
                </div>

                {/* Formulário */}
                <div>
                  <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Nome"
                      className="w-full border border-slate-200 rounded px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-crimson"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border border-slate-200 rounded px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-crimson"
                    />
                    <input
                      type="tel"
                      placeholder="Telefone"
                      className="w-full border border-slate-200 rounded px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-crimson"
                    />
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-navy hover:bg-crimson text-white font-bold px-8 py-3 rounded transition-colors"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>

                {/* Textarea */}
                <div className="flex flex-col">
                  <textarea
                    placeholder="Mensagem"
                    rows={7}
                    className="w-full border border-slate-200 rounded px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-crimson resize-none flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Mapa Google Maps */}
            <div className="w-full h-80">
              <iframe
                title="Localização Elias Neto Advogados"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9!2d-43.9364!3d-19.9281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699a61b3b5c61%3A0x4f1a4e8e4a5d2b7e!2sAv.%20Augusto%20de%20Lima%2C%201376%20-%20Barro%20Preto%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1715000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </main>

        {/* --- FOOTER --- */}
        <footer className="bg-navy pt-24 pb-12 text-slate-500 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="md:col-span-2">
                <div className="mb-8">
                  <img
                    src="/logo.png"
                    alt="Elias Neto Advogados Associados"
                    className="h-24 w-auto max-w-[300px] mix-blend-screen"
                  />
                </div>
                <p className="max-w-sm mb-8">
                  Escritório jurídico focado em soluções ágeis e atendimento personalizado para pessoas físicas e jurídicas.
                </p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/eliasneto.adv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-crimson transition-colors text-ice">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-ice font-bold mb-8 uppercase tracking-widest text-sm">Contatos</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="text-crimson shrink-0 mt-0.5" />
                    <span>31 3201.5444</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-crimson shrink-0 mt-0.5" />
                    <span>Av. Augusto de Lima, 1.376 - 18º andar<br />Barro Preto, Belo Horizonte / MG</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-crimson shrink-0 mt-0.5" />
                    <span>Seg - Sex: 09:00 - 18:00</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle size={18} className="text-crimson shrink-0 mt-0.5" />
                    <a href="mailto:contato@eliasneto.com.br" className="hover:text-ice transition-colors">contato@eliasneto.com.br</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-ice font-bold mb-8 uppercase tracking-widest text-sm">Links Úteis</h4>
                <ul className="space-y-4">
                  <li><a href="#inicio" className="hover:text-ice transition-colors">Home</a></li>
                  <li><a href="#sobre" className="hover:text-ice transition-colors">Escritório</a></li>
                  <li><a href="#atuacao" className="hover:text-ice transition-colors">Área de Atuação</a></li>
                  <li><a href="#fundador" className="hover:text-ice transition-colors">Fundador e Sócio</a></li>
                  <li><a href="#noticias" className="hover:text-ice transition-colors">Notícias</a></li>
                  <li><a href={WHATSAPP_LINK} className="hover:text-ice transition-colors">Fale Conosco</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 text-center text-xs uppercase tracking-widest">
              <p>© {new Date().getFullYear()} Elias Neto Associados. Todos os direitos reservados.</p>
              <p className="mt-2 text-slate-700">Desenvolvido com excelência técnica.</p>
            </div>
          </div>
        </footer>

        {/* --- FLOATING BUTTONS --- */}
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 items-end">
          {/* Instagram */}
          <a
            href="https://instagram.com/eliasneto.adv"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-navy text-ice text-sm font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
              Siga no Instagram
            </span>
          </a>
          {/* WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
            aria-label="WhatsApp"
          >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-navy text-ice text-sm font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
              Dúvidas? Fale conosco
            </span>
          </a>
        </div>
      </div>
    </HelmetProvider>
  );
}
