import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '/src/components/header/Header'
import Home from '/src/components/home/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>,
)
