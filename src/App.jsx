import { useState } from 'react'
import HomeView from './components/HomeView'
import MonthlyView from './components/MonthlyView'
import MembersView from './components/MembersView'
import ItemsView from './components/ItemsView'
import HistoryView from './components/HistoryView'
import { Home, BarChart2, Users, Clock, Tag } from 'lucide-react'

const TABS = [
  { key: 'home',    label: 'Home',    icon: Home },
  { key: 'monthly', label: 'Monthly', icon: BarChart2 },
  { key: 'history', label: 'History', icon: Clock },
  { key: 'members', label: 'Members', icon: Users },
  { key: 'items',   label: 'Items',   icon: Tag },
]

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto" style={{ background: 'linear-gradient(160deg, #E8EEF5 0%, #EDF3F0 100%)' }}>
      <div className="flex-1 overflow-y-auto pb-20">
        {tab === 'home'    && <HomeView />}
        {tab === 'monthly' && <div className="px-5 pt-14 min-h-screen"><h2 className="text-xl font-bold mb-5" style={{ color: '#3D2B3D' }}>Monthly</h2><MonthlyView /></div>}
        {tab === 'history' && <HistoryView />}
        {tab === 'members' && <div className="px-5 pt-14 min-h-screen"><MembersView /></div>}
        {tab === 'items'   && <div className="px-5 pt-14 min-h-screen"><ItemsView /></div>}
      </div>

      {/* Bottom nav */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md flex z-40"
        style={{ background: 'rgba(238,240,245,0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.7)' }}
      >
        {TABS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className="flex-1 flex flex-col items-center gap-1 py-3 transition-all"
            style={{ color: tab === key ? '#6A9BAA' : '#8A9BAA' }}
          >
            <Icon size={19} strokeWidth={tab === key ? 2.2 : 1.6} />
            <span className={`text-[10px] ${tab === key ? 'font-bold' : 'font-normal'}`}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
