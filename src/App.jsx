import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import GreenHero from './components/GreenHero'
import RecipeCard from './components/RecipeCard'
import PublishModal from './components/PublishModal'
import Categories from './components/Categories'
import FeaturedGrid from './components/FeaturedGrid'
import Newsletter from './components/Newsletter'
import CTA from './components/CTA'
import WordPressBlocks from './components/WordPressBlocks'
import Footer from './components/Footer'

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
    const url = query ? `${baseUrl}/api/recettes?q=${encodeURIComponent(query)}` : `${baseUrl}/api/recettes/hero?limit=6`
    const res = await fetch(url)
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
    <div className="min-h-screen bg-white text-emerald-900">
      <Header onAddClick={() => setOpen(true)} query={query} setQuery={setQuery} onSearch={search} />
      <GreenHero onPublish={() => setOpen(true)} />

      {/* Many sections like a WordPress home */}
      <div id="sections" className="space-y-8">
        <Categories onSelect={(cat) => { setQuery(cat); search(); }} />
        <section className="max-w-6xl mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold mb-4">Tendances d'aujourd'hui</h2>
          {recipes.length === 0 ? (
            <div className="text-center p-12 bg-emerald-50 rounded-xl text-emerald-700">Aucune recette pour le moment. Soyez le premier à partager !</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((r) => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
          )}
        </section>

        <FeaturedGrid title="Sélection du chef" recipes={recipes} />
        <WordPressBlocks />
        <Newsletter />
        <CTA onAddClick={() => setOpen(true)} />
      </div>

      <Footer />

      <PublishModal open={open} onClose={() => setOpen(false)} onSubmit={publish} />
    </div>
  )
}

export default App
