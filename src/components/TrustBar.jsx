import { ACCENT } from '../data'

const ITEMS = [
  'Free white-glove delivery',
  'Cancel anytime, no fees',
  '72h artist payout',
  '100% insured in transit',
  'No gallery markup',
]

export default function TrustBar() {
  return (
    <div style={{
      borderTop: '1px solid #E4DCC8',
      borderBottom: '1px solid #E4DCC8',
      background: '#F0EBE0',
      padding: '18px 56px',
      overflowX: 'auto',
    }}>
      <div
        className="trust-bar"
        style={{
          display: 'flex',
          gap: 32,
          alignItems: 'center',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
          minWidth: 'max-content',
          margin: '0 auto',
        }}
      >
        {ITEMS.map((item, i) => (
          <span key={i} className="trust-bar-item" style={{ fontSize: 13, fontWeight: 600, color: '#4A4438' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
