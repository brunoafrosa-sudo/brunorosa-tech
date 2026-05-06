import { Star, MapPin } from 'lucide-react'

interface Review {
  autor: string
  rating: number
  texto: string
  data: string
}

const REVIEWS: Review[] = [
  {
    autor: 'Cliente A',
    rating: 5,
    texto: 'Excelente atendimento e qualidade de produtos. Recomendo!',
    data: 'há 2 meses',
  },
  {
    autor: 'Cliente B',
    rating: 5,
    texto: 'Entrega rápida e material de primeira qualidade.',
    data: 'há 1 mês',
  },
  {
    autor: 'Cliente C',
    rating: 5,
    texto: 'Profissionais competentes. Sempre cumprem prazos.',
    data: 'há 3 semanas',
  },
]

export default function GoogleMap() {
  const googleMapsUrl = 'https://share.google/JT36qKy1CMl2gNUgY'
  const googleReviewsUrl = 'https://share.google/JT36qKy1CMl2gNUgY'

  return (
    <section id="localizacao" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={28} className="text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Onde Estamos</h2>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Localizado em Sabará, Grande BH. Visite-nos e conheça nosso estoque!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mapa à esquerda */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              {/* Iframe do Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.0594823434847!2d-44.18743!3d-19.95873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2d2d2d2d2d2d%3A0x0!2sDJR%20Ferro%20e%20A%C3%A7o!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Botão para abrir no Google Maps */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <MapPin size={18} />
              Abrir no Google Maps
            </a>
          </div>

          {/* Avaliações à direita */}
          <div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 h-full flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">5.0</span>
                </div>
                <p className="text-xs text-slate-600">Baseado em avaliações do Google</p>
              </div>

              <div className="flex-1 space-y-4 mb-6">
                {REVIEWS.map((review, idx) => (
                  <div key={idx} className="border-t border-slate-200 pt-4 first:border-t-0 first:pt-0">
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-bold text-slate-900 text-sm">{review.autor}</span>
                      <span className="text-xs text-slate-500">{review.data}</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {review.texto}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 font-bold py-2 px-4 rounded-lg transition-colors text-sm text-center"
              >
                Ver todas as avaliações
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
