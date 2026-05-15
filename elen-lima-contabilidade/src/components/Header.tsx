'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

const sections = [
  { hash: 'servicos', label: 'Serviços' },
  { hash: 'depoimentos', label: 'Depoimentos' },
  { hash: 'calculadora', label: 'CLT vs PJ' },
  { hash: 'checklist', label: 'Checklist Grátis' },
  { hash: 'guias', label: 'Guias' },
  { hash: 'contato', label: 'Contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  // Na home: ancora direta. Nas demais páginas: volta à home na seção correta.
  function href(hash: string) {
    return isHome ? `#${hash}` : `/#${hash}`
  }

  return (
    <header className="sticky top-0 z-40 shadow-md" style={{ backgroundColor: 'var(--color-accent)' }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" aria-label="Elen Lima Contabilidade — Página inicial">
          <span className="text-xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Elen Lima{' '}
            <span style={{ color: 'var(--color-primary-light)' }}>Contabilidade</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Menu principal" className="hidden md:block">
          <ul className="flex items-center gap-6" role="list">
            {sections.map((s) => (
              <li key={s.hash}>
                <a
                  href={href(s.hash)}
                  className="text-sm font-medium text-white transition-colors duration-150 hover:text-primary-light"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={href('contato')} className="btn-primary text-sm">
                Falar com especialista
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col items-center justify-center gap-1.5 rounded-md p-2 text-white md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menu mobile"
          className="border-t border-white/10 md:hidden"
          style={{ backgroundColor: 'var(--color-accent)' }}
        >
          <ul className="flex flex-col px-4 py-4" role="list">
            {sections.map((s) => (
              <li key={s.hash}>
                <a
                  href={href(s.hash)}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-white transition-colors hover:text-primary-light"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={href('contato')}
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Falar com especialista
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
