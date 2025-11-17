import RecipeCard from './RecipeCard'

export default function FeaturedGrid({ title = 'Sélection du chef', recipes = [] }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-emerald-900">{title}</h2>
          <p className="text-emerald-700/80">Des idées savoureuses choisies pour vous</p>
        </div>
        <a href="#" className="text-emerald-700 hover:text-emerald-800 font-medium">Tout voir</a>
      </div>
      {recipes.length === 0 ? (
        <div className="text-center p-12 bg-emerald-50 rounded-xl text-emerald-700">Aucune recette pour le moment.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      )}
    </section>
  )
}
