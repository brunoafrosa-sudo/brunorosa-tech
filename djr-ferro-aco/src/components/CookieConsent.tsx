import { useState, useEffect } from 'react'
import { ShieldCheck } from 'lucide-react'

export default function CookieConsent() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    // Verifica se o consentimento já foi dado
    const consentimento = localStorage.getItem('djr-cookie-consent')
    if (!consentimento) {
      // Pequeno delay para o banner aparecer suavemente após o carregamento
      const timer = setTimeout(() => setVisivel(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const aceitarCookies = () => {
    localStorage.setItem('djr-cookie-consent', 'true')
    setVisivel(false)
  }

  if (!visivel) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500 hidden sm:flex">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Utilizamos cookies para melhorar sua experiência e analisar o tráfego em nosso site. 
                Ao continuar navegando, você concorda com nossa{' '}
                <a 
                  href="#politica-privacidade" 
                  className="text-orange-600 font-semibold hover:underline"
                >
                  Política de Privacidade
                </a>.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={aceitarCookies}
              className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-orange-500/20 whitespace-nowrap"
            >
              Aceitar Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
