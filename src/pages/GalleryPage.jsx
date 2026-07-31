import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ACCENT, ARTWORKS } from '../data'
import ImageSlot from '../components/ImageSlot'
import Footer from '../components/Footer'

const FILTER_OPTIONS = ['All', 'Rent', 'Buy', 'Loan', 'Swap']

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')

  const visible = ARTWORKS.filter(a => filter === 'All' || a.modes.includes(filter))

  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        {/* Page header */}
        <section style={{ padding: '80px 56px 48px', borderBottom: '1px solid #E4DCC8' }}>
          <div style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: ACCENT,
            marginBottom: 14,
          }}>
            The full collection
          </div>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 56,
            lineHeight: 1.05,
            margin: '0 0 20px',
            maxWidth: 760,
          }}>
            Every piece, every way to own it.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: '#4A4438', maxWidth: 560, margin: '0 0 40px' }}>
            Filter by how you'd like to bring a piece home — rent it, buy it outright,
            borrow against it, or Swap it for something already in your collection.
          </p>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {FILTER_OPTIONS.map(label => {
              const active = filter === label
              return (
                <button
                  key={label}
                  onClick={() => setFilter(label)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: `1px solid ${active ? '#1C1A17' : '#C9BFA9'}`,
                    background: active ? '#1C1A17' : 'transparent',
                    color: active ? '#F6F1E7' : '#1C1A17',
                    transition: 'all 0.15s',
                    fontFamily: "'Archivo', sans-serif",
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </section>

        {/* Grid */}
        <section style={{ padding: '56px 56px 100px' }}>
          <div style={{ fontSize: 14, color: '#4A4438', marginBottom: 32 }}>
            {visible.length} piece{visible.length !== 1 ? 's' : ''}
          </div>

          {visible.length === 0 ? (
            <div style={{ padding: '80px 0', textAlign: 'center', color: '#6B6459', fontSize: 16 }}>
              No pieces match this filter yet — check back soon.
            </div>
          ) : (
            <div
              className="gallery-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}
            >
              {visible.map(artwork => (
                <Link
                  key={artwork.slug}
                  to={`/piece/${artwork.slug}`}
                  className="gallery-card"
                  style={{ display: 'flex', flexDirection: 'column', gap: 16, color: '#1C1A17' }}
                >
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4/5',
                    borderRadius: 6,
                    boxShadow: '0 20px 44px -22px rgba(28,26,23,0.4)',
                    overflow: 'hidden',
                  }}>
                    <ImageSlot id={artwork.slug} alt={artwork.title} />
                    {/* Mode chips */}
                    <div style={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      display: 'flex',
                      gap: 6,
                      flexWrap: 'wrap',
                      maxWidth: 'calc(100% - 28px)',
                      zIndex: 1,
                      pointerEvents: 'none',
                    }}>
                      {artwork.modes.map(m => (
                        <span key={m} style={{
                          background: 'rgba(246,241,231,0.92)',
                          color: '#1C1A17',
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase',
                          padding: '5px 10px',
                          borderRadius: 999,
                        }}>
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 17, fontWeight: 600 }}>{artwork.title}</div>
                      <div style={{ fontSize: 14, color: '#6B6459' }}>{artwork.artist} · {artwork.medium}</div>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: ACCENT, whiteSpace: 'nowrap' }}>
                      {artwork.price}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 72, padding: '56px 0', borderTop: '1px solid #E4DCC8' }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, margin: '0 0 16px' }}>
              Ready to bring one home?
            </h2>
            <p style={{ color: '#4A4438', fontSize: 16, margin: '0 0 28px' }}>
              Join free — no credit card required.
            </p>
            <Link to="/#cta" className="btn-primary" style={{ fontSize: 16, padding: '16px 36px' }}>
              Get early access →
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
