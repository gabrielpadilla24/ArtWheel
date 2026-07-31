import { ACCENT, TESTIMONIALS } from '../data'

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 4 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: ACCENT, fontSize: 14 }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section style={{ padding: '100px 56px', borderTop: '1px solid #E4DCC8', background: '#EFE8D8' }}>
      <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
        <div style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: ACCENT,
          marginBottom: 14,
        }}>
          In their words
        </div>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, margin: 0 }}>
          Collectors and artists,<br />both changing their minds.
        </h2>
      </div>

      <div
        className="testimonials-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}
      >
        {TESTIMONIALS.map(t => (
          <div
            key={t.name}
            style={{
              background: '#F6F1E7',
              borderRadius: 6,
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <Stars count={t.stars} />
            <div style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 48,
              color: ACCENT,
              lineHeight: 0.6,
            }}>
              &ldquo;
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.6, margin: 0, flex: 1 }}>{t.quote}</p>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{t.name}</div>
              <div style={{ fontSize: 13, color: '#4A4438' }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Social proof summary */}
      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 15, color: '#4A4438' }}>
          Trusted by{' '}
          <strong style={{ color: '#1C1A17' }}>1,200+ collectors</strong>
          {' '}and{' '}
          <strong style={{ color: '#1C1A17' }}>280+ artists</strong>
          {' '}across London and beyond.
        </div>
      </div>
    </section>
  )
}
