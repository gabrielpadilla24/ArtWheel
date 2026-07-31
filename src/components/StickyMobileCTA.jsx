import { useEffect, useState } from 'react'
import { ACCENT } from '../data'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="sticky-mobile-cta">
      <a
        href="#cta"
        className="btn-primary"
        style={{ width: '100%', maxWidth: 360, textAlign: 'center', fontSize: 16 }}
      >
        Browse art from $90/mo →
      </a>
    </div>
  )
}
