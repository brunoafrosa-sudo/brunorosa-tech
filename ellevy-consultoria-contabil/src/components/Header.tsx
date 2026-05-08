import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useWhatsApp } from '../hooks/useWhatsApp'

const NAV_LINKS = [
  { href: '#servicos',      label: 'Serviços' },
  { href: '#diferenciais',  label: 'Diferenciais' },
  { href: '#inteligencia',  label: 'Inteligência' },
  { href: '#calculadora',   label: 'Simulador' },
  { href: '#faq',           label: 'FAQ' },
  { href: '#time',          label: 'Time' },
  { href: '#contato',       label: 'Contato' },
]

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const { url } = useWhatsApp()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" aria-label="Ellevy — Página Inicial">
          <img
            src="/logo.png"
            alt="Ellevy Inteligência Empresarial"
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-bold px-5 py-2 rounded-full transition-colors min-h-[44px] flex items-center"
            >
              WhatsApp
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brand-gray p-2"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuAberto && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 shadow-xl">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuAberto(false)}
                  className="block text-brand-gray font-medium hover:text-brand-blue transition-colors py-1"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 rounded-full mt-2 transition-colors"
              >
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
