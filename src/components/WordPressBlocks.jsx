// Fake WordPress-like blocks for a familiar layout structure
export default function WordPressBlocks() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        {/* Featured Post */}
        <article className="rounded-2xl overflow-hidden border border-emerald-200 bg-white">
          <img className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop" alt="featured" />
          <div className="p-6">
            <a className="text-emerald-700 text-sm font-semibold" href="#">FEATURED</a>
            <h3 className="mt-2 text-2xl font-bold">Le plat de la semaine: Risotto aux champignons</h3>
            <p className="mt-2 text-emerald-700/80">Texture crémeuse, parfum boisé — un classique réconfortant.</p>
          </div>
        </article>

        {/* Posts list */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <article key={i} className="rounded-xl border border-emerald-200 bg-white overflow-hidden">
              <img className="w-full h-40 object-cover" src={`https://images.unsplash.com/photo-152${i}34567890-abcdef123456?q=80&w=1200&auto=format&fit=crop`} alt="post" />
              <div className="p-4">
                <h4 className="font-semibold">Idée rapide #{i}</h4>
                <p className="text-sm text-emerald-700/80">Un petit texte de type extrait comme في ووردبريس.</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Sidebar widgets */}
      <aside className="space-y-6">
        <div className="rounded-xl border border-emerald-200 bg-white p-5">
          <h5 className="font-semibold mb-3">Catégories populaires</h5>
          <ul className="space-y-2 text-sm text-emerald-700/90">
            <li>• Desserts</li>
            <li>• Plats rapides</li>
            <li>• Végétariens</li>
          </ul>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-white p-5">
          <h5 className="font-semibold mb-3">Tags</h5>
          <div className="flex flex-wrap gap-2 text-sm">
            {['#sucré','#salé','#rapide','#healthy','#four','#poêle'].map(t => (
              <span key={t} className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{t}</span>
            ))}
          </div>
        </div>
      </aside>
    </section>
  )
}
