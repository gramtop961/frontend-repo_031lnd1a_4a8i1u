import { UtensilsCrossed, Cookie, Salad, Martini, Soup } from 'lucide-react'

const categories = [
  { key: 'Tous', label: 'Tous', icon: UtensilsCrossed },
  { key: 'Plat', label: 'Plats', icon: Soup },
  { key: 'Dessert', label: 'Desserts', icon: Cookie },
  { key: 'Entrée', label: 'Entrées', icon: Salad },
  { key: 'Amuse-bouche', label: 'Amuse-bouches', icon: Martini },
]

export default function Categories({ onSelect }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Catégories</h2>
        <span className="text-sm text-gray-500">Parcourez par type de plat</span>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
        {categories.map((c) => {
          const Icon = c.icon
          return (
            <button
              key={c.key}
              onClick={() => onSelect(c.key === 'Tous' ? '' : c.key)}
              className="inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition"
            >
              <Icon size={16} />
              {c.label}
            </button>
          )
        })}
      </div>
    </section>
  )
}
