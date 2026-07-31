import { useState } from 'react'
import { ACCENT } from '../data'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="cta" style={{ padding: '110px 56px', background: '#1C1A17', textAlign: 'center' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        {/* Social proof */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 16px',
          borderRadius: 999,
          border: '1px solid #4A4438',
          fontSize: 13,
          fontWeight: 600,
          color: '#A69C88',
          marginBottom: 24,
        }}>
          <span style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#22c55e',
            boxShadow: '0 0 6px #22c55e88',
            display: 'inline-block',
          }} />
          1,200+ collectors already inside
        </div>

        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 48,
          lineHeight: 1.1,
          color: '#F6F1E7',
          margin: '0 0 20px',
        }}>
          Your first piece is{' '}
          <em style={{ color: ACCENT, fontStyle: 'italic' }}>one swap</em> away.
        </h2>
        <p style={{ fontSize: 17, color: '#A69C88', margin: '0 0 40px' }}>
          Join the collectors and artists already rebuilding what owning art means.
          No credit card required.
        </p>

        {submitted ? (
          <div style={{
            padding: '24px 32px',
            borderRadius: 12,
            border: `1px solid ${ACCENT}44`,
            background: `${ACCENT}11`,
            color: '#F6F1E7',
            fontSize: 17,
          }}>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, marginBottom: 8 }}>
              You're in. ✓
            </div>
            We'll be in touch soon with your access link.
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="cta-flex"
              style={{
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                maxWidth: 440,
                margin: '0 auto 16px',
              }}
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  flex: 1,
                  padding: '16px 20px',
                  borderRadius: 999,
                  border: '1px solid #4A4438',
                  background: 'transparent',
                  color: '#F6F1E7',
                  fontSize: 15,
                  outline: 'none',
                  minWidth: 0,
                }}
              />
              <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap', fontSize: 15 }}>
                Get early access
              </button>
            </form>
            <div style={{ fontSize: 13, color: '#4A4438' }}>
              No credit card · Cancel anytime · Free first consultation
            </div>
          </>
        )}
      </div>
    </section>
  )
}
