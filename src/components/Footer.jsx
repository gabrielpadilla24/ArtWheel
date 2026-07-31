import { useState } from 'react'
import { ACCENT } from '../data'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer>
      <div
        className="footer-grid"
        style={{
          padding: '64px 56px 40px',
          display: 'grid',
          gridTemplateColumns: '1.2fr repeat(3,1fr)',
          gap: 40,
          borderTop: '1px solid #E4DCC8',
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, marginBottom: 16 }}>
            ArtWheel<span style={{ color: ACCENT, fontStyle: 'italic' }}>.</span>
          </div>
          <p style={{ fontSize: 14, color: '#4A4438', maxWidth: 280, lineHeight: 1.6 }}>
            Rent, buy, borrow against, or swap original art. Built for collectors and the artists who deserve better.
          </p>
        </div>

        {/* Explore */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 18 }}>
            Explore
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="#how" style={{ fontSize: 14, color: '#4A4438' }}>How it works</a>
            <a href="#gallery" style={{ fontSize: 14, color: '#4A4438' }}>Gallery</a>
            <a href="#mission" style={{ fontSize: 14, color: '#4A4438' }}>Our mission</a>
          </div>
        </div>

        {/* Company */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 18 }}>
            Company
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="#faq" style={{ fontSize: 14, color: '#4A4438' }}>FAQ</a>
            <a href="#" style={{ fontSize: 14, color: '#4A4438' }}>For artists</a>
            <a href="mailto:hello@artwheel.co" style={{ fontSize: 14, color: '#4A4438' }}>Contact</a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 18 }}>
            Stay in the loop
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1,
                minWidth: 0,
                padding: '11px 14px',
                borderRadius: 999,
                border: '1px solid #E4DCC8',
                background: '#F6F1E7',
                fontSize: 13,
              }}
            />
            <button
              onClick={() => setEmail('')}
              style={{
                background: '#1C1A17',
                color: '#F6F1E7',
                padding: '11px 18px',
                borderRadius: 999,
                border: 'none',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        padding: '20px',
        fontSize: 12,
        color: '#A69C88',
        borderTop: '1px solid #E4DCC8',
      }}>
        &copy; 2026 ArtWheel. London.
      </div>
    </footer>
  )
}
