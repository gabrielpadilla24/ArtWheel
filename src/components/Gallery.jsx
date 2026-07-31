import { Link } from 'react-router-dom'
import { ACCENT, ARTWORKS } from '../data'
import ImageSlot from './ImageSlot'

const FEATURED = ARTWORKS.slice(0, 6)

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: '100px 56px', background: '#1C1A17' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 56,
        flexWrap: 'wrap',
        gap: 24,
      }}>
        <div>
          <div style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: ACCENT,
            marginBottom: 14,
          }}>
            Featured now
          </div>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 44,
            lineHeight: 1.1,
            margin: 0,
            color: '#F6F1E7',
          }}>
            New talent,<br />ready for your walls.
          </h2>
        </div>
        <Link
          to="/gallery"
          style={{
            color: '#F6F1E7',
            fontSize: 15,
            fontWeight: 600,
            borderBottom: `2px solid ${ACCENT}`,
            paddingBottom: 4,
          }}
        >
          View full collection →
        </Link>
      </div>

      <div
        className="gallery-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}
      >
        {FEATURED.map(artwork => (
          <Link
            key={artwork.slug}
            to={`/piece/${artwork.slug}`}
            className="gallery-card"
            style={{ display: 'flex', flexDirection: 'column', gap: 16, color: '#1C1A17' }}
          >
            <div style={{
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: 4,
              boxShadow: '0 20px 50px -20px rgba(0,0,0,0.6)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <ImageSlot id={artwork.slug} alt={artwork.title} />
              <div style={{
                position: 'absolute',
                top: 12,
                left: 12,
                background: 'rgba(246,241,231,0.92)',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.5px',
                padding: '4px 10px',
                borderRadius: 999,
                color: '#1C1A17',
                pointerEvents: 'none',
              }}>
                Available now
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: '#F6F1E7' }}>{artwork.title}</div>
                  <div style={{ fontSize: 14, color: '#A69C88' }}>{artwork.artist} · {artwork.medium}</div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: ACCENT, whiteSpace: 'nowrap' }}>
                  {artwork.price}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mid-gallery CTA */}
      <div style={{ textAlign: 'center', marginTop: 56 }}>
        <Link to="/gallery" className="btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>
          See all 340+ pieces →
        </Link>
        <div style={{ marginTop: 12, fontSize: 13, color: '#A69C88' }}>
          Free to browse · No commitment required
        </div>
      </div>
    </section>
  )
}
