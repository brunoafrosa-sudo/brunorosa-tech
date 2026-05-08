import { MessageCircle } from 'lucide-react'
import { useWhatsApp } from '../hooks/useWhatsApp'

export function WhatsAppFloat() {
  const { url } = useWhatsApp('Olá! Gostaria de falar com a Ellevy Consultoria.')

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <a
        href="https://www.instagram.com/ellevy_consultoria/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Seguir a Ellevy no Instagram"
        className="w-14 h-14 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </a>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Ellevy pelo WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
      >
        <MessageCircle size={28} aria-hidden="true" />
      </a>
    </div>
  )
}
