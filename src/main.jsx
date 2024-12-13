import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '/src/components/header/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
