import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { SiteThemeProvider } from './theme/SiteThemeProvider'
import Navbar from './components/layout/Navbar'
import ScrollTop from './components/layout/ScrollTop'
import Portfolio from './pages/Portfolio'
import ResumePage from './pages/ResumePage'

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <SiteThemeProvider>
      <ScrollReset />
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
      <ScrollTop />
    </SiteThemeProvider>
  )
}

export default App
