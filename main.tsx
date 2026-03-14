import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GDDHub from './GameDesignTool'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GDDHub />
  </StrictMode>
)
