import { Link } from 'react-router-dom'
import { ACCENT } from '../data'
import ImageSlot from './ImageSlot'

const STATS = [
  { value: '72h', label: 'artist payout' },
  { value: '0%',  label: 'gallery markup' },
  { value: '1:1', label: 'swap ratio, no fees' },
]

export default function Mission() {
  return (
    <section
      id="mission"
      className="mission-grid"
      style={{
        padding: '120px 56px',
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 72,
        alignItems: 'center',
      }}
    >
      {/* Left: image */}
      <div className="mission-image" style={{ position: 'relative', height: 440 }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 6,
          overflow: 'hidden',
        }}>
          <ImageSlot id="mission" alt="Artist and artwork" />
        </div>
        <div style={{
          position: 'absolute',
          bottom: -28,
          left: -28,
          width: 180,
          height: 180,
          borderRadius: 6,
          background: '#1C1A17',
          zIndex: -1,
        }} />
      </div>

      {/* Right: copy */}
      <div>
        <div style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: ACCENT,
          marginBottom: 14,
        }}>
          Why ArtWheel
        </div>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 42,
          lineHeight: 1.15,
          margin: '0 0 24px',
        }}>
          We think the art world<br />owes new artists better.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: '#4A4438', margin: '0 0 20px', maxWidth: 520 }}>
          Galleries take months to pay. Collectors need years to build trust. Most emerging artists never
          get seen at all. ArtWheel rebuilds the pipeline: fair, fast payouts for artists and flexible,
          low-risk ways for collectors to discover them — rent, buy, borrow against a piece you already own,
          or Swap — exchange a piece in your collection for one that's calling to you.
        </p>

        <div style={{ display: 'flex', gap: 48, marginTop: 36, flexWrap: 'wrap' }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 38, color: ACCENT }}>
                {s.value}
              </div>
              <div style={{ fontSize: 14, color: '#4A4438' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 36 }}>
          <Link to="/gallery" className="btn-primary" style={{ fontSize: 15, padding: '14px 28px' }}>
            Start exploring →
          </Link>
        </div>
      </div>
    </section>
  )
}
