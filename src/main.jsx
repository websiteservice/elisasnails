import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* GitHub Pages SPA redirect fix */
if (sessionStorage.redirect) {
  const path = sessionStorage.redirect;         // e.g. /elisasnails/contact
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, null, path);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
