import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import ColorBox from './colorPicker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorBox />
  </StrictMode>,
)
