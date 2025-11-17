export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-violet-50" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-violet-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-pink-100 text-pink-700">Nouveau • Communauté gourmande</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Partagez vos recettes françaises avec style
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Inspirez et découvrez des plats délicieux: desserts, plats, entrées et plus.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#publier" className="px-5 py-3 rounded-lg text-white bg-gradient-to-r from-pink-500 to-violet-600 shadow hover:shadow-md transition">Publier une recette</a>
            <a href="#tendances" className="px-5 py-3 rounded-lg text-pink-700 bg-pink-100 hover:bg-pink-200 transition">Voir les tendances</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=1400&auto=format&fit=crop" alt="Recettes" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
