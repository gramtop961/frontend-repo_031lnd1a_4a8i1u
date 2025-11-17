import { Clock, ChefHat } from 'lucide-react'

export default function RecipeCard({ recipe }) {
  return (
    <div className="group rounded-xl bg-white shadow-sm ring-1 ring-gray-200/60 hover:ring-pink-400/50 hover:shadow-md transition overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img src={recipe.image_url || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop'} alt={recipe.titre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{recipe.titre}</h3>
          {recipe.duree && (
            <span className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              <Clock size={14} /> {recipe.duree}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{recipe.description || 'Recette délicieuse à essayer chez vous.'}</p>
        <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
          <ChefHat size={14} />
          <span>{recipe.auteur || 'Chef Anonyme'}</span>
          {recipe.categorie && <span className="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full">{recipe.categorie}</span>}
        </div>
      </div>
    </div>
  )
}
