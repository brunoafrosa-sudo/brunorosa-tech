import { MessageCircle } from 'lucide-react'

interface Produto {
  id: string
  nome: string
  descricao: string
  imagem: string
  altText: string
}

const PRODUTOS_GALERIA: Produto[] = [
  {
    id: 'vergalhoes',
    nome: 'Vergalhões CA-50/CA-60',
    descricao: 'Barras e rolos de aço para armação de estruturas. Conformes com ABNT NBR 7480.',
    imagem: '/assets/produto-vergalhoes.jpg',
    altText: 'Vergalhões CA-50 e CA-60 em diversos diâmetros',
  },
  {
    id: 'vigas',
    nome: 'Vigas e Perfis Estruturais',
    descricao: 'Vigas I, U, W e cantoneiras para estruturas metálicas pesadas. Precisão dimensional garantida.',
    imagem: '/assets/produto-vigas.jpg',
    altText: 'Vigas e perfis estruturais de aço inoxidável',
  },
  {
    id: 'telas',
    nome: 'Telas Eletrosoldadas',
    descricao: 'Telas para lajes, pisos e cercas. Treliças pré-moldadas conforme projeto estrutural.',
    imagem: '/assets/produto-telas.jpg',
    altText: 'Telas eletrosoldadas para lajes e pisos',
  },
  {
    id: 'chapas',
    nome: 'Chapas e Fechamentos',
    descricao: 'Chapas galvanizadas, pretas e expandidas. Atende serralheria e fechamentos industriais.',
    imagem: '/assets/produto-chapas.jpg',
    altText: 'Chapas de aço galvanizadas e expandidas',
  },
  {
    id: 'tubos',
    nome: 'Tubos Industriais',
    descricao: 'Tubos redondos, quadrados e retangulares. Diversas espessuras e dimensões.',
    imagem: '/assets/produto-tubos.jpg',
    altText: 'Tubos de aço redondos e quadrados',
  },
  {
    id: 'arame',
    nome: 'Arame e Acessórios',
    descricao: 'Arame recozido, pregos e acessórios. Soluções complementares para obra.',
    imagem: '/assets/produto-arame.jpg',
    altText: 'Arame recozido e pregos de aço',
  },
]

export default function ProductGallery() {
  const whatsappUrl = 'https://wa.me/5531993608992?text=' + encodeURIComponent('Olá! Gostaria de um orçamento para os produtos.')

  return (
    <section id="galeria-produtos" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">Nosso Portfólio</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Variedade completa de produtos em aço para construção civil e indústria.
            Qualidade garantida e entrega ágil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUTOS_GALERIA.map((produto) => (
            <div
              key={produto.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange-500/40 transition-all"
            >
              {/* Imagem */}
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <img
                  src={produto.imagem}
                  alt={produto.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback: mostrar placeholder caso a imagem não exista
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    target.parentElement!.classList.add('bg-slate-300', 'flex', 'items-center', 'justify-center')
                    const placeholder = document.createElement('span')
                    placeholder.className = 'text-slate-600 font-medium text-center px-4'
                    placeholder.textContent = produto.nome
                    target.parentElement!.appendChild(placeholder)
                  }}
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col h-48">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{produto.nome}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{produto.descricao}</p>

                {/* Botão */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  <MessageCircle size={16} />
                  Solicitar Cotação
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
