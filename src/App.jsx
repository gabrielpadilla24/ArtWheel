import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import StickyMobileCTA from './components/StickyMobileCTA'
import LandingPage from './pages/LandingPage'
import GalleryPage from './pages/GalleryPage'
import PieceDetailPage from './pages/PieceDetailPage'

// Scroll to top on route change, unless there's a hash
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/"            element={<LandingPage />} />
        <Route path="/gallery"     element={<GalleryPage />} />
        <Route path="/piece/:slug" element={<PieceDetailPage />} />
      </Routes>
      <StickyMobileCTA />
    </BrowserRouter>
  )
}
