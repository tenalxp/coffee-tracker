import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import { X, Download, Image } from 'lucide-react'
import dayjs from 'dayjs'
import mascot from '../assets/mascot.png'

// ─── Monthly Card ───────────────────────────────────────────────────────────
function MonthlyCardContent({ monthLabel, summary, members }) {
  return (
    <div
      style={{
        width: 400,
        aspectRatio: '4/5',
        background: 'linear-gradient(160deg, #1a1f2e 0%, #0f1419 100%)',
        borderRadius: 24,
        padding: 36,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: -60, right: -60,
        width: 200, height: 200,
        borderRadius: '50%',
        background: 'rgba(106,155,170,0.12)',
      }} />
      <div style={{
        position: 'absolute', bottom: -40, left: -40,
        width: 150, height: 150,
        borderRadius: '50%',
        background: 'rgba(106,155,170,0.08)',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <img src={mascot} alt="" style={{ width: 44, height: 44, objectFit: 'contain' }} />
        <div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 2, textTransform: 'uppercase' }}>Payment Tracker</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: 'white', marginTop: 1 }}>{monthLabel}</div>
        </div>
      </div>

      {/* Total */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Total</div>
        {Object.entries(summary).map(([cur, s]) => (
          <div key={cur} style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>
              {cur}{s.total.toLocaleString()}
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
              {s.pending > 0 && (
                <div style={{ fontSize: 12, color: '#ff8a80' }}>
                  Pending -{cur}{s.pending.toLocaleString()}
                </div>
              )}
              {s.paid > 0 && (
                <div style={{ fontSize: 12, color: '#69f0ae' }}>
                  Paid {cur}{s.paid.toLocaleString()}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 24 }} />

      {/* Members */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14 }}>
          Members · {members.length} people
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {members.slice(0, 8).map((m, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: 'rgba(106,155,170,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, color: '#6A9BAA',
                }}>
                  {m.name.slice(0, 2).toUpperCase()}
                </div>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{m.name}</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: m.pending > 0 ? '#ff8a80' : '#69f0ae' }}>
                {m.currency}{m.total.toLocaleString()}
              </span>
            </div>
          ))}
          {members.length > 8 && (
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: 4 }}>
              +{members.length - 8} more
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 20, fontSize: 10, color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
        Generated {dayjs().format('D MMM YYYY')}
      </div>
    </div>
  )
}

// ─── Entry Card ──────────────────────────────────────────────────────────────
function EntryCardContent({ entry }) {
  const isPending = entry.status === 'pending'
  return (
    <div
      style={{
        width: 400,
        aspectRatio: '4/5',
        background: 'linear-gradient(160deg, #1a1f2e 0%, #0f1419 100%)',
        borderRadius: 24,
        padding: 36,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: -80, right: -80,
        width: 240, height: 240, borderRadius: '50%',
        background: 'rgba(106,155,170,0.1)',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
        <img src={mascot} alt="" style={{ width: 44, height: 44, objectFit: 'contain' }} />
        <div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 2, textTransform: 'uppercase' }}>Payment Tracker</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 1 }}>
            {dayjs(entry.date).format('ddd, D MMM YYYY')}
          </div>
        </div>
      </div>

      {/* Member */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>Member</div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(106,155,170,0.15)',
          borderRadius: 12, padding: '8px 16px',
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'rgba(106,155,170,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 700, color: '#6A9BAA',
          }}>
            {entry.name.slice(0, 2).toUpperCase()}
          </div>
          <span style={{ fontSize: 16, fontWeight: 700 }}>{entry.name}</span>
        </div>
      </div>

      {/* Item */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>Item</div>
        <div style={{ fontSize: 20, fontWeight: 700 }}>{entry.menu || '—'}</div>
        {entry.description && (
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{entry.description}</div>
        )}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 32 }} />

      {/* Amount */}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>Amount</div>
        <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: -2, color: isPending ? '#ff8a80' : '#69f0ae' }}>
          {entry.currency || '฿'}{entry.price.toLocaleString()}
        </div>
        <div style={{
          display: 'inline-block', marginTop: 12,
          padding: '4px 14px', borderRadius: 20,
          background: isPending ? 'rgba(255,138,128,0.15)' : 'rgba(105,240,174,0.15)',
          color: isPending ? '#ff8a80' : '#69f0ae',
          fontSize: 12, fontWeight: 600,
        }}>
          {isPending ? 'Pending' : entry.status === 'paid_qr' ? 'Paid · QR' : 'Paid · Cash'}
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 20, fontSize: 10, color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
        Generated {dayjs().format('D MMM YYYY')}
      </div>
    </div>
  )
}

// ─── Main Modal ──────────────────────────────────────────────────────────────
export default function ShareCardModal({ type, data, onClose }) {
  const cardRef = useRef(null)
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async () => {
    if (!cardRef.current) return
    setDownloading(true)
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      })
      const link = document.createElement('a')
      link.download = type === 'monthly'
        ? `payment-${data.monthLabel.replace(' ', '-')}.jpg`
        : `payment-${data.entry.name}-${data.entry.date}.jpg`
      link.href = canvas.toDataURL('image/jpeg', 0.95)
      link.click()
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      style={{ backdropFilter: 'blur(12px)' }}>
      <div className="flex flex-col items-center gap-4 w-full max-w-sm">

        {/* Close */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image size={16} className="text-white/60" />
            <span className="text-white/80 text-sm font-medium">Preview</span>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-white/20">
            <X size={14} />
          </button>
        </div>

        {/* Card preview */}
        <div ref={cardRef} style={{ borderRadius: 24, overflow: 'hidden', width: '100%' }}>
          {type === 'monthly'
            ? <MonthlyCardContent {...data} />
            : <EntryCardContent {...data} />
          }
        </div>

        {/* Download button */}
        <button onClick={handleDownload} disabled={downloading}
          className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 rounded-2xl py-3.5 font-semibold text-sm hover:bg-gray-100 transition-colors disabled:opacity-60">
          <Download size={16} />
          {downloading ? 'Saving...' : 'Save as JPEG'}
        </button>
      </div>
    </div>
  )
}
