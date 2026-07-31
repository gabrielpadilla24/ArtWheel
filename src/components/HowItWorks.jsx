import { ACCENT, PILLARS } from '../data'

export default function HowItWorks() {
  return (
    <section id="how" style={{ padding: '100px 56px', borderTop: '1px solid #E4DCC8' }}>
      <div style={{ maxWidth: 640, margin: '0 0 64px' }}>
        <div style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: ACCENT,
          marginBottom: 14,
        }}>
          How ArtWheel works
        </div>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 44,
          lineHeight: 1.1,
          margin: 0,
        }}>
          Four ways to own art<br />on your own terms.
        </h2>
      </div>

      <div
        className="pillars-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: 1,
          background: '#E4DCC8',
          border: '1px solid #E4DCC8',
        }}
      >
        {PILLARS.map(p => (
          <div
            key={p.num}
            style={{
              background: '#F6F1E7',
              padding: '40px 32px',
              minHeight: 280,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {p.badge && (
              <div style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: ACCENT,
                color: '#F6F1E7',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                padding: '4px 10px',
                borderRadius: 999,
              }}>
                {p.badge}
              </div>
            )}
            <div style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 36,
              color: ACCENT,
              marginBottom: 24,
            }}>
              {p.num}
            </div>
            <h3 style={{ fontSize: 21, fontWeight: 700, margin: '0 0 12px' }}>{p.title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#4A4438', margin: 0, flex: 1 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
