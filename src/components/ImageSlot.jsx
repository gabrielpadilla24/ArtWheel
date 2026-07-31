import { useState } from 'react'

function PlaceholderIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9BFA9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="#C9BFA9" stroke="none" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}

export default function ImageSlot({ id, alt, style = {} }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: '#F0EBE0',
        border: '1.5px dashed #C9BFA9',
        borderRadius: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 20,
        ...style,
      }}>
        <PlaceholderIcon />
        <div style={{
          fontSize: 13,
          color: '#9A9080',
          textAlign: 'center',
          fontFamily: "'Archivo', sans-serif",
          lineHeight: 1.4,
        }}>
          {alt || id}
        </div>
        <div style={{
          fontSize: 10,
          color: '#C9BFA9',
          fontFamily: 'monospace',
          background: '#E8E0D0',
          padding: '3px 8px',
          borderRadius: 4,
        }}>
          /images/{id}.jpg
        </div>
      </div>
    )
  }

  return (
    <img
      src={`/images/${id}.jpg`}
      alt={alt}
      onError={() => setFailed(true)}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        ...style,
      }}
    />
  )
}
