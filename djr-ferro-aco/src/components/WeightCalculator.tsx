import { useState } from 'react'
import { Scale, Calculator, RotateCcw } from 'lucide-react'

// Pesos lineares por bitola (kg/m) — Tabela ABNT NBR 7480
const BITOLAS: Record<string, { label: string; kg_m: number }> = {
  '6.3':  { label: 'Ø 6,3 mm',  kg_m: 0.245 },
  '8':    { label: 'Ø 8,0 mm',  kg_m: 0.395 },
  '10':   { label: 'Ø 10,0 mm', kg_m: 0.617 },
  '12.5': { label: 'Ø 12,5 mm', kg_m: 0.963 },
  '16':   { label: 'Ø 16,0 mm', kg_m: 1.578 },
  '20':   { label: 'Ø 20,0 mm', kg_m: 2.466 },
  '25':   { label: 'Ø 25,0 mm', kg_m: 3.853 },
  '32':   { label: 'Ø 32,0 mm', kg_m: 6.313 },
}

export default function WeightCalculator() {
  const [bitola, setBitola] = useState('10')
  const [comprimento, setComprimento] = useState('')
  const [quantidade, setQuantidade] = useState('1')
  const [resultado, setResultado] = useState<number | null>(null)

  function calcular() {
    const comp = parseFloat(comprimento)
    const qtd = parseInt(quantidade, 10)
    if (!comp || comp <= 0 || !qtd || qtd <= 0) return
    const peso = BITOLAS[bitola].kg_m * comp * qtd
    setResultado(peso)
  }

  function resetar() {
    setComprimento('')
    setQuantidade('1')
    setResultado(null)
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
          <Scale size={20} />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Calculadora de Peso de Vergalhão</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {/* Bitola */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Bitola (CA-50 / CA-60)
          </label>
          <select
            value={bitola}
            onChange={(e) => { setBitola(e.target.value); setResultado(null) }}
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none"
          >
            {Object.entries(BITOLAS).map(([key, { label }]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
          <p className="text-xs text-slate-400 mt-1">{BITOLAS[bitola].kg_m} kg/m</p>
        </div>

        {/* Comprimento */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Comprimento (metros)
          </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Ex: 12"
            value={comprimento}
            onChange={(e) => { setComprimento(e.target.value); setResultado(null) }}
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-3 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
        </div>

        {/* Quantidade */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Quantidade (barras)
          </label>
          <input
            type="number"
            min="1"
            step="1"
            placeholder="Ex: 10"
            value={quantidade}
            onChange={(e) => { setQuantidade(e.target.value); setResultado(null) }}
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-3 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <button
          onClick={calcular}
          className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          <Calculator size={18} />
          Calcular Peso
        </button>
        <button
          onClick={resetar}
          className="sm:w-auto flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200 border border-slate-200"
        >
          <RotateCcw size={16} />
          Limpar
        </button>
      </div>

      {resultado !== null && (
        <div className="bg-orange-500/10 border border-orange-500/40 rounded-xl p-4 text-center">
          <p className="text-slate-400 text-sm mb-1">Peso total estimado</p>
          <p className="text-3xl font-black text-orange-400">
            {resultado < 1000
              ? `${resultado.toFixed(2)} kg`
              : `${(resultado / 1000).toFixed(3)} t`}
          </p>
          <p className="text-xs text-slate-500 mt-2">
            {quantidade} barra(s) × {comprimento} m × {BITOLAS[bitola].kg_m} kg/m — baseado na ABNT NBR 7480
          </p>
        </div>
      )}

      <p className="text-xs text-slate-400 mt-4 text-center">
        * Valores teóricos de referência. Para orçamento preciso, entre em contato.
      </p>
    </div>
  )
}
