export default function GreenHero({ onPublish }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">Nouveau • Communauté gourmande</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-900">
            Recettes françaises, fraîcheur et saveurs
          </h2>
          <p className="mt-4 text-emerald-700 text-lg">
            Découvrez et partagez des plats délicieux: desserts, plats, entrées et plus.
          </p>
          <div className="mt-6 flex gap-3">
            <button onClick={onPublish} className="px-5 py-3 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 shadow transition">Publier une recette</button>
            <a href="#sections" className="px-5 py-3 rounded-lg text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition">Voir les sections</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-emerald-900/5">
            <img src="https://images.unsplash.com/photo-1689754829878-c5b079ca6951?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWNldHRlc3xlbnwwfDB8fHwxNzYzMzg1MTk4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Recettes" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
