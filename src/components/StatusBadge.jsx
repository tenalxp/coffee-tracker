const STATUS_CONFIG = {
  pending: { label: 'Pending', color: 'bg-red-100 text-red-700 border-red-200' },
  paid_qr: { label: 'Paid (QR)', color: 'bg-green-100 text-green-700 border-green-200' },
  paid_cash: { label: 'Paid (Cash)', color: 'bg-blue-100 text-blue-700 border-blue-200' },
}

export function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.pending
  return (
    <span className={`text-xs px-2 py-1 rounded-full border font-medium ${cfg.color}`}>
      {cfg.label}
    </span>
  )
}

export function StatusSelector({ status, onChange }) {
  return (
    <select
      value={status}
      onChange={e => onChange(e.target.value)}
      className="text-xs border rounded-lg px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
    >
      <option value="pending">Pending</option>
      <option value="paid_qr">Paid (QR)</option>
      <option value="paid_cash">Paid (Cash)</option>
    </select>
  )
}
