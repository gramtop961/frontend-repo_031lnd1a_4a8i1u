import { useState } from 'react'

export default function PublishModal({ open, onClose, onSubmit }) {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    titre: '',
    description: '',
    auteur: '',
    duree: '',
    difficulte: 'Facile',
    categorie: 'Dessert',
    image_url: ''
  })

  if (!open) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.titre) return
    try {
      setLoading(true)
      await onSubmit(form)
      setLoading(false)
      onClose()
      setForm({ titre: '', description: '', auteur: '', duree: '', difficulte: 'Facile', categorie: 'Dessert', image_url: '' })
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Publier une recette</h3>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Titre</label>
              <input name="titre" value={form.titre} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" placeholder="Ex: Tarte Tatin"/>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Catégorie</label>
              <select name="categorie" value={form.categorie} onChange={handleChange} className="w-full border rounded-lg px-3 py-2">
                <option>Dessert</option>
                <option>Plat</option>
                <option>Entrée</option>
                <option>Amuse-bouche</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Durée</label>
              <input name="duree" value={form.duree} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" placeholder="30 min"/>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Difficulté</label>
              <select name="difficulte" value={form.difficulte} onChange={handleChange} className="w-full border rounded-lg px-3 py-2">
                <option>Facile</option>
                <option>Moyen</option>
                <option>Difficile</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Image (URL)</label>
            <input name="image_url" value={form.image_url} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" placeholder="https://..."/>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 h-24" placeholder="Décrivez la recette..."/>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border">Annuler</button>
            <button type="submit" disabled={loading} className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-pink-500 to-violet-600 disabled:opacity-60">
              {loading ? 'Publication...' : 'Publier'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
