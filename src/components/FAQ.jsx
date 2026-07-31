import { useState } from 'react'
import { ACCENT, FAQS } from '../data'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid #E4DCC8' }}>
      <div
        className="faq-question"
        onClick={() => setOpen(o => !o)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
        aria-expanded={open}
      >
        <div style={{ fontSize: 18, fontWeight: 600, paddingRight: 16 }}>{q}</div>
        <div style={{
          fontSize: 24,
          color: ACCENT,
          transition: 'transform 0.2s',
          transform: open ? 'rotate(45deg)' : 'none',
          flexShrink: 0,
        }}>
          +
        </div>
      </div>
      {open && (
        <p style={{
          fontSize: 15,
          lineHeight: 1.7,
          color: '#4A4438',
          margin: '0 0 28px',
          maxWidth: 640,
          animation: 'fadeIn 0.2s ease',
        }}>
          {a}
        </p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: '100px 56px', maxWidth: 820, margin: '0 auto' }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: ACCENT,
          marginBottom: 14,
        }}>
          Questions
        </div>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, margin: 0 }}>
          Before you dive in.
        </h2>
      </div>

      {FAQS.map(f => (
        <FAQItem key={f.q} q={f.q} a={f.a} />
      ))}

      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <p style={{ fontSize: 15, color: '#4A4438', margin: '0 0 12px' }}>
          Still have questions?
        </p>
        <a href="mailto:hello@artwheel.co" style={{
          fontSize: 15,
          fontWeight: 600,
          color: ACCENT,
          borderBottom: `1px solid ${ACCENT}`,
          paddingBottom: 2,
        }}>
          Chat with us →
        </a>
      </div>
    </section>
  )
}
