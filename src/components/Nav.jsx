import { Link, NavLink, useLocation } from 'react-router-dom'
import { ACCENT } from '../data'

export default function Nav() {
  const { pathname } = useLocation()

  function navStyle(path) {
    const active = pathname === path
    return {
      color: active ? ACCENT : '#1C1A17',
      fontSize: 15,
      fontWeight: active ? 600 : 500,
      transition: 'color 0.2s',
    }
  }

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 56px',
      background: 'rgba(246,241,231,0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #E4DCC8',
    }}>
      <Link
        to="/"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 28,
          letterSpacing: 0.5,
          color: '#1C1A17',
        }}
      >
        ArtWheel<span style={{ color: ACCENT, fontStyle: 'italic' }}>.</span>
      </Link>

      <nav className="nav-links" style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        <Link to="/#how"     style={navStyle('/')}>How it works</Link>
        <Link to="/#gallery" style={navStyle('/')}>Gallery</Link>
        <Link to="/#mission" style={navStyle('/')}>Mission</Link>
        <Link to="/#faq"     style={navStyle('/')}>FAQ</Link>
      </nav>

      <Link to="/#cta" className="btn-primary" style={{ fontSize: 14, padding: '11px 26px' }}>
        Get access
      </Link>
    </header>
  )
}
