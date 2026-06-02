import { useState } from 'react'
import dayjs from 'dayjs'
import { Plus, ChevronRight } from 'lucide-react'
import mascot from '../assets/mascot.png'
import { usePeople } from '../hooks/usePeople'
import { usePendingByPerson } from '../hooks/useCoffeeEntries'
import { Avatar } from './MembersView'
import AddDebtModal from './AddDebtModal'
import AddMemberModal from './AddMemberModal'
import PersonHistoryModal from './PersonHistoryModal'

const CURRENCY_SYMBOL = { '฿': '฿', '₭': '₭', '$': '$' }

export default function HomeView() {
  const { people } = usePeople()
  const { data: pendingPeople, loading, refetch } = usePendingByPerson()
  const [selectedPerson, setSelectedPerson] = useState(null)   // quick add (member row)
  const [historyPerson, setHistoryPerson] = useState(null)     // unpaid card
  const [showAddMember, setShowAddMember] = useState(false)

  const totalPendingThb = pendingPeople.reduce((s, p) => s + (p.totals['฿'] || 0), 0)

  return (
    <div className="bg-[#F2F2F7] min-h-screen">


      {/* Members row */}
      <div className="bg-white mt-3 px-5 py-5">
        <div className="flex items-start gap-5 overflow-x-auto pb-1 scrollbar-none">
          {/* Mascot */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <img src={mascot} alt="mascot" className="w-20 h-20 object-contain" />
          </div>
          <div className="w-px self-stretch bg-gray-100 shrink-0 my-1" />
          {/* Add button */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <button
              onClick={() => setShowAddMember(true)}
              className="w-12 h-12 rounded-full border border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-500 hover:text-gray-600 transition-colors"
            >
              <Plus size={18} />
            </button>
            <span className="text-[11px] text-gray-400">Add</span>
          </div>
          <div className="w-px self-stretch bg-gray-100 shrink-0 my-1" />
          {people.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedPerson(p)}
              className="flex flex-col items-center gap-2 shrink-0 group"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-gray-300 transition-all">
                <Avatar name={p.name} size="md" />
              </div>
              <span className="text-[11px] text-gray-500 max-w-[48px] truncate">{p.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Pending */}
      <div className="mt-3 px-5 py-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-gray-900">Unpaid</p>
          <span className="text-xs text-gray-400">{pendingPeople.length} people</span>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-300 text-sm">Loading...</div>
        ) : pendingPeople.length === 0 ? (
          <div className="bg-white rounded-2xl text-center py-8 px-4">
            <img src={mascot} alt="All cleared" className="w-32 h-32 mx-auto object-contain" />
            <p className="text-sm font-semibold text-gray-700 mt-2">All cleared!</p>
            <p className="text-xs text-gray-400 mt-1">No pending payments</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {pendingPeople.map(p => (
              <button
                key={p.name}
                onClick={() => setHistoryPerson({ name: p.name })}
                className="bg-red-50 rounded-2xl p-4 text-left active:scale-95 transition-transform border border-red-100"
              >
                <div className="mb-3">
                  <Avatar name={p.name} size="sm" />
                </div>
                <p className="font-semibold text-gray-900 text-sm truncate mb-0.5">{p.name}</p>
                <p className="text-[11px] text-red-300 mb-3">{dayjs(p.latestDate).format('D MMM YYYY')}</p>
                <div className="flex flex-col gap-0.5">
                  {Object.entries(p.totals).map(([cur, amt]) => (
                    <p key={cur} className="text-sm font-semibold text-red-500">
                      -{cur}{amt.toLocaleString()}
                    </p>
                  ))}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedPerson && (
        <AddDebtModal
          person={selectedPerson}
          onClose={() => setSelectedPerson(null)}
          onSuccess={() => { setSelectedPerson(null); refetch() }}
        />
      )}
      {historyPerson && (
        <PersonHistoryModal
          person={historyPerson}
          onClose={() => setHistoryPerson(null)}
          onUpdate={refetch}
        />
      )}
      {showAddMember && <AddMemberModal onClose={() => setShowAddMember(false)} />}
    </div>
  )
}
