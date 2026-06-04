import { useState } from 'react'
import { Plus, X, Tag, Pencil } from 'lucide-react'
import { useItems } from '../hooks/useItems'

export default function ItemsView() {
  const { items, loading, addItem, deleteItem, updateItem } = useItems()
  const [showAdd, setShowAdd] = useState(false)
  const [newName, setNewName] = useState('')
  const [saving, setSaving] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(null)
  const [editItem, setEditItem] = useState(null)
  const [editName, setEditName] = useState('')
  const [editSaving, setEditSaving] = useState(false)

  const handleAdd = async (e) => {
    e.preventDefault()
    if (!newName.trim()) return
    setSaving(true)
    await addItem(newName)
    setSaving(false)
    setNewName('')
    setShowAdd(false)
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    if (!editName.trim()) return
    setEditSaving(true)
    await updateItem(editItem.id, editName)
    setEditSaving(false)
    setEditItem(null)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-800">Item Types</h2>
          <p className="text-sm text-gray-400">{items.length} items</p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          Add Item
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading...</div>
      ) : items.length === 0 ? (
        <div className="text-center py-12 text-gray-400">No item types yet</div>
      ) : (
        <div className="flex flex-col gap-2">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border px-4 py-3 flex items-center gap-3 group">
              <div className="bg-amber-100 text-amber-600 rounded-xl p-2">
                <Tag size={16} />
              </div>
              <span className="flex-1 font-medium text-gray-700">{item.name}</span>
              <button
                onClick={() => { setEditItem(item); setEditName(item.name) }}
                className="text-gray-300 hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Pencil size={15} />
              </button>
              <button
                onClick={() => setConfirmDelete(item)}
                className="text-gray-300 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add popup */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4"
          style={{ backdropFilter: 'blur(8px)' }}>
          <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">Add New Item</h3>
              <button onClick={() => { setShowAdd(false); setNewName('') }} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                <X size={16} />
              </button>
            </div>
            <form onSubmit={handleAdd} className="flex flex-col gap-4">
              <input
                autoFocus
                type="text"
                placeholder="e.g. Food, Transport"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                className="bg-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button
                type="submit"
                disabled={saving || !newName.trim()}
                className="bg-gray-900 hover:bg-gray-700 text-white rounded-xl py-3 font-medium transition-colors disabled:opacity-40 text-sm"
              >
                {saving ? 'Saving...' : 'Add'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit popup */}
      {editItem && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4"
          style={{ backdropFilter: 'blur(8px)' }}>
          <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">Edit Item</h3>
              <button onClick={() => setEditItem(null)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                <X size={16} />
              </button>
            </div>
            <form onSubmit={handleEdit} className="flex flex-col gap-4">
              <input
                autoFocus
                type="text"
                value={editName}
                onChange={e => setEditName(e.target.value)}
                className="bg-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button
                type="submit"
                disabled={editSaving || !editName.trim()}
                className="bg-gray-900 hover:bg-gray-700 text-white rounded-xl py-3 font-medium transition-colors disabled:opacity-40 text-sm"
              >
                {editSaving ? 'Saving...' : 'Save'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4"
          style={{ backdropFilter: 'blur(8px)' }}>
          <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-sm text-center">
            <div className="bg-red-50 text-red-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Tag size={20} />
            </div>
            <h3 className="font-bold text-gray-800">Remove "{confirmDelete.name}"?</h3>
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 border border-gray-200 rounded-xl py-2.5 text-gray-600 hover:bg-gray-50 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={async () => { await deleteItem(confirmDelete.id); setConfirmDelete(null) }}
                className="flex-1 bg-red-400 hover:bg-red-500 text-white rounded-xl py-2.5 font-medium transition-colors text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
