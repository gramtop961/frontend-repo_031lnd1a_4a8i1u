import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RecipeCard from './components/RecipeCard'
import PublishModal from './components/PublishModal'

function App() {
  const [recipes, setRecipes] = useState([])
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const baseUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])

  const fetchHero = async () => {
    const res = await fetch(`${baseUrl}/api/recettes/hero?limit=6`)
    const data = await res.json()
    setRecipes(data)
  }

  const search = async (e) => {
    e?.preventDefault()
    const res = await fetch(`${baseUrl}/api/recettes?q=${encodeURIComponent(query)}`)
    const data = await res.json()
    setRecipes(data)
  }

  const publish = async (form) => {
    const res = await fetch(`${baseUrl}/api/recettes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (!res.ok) throw new Error('Erreur de publication')
    await search()
  }

  useEffect(() => {
    fetchHero()
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header onAddClick={() => setOpen(true)} query={query} setQuery={setQuery} onSearch={search} />
      <Hero />

      <section id="tendances" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Tendances d'aujourd'hui</h2>
            <p className="text-gray-600">Découvrez ce que la communauté cuisine en ce moment</p>
          </div>
          <a href="#publier" onClick={() => setOpen(true)} className="text-pink-600 hover:text-pink-700 font-medium">Publier une recette</a>
        </div>
        {recipes.length === 0 ? (
          <div className="text-center p-12 bg-gray-50 rounded-xl">
            <p className="text-gray-600">Aucune recette pour le moment. Soyez le premier à partager !</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        )}
      </section>

      <footer className="border-t mt-10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Délices & Saveurs — Partagez vos créations</p>
          <a href="/test" className="text-gray-500 hover:text-gray-700">Tester la connexion</a>
        </div>
      </footer>

      <PublishModal open={open} onClose={() => setOpen(false)} onSubmit={publish} />
    </div>
  )
}

export default App
