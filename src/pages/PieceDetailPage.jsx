import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ACCENT, ARTWORKS } from '../data'
import ImageSlot from '../components/ImageSlot'
import Footer from '../components/Footer'

const PRICE_MAP = {
  Rent:     { note: 'Monthly rental',         cta: 'Start renting'   },
  Buy:      { note: 'Buy outright',           cta: 'Buy this piece'  },
  Loan:     { note: 'Finance over 12 months', cta: 'Apply for a loan'},
  Swap: { note: 'Propose a Swap',     cta: 'Propose a swap'  },
}

function getPrice(artwork, mode) {
  if (mode === 'Swap') return '1:1 swap'
  if (mode === 'Rent') return artwork.rentPrice
  return artwork.buyPrice
}

export default function PieceDetailPage() {
  const { slug } = useParams()
  const piece = ARTWORKS.find(a => a.slug === slug)

  const [activeTab, setActiveTab] = useState(
    piece ? (piece.modes.includes('Rent') ? 'Rent' : piece.modes[0]) : 'Rent'
  )

  if (!piece) {
    return (
      <div style={{ padding: '120px 56px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, margin: '0 0 16px' }}>
          Piece not found
        </h1>
        <Link to="/gallery" style={{ fontSize: 15, fontWeight: 600 }}>← Back to the collection</Link>
      </div>
    )
  }

  const related = ARTWORKS.filter(a => a.slug !== slug).slice(0, 4)
  const activeInfo = PRICE_MAP[activeTab] || PRICE_MAP[piece.modes[0]]
  const activePrice = getPrice(piece, activeTab)

  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        {/* Back link */}
        <section style={{ padding: '48px 56px 0' }}>
          <Link to="/gallery" style={{ fontSize: 14, fontWeight: 600, color: '#6B6459' }}>
            ← Back to the collection
          </Link>
        </section>

        {/* Main detail */}
        <section
          style={{
            padding: '32px 56px 96px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 72,
            alignItems: 'start',
          }}
        >
          {/* Left: sticky image */}
          <div style={{ position: 'sticky', top: 110 }}>
            <div style={{
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: 8,
              boxShadow: '0 40px 70px -24px rgba(28,26,23,0.4)',
              overflow: 'hidden',
            }}>
              <ImageSlot id={piece.slug} alt={piece.title} />
            </div>
          </div>

          {/* Right: info + purchase */}
          <div>
            {/* Mode chips */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
              {piece.modes.map(m => (
                <span key={m} style={{
                  background: '#1C1A17',
                  color: '#F6F1E7',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  padding: '6px 12px',
                  borderRadius: 999,
                }}>
                  {m}
                </span>
              ))}
            </div>

            <h1 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 48,
              lineHeight: 1.05,
              margin: '0 0 12px',
            }}>
              {piece.title}
            </h1>
            <div style={{ fontSize: 17, color: '#4A4438', marginBottom: 28 }}>
              {piece.artist} · {piece.year} · {piece.medium}
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#4A4438', margin: '0 0 32px', maxWidth: 500 }}>
              {piece.description}
            </p>

            {/* Metadata grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 24,
              padding: '24px 0',
              borderTop: '1px solid #E4DCC8',
              borderBottom: '1px solid #E4DCC8',
              marginBottom: 32,
            }}>
              {[
                { label: 'Dimensions', value: piece.dimensions },
                { label: 'Edition',    value: piece.edition    },
                { label: 'Location',   value: piece.location   },
              ].map(m => (
                <div key={m.label}>
                  <div style={{
                    fontSize: 12,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#6B6459',
                    marginBottom: 6,
                  }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>{m.value}</div>
                </div>
              ))}
            </div>

            {/* Mode tabs */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
              {piece.modes.map(mode => {
                const active = activeTab === mode
                return (
                  <button
                    key={mode}
                    onClick={() => setActiveTab(mode)}
                    style={{
                      padding: '10px 20px',
                      borderRadius: 999,
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: 'pointer',
                      background: active ? '#1C1A17' : 'transparent',
                      color: active ? '#F6F1E7' : '#1C1A17',
                      border: `1px solid ${active ? '#1C1A17' : '#C9BFA9'}`,
                      transition: 'all 0.15s',
                      fontFamily: "'Archivo', sans-serif",
                    }}
                  >
                    {mode}
                  </button>
                )
              })}
            </div>

            {/* Price card */}
            <div style={{
              background: '#EFE8D8',
              borderRadius: 8,
              padding: 28,
              marginBottom: 32,
            }}>
              <div style={{ fontSize: 13, color: '#6B6459', marginBottom: 6 }}>
                {activeInfo.note}
              </div>
              <div style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 36,
                color: ACCENT,
                marginBottom: 20,
              }}>
                {activePrice}
              </div>
              <button
                style={{
                  width: '100%',
                  background: '#1C1A17',
                  color: '#F6F1E7',
                  padding: 16,
                  borderRadius: 999,
                  border: 'none',
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "'Archivo', sans-serif",
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => { e.target.style.background = ACCENT }}
                onMouseLeave={e => { e.target.style.background = '#1C1A17' }}
              >
                {activeInfo.cta}
              </button>
            </div>

            {/* Artist bio */}
            <div style={{ paddingTop: 8 }}>
              <div style={{
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: ACCENT,
                marginBottom: 12,
              }}>
                About the artist
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: '#4A4438', margin: 0, maxWidth: 480 }}>
                {piece.artistBio}
              </p>
            </div>
          </div>
        </section>

        {/* Related pieces */}
        <section style={{ padding: '0 56px 100px' }}>
          <div style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: ACCENT,
            marginBottom: 24,
          }}>
            More from the collection
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {related.map(r => (
              <Link
                key={r.slug}
                to={`/piece/${r.slug}`}
                className="gallery-card"
                style={{ display: 'flex', flexDirection: 'column', gap: 10, color: '#1C1A17' }}
              >
                <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 6, overflow: 'hidden' }}>
                  <ImageSlot id={r.slug} alt={r.title} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{r.title}</div>
                <div style={{ fontSize: 13, color: '#6B6459' }}>{r.artist}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
