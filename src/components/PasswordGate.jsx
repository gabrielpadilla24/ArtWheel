import { useState } from 'react'
import { ACCENT } from '../data'

const SESSION_KEY = 'artwheel_auth'
const PASSWORD   = 'Artwheel'

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === '1'
  )
  const [value, setValue]   = useState('')
  const [error, setError]   = useState(false)
  const [shake, setShake]   = useState(false)

  if (unlocked) return children

  function handleSubmit(e) {
    e.preventDefault()
    if (value === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1')
      setUnlocked(true)
    } else {
      setError(true)
      setShake(true)
      setValue('')
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F6F1E7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Archivo', sans-serif",
    }}>
      <div style={{
        textAlign: 'center',
        width: '100%',
        maxWidth: 380,
        padding: '0 24px',
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 36,
          letterSpacing: 0.5,
          color: '#1C1A17',
          marginBottom: 40,
        }}>
          ArtWheel<span style={{ color: ACCENT, fontStyle: 'italic' }}>.</span>
        </div>

        <p style={{ fontSize: 15, color: '#4A4438', marginBottom: 32 }}>
          Enter the password to continue.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={value}
            onChange={e => { setValue(e.target.value); setError(false) }}
            placeholder="Password"
            autoFocus
            style={{
              width: '100%',
              padding: '14px 18px',
              fontSize: 16,
              fontFamily: "'Archivo', sans-serif",
              border: `1.5px solid ${error ? ACCENT : '#C9BFA9'}`,
              borderRadius: 8,
              background: '#fff',
              color: '#1C1A17',
              outline: 'none',
              boxSizing: 'border-box',
              marginBottom: 12,
              animation: shake ? 'gate-shake 0.4s ease' : 'none',
              transition: 'border-color 0.2s',
            }}
          />

          {error && (
            <p style={{ fontSize: 13, color: ACCENT, margin: '0 0 12px' }}>
              Incorrect password. Try again.
            </p>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              background: '#1C1A17',
              color: '#F6F1E7',
              border: 'none',
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "'Archivo', sans-serif",
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = ACCENT }}
            onMouseLeave={e => { e.target.style.background = '#1C1A17' }}
          >
            Enter
          </button>
        </form>
      </div>

      <style>{`
        @keyframes gate-shake {
          0%,100% { transform: translateX(0) }
          20%      { transform: translateX(-8px) }
          40%      { transform: translateX(8px) }
          60%      { transform: translateX(-6px) }
          80%      { transform: translateX(6px) }
        }
      `}</style>
    </div>
  )
}
