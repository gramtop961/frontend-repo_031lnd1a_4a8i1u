export default function CTA({ onAddClick }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.15),transparent_40%)]"/>
      <div className="relative max-w-6xl mx-auto px-4 py-16 rounded-3xl">
        <div className="bg-emerald-600 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold">Partagez votre recette et inspirez la communauté</h3>
            <p className="mt-2 text-white/90">Vos idées peuvent devenir les plats favoris de demain.</p>
          </div>
          <button onClick={onAddClick} className="px-6 py-3 rounded-xl bg-white text-emerald-700 font-semibold shadow hover:shadow-md hover:bg-emerald-50 transition">Publier maintenant</button>
        </div>
      </div>
    </section>
  )
}
