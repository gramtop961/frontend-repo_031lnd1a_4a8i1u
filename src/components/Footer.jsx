export default function Footer() {
  return (
    <footer className="mt-10 border-t border-emerald-200 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-emerald-800/90">
        <div>
          <h4 className="font-semibold mb-3 text-emerald-900">Délices & Saveurs</h4>
          <p>Le carrefour des recettes françaises: partage, découverte et inspiration.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-emerald-900">Catégories</h4>
          <ul className="space-y-2">
            <li>Desserts</li>
            <li>Entrées</li>
            <li>Plats</li>
            <li>Végétarien</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-emerald-900">Communauté</h4>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Guides</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-emerald-900">Suivez-nous</h4>
          <ul className="space-y-2">
            <li>Instagram</li>
            <li>Pinterest</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-emerald-700/80 pb-8">© {new Date().getFullYear()} Délices & Saveurs</div>
    </footer>
  )
}
