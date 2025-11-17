import { ChefHat, Search, Plus } from 'lucide-react'

export default function Header({ onAddClick, query, setQuery, onSearch }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow">
            <ChefHat size={22} />
          </div>
          <div>
            <p className="text-xs text-emerald-700/80">Recettes Françaises</p>
            <h1 className="text-lg font-semibold bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent">Délices & Saveurs</h1>
          </div>
        </div>

        <form onSubmit={onSearch} className="flex-1 hidden md:flex items-center gap-2 bg-emerald-50 rounded-lg px-3 py-2 border border-emerald-200">
          <Search className="text-emerald-600" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une recette..."
            className="w-full bg-transparent outline-none text-sm placeholder:text-emerald-700/70 text-emerald-900"
          />
        </form>

        <button
          onClick={onAddClick}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition"
        >
          <Plus size={18} />
          <span>Nouvelle recette</span>
        </button>
      </div>
    </header>
  )
}
