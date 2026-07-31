import { ACCENT } from '../data'
import ImageSlot from './ImageSlot'

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        padding: '96px 56px 120px',
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr minmax(0, 500px)',
        gap: 56,
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Left: copy */}
      <div className="fade-up">
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 14px',
          border: '1px solid #1C1A17',
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}>
          <span style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#22c55e',
            display: 'inline-block',
            boxShadow: '0 0 6px #22c55e88',
          }} />
          Curator-vetted · Available nationwide
        </div>

        <h1
          className="hero-h1"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 76,
            lineHeight: 1.02,
            margin: '0 0 16px',
            letterSpacing: '-0.5px',
          }}
        >
          Live with art<br />you don't have<br />to{' '}
          <em style={{ color: ACCENT, fontStyle: 'italic' }}>commit</em> to.
        </h1>

        <p style={{ fontSize: 19, lineHeight: 1.6, color: '#4A4438', maxWidth: '52ch', margin: '0' }}>
          Rent, buy, borrow against, or swap original pieces from emerging artists —
          so your walls evolve as fast as your taste does.
        </p>

        <p style={{ fontSize: 13, fontWeight: 600, color: '#4A4438', margin: '8px 0 0', letterSpacing: '0.2px' }}>
          <span style={{ color: ACCENT, fontFamily: "'Instrument Serif', serif", fontSize: 17 }}>1,200+</span>
          {' '}collectors · Curator Committee verified
        </p>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginTop: 48 }}>
          <a href="#gallery" className="btn-primary">Browse the collection</a>
          <a href="#how" style={{ fontSize: 15, fontWeight: 500, color: '#1C1A17' }}>
            See how it works →
          </a>
        </div>
      </div>

      {/* Right: single dominant painting on a wall panel */}
      <div className="hero-images" style={{ position: 'relative', height: 520 }}>

        {/* Wall panel — the physical surface the painting hangs on */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(150deg, #EBE4D9 0%, #DDD4C4 100%)',
          borderRadius: 12,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(28,26,23,0.08)',
        }} />

        {/* Primary painting — dominates the panel */}
        <div style={{
          position: 'absolute',
          top: 40,
          left: 56,
          right: 56,
          bottom: 60,
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: [
            '0 2px 8px rgba(28,26,23,0.06)',
            '0 20px 48px rgba(28,26,23,0.26)',
            '0 52px 80px -28px rgba(28,26,23,0.22)',
            'inset 0 0 0 9px rgba(246,241,231,0.85)',
          ].join(', '),
        }}>
          <ImageSlot id="hero-1" alt="Featured artwork" />
        </div>

        {/* Accent — a second piece peeking from the bottom-left corner */}
        <div style={{
          position: 'absolute',
          bottom: 24,
          left: 8,
          width: 120,
          height: 120,
          borderRadius: 3,
          overflow: 'hidden',
          transform: 'rotate(-1.5deg)',
          zIndex: 2,
          boxShadow: [
            '0 4px 12px rgba(28,26,23,0.14)',
            '0 12px 32px rgba(28,26,23,0.22)',
            'inset 0 0 0 4px rgba(246,241,231,0.82)',
          ].join(', '),
        }}>
          <ImageSlot id="hero-3" alt="Also available" />
        </div>

        {/* Subtle label card — anchors the composition at the bottom-right */}
        <div style={{
          position: 'absolute',
          bottom: 20,
          right: 16,
          background: 'rgba(246,241,231,0.92)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(28,26,23,0.1)',
          borderRadius: 8,
          padding: '10px 16px',
          minWidth: 156,
          boxShadow: '0 4px 16px rgba(28,26,23,0.1)',
        }}>
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            color: ACCENT,
            marginBottom: 4,
          }}>
            Available to rent
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#1C1A17', lineHeight: 1.3 }}>
            From <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18 }}>$850</span>/mo
          </div>
        </div>

      </div>
    </section>
  )
}
