export default function Newsletter() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-emerald-900">Recevez des recettes fraîches chaque semaine</h3>
          <p className="mt-2 text-emerald-700/80">Inscrivez-vous à notre newsletter gourmande. Pas de spam, que du bon goût.</p>
        </div>
        <form className="flex gap-3">
          <input type="email" placeholder="Votre email" className="flex-1 rounded-xl border border-emerald-300/70 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-300" />
          <button className="px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">S'inscrire</button>
        </form>
      </div>
    </section>
  )
}
