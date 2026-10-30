import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router'

// HashRouter keeps routes working on GitHub Pages (no server rewrites needed, refresh on /resume is safe)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
