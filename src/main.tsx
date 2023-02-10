import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { globalCss } from './theme'

const globalStyles = globalCss({
  'html,body,#root': {
    height: '$full',
    backgroundColor: '$mauve1',
    fontFamily: '$ui',
    color: '$mauve12',
  },
})
import './theme/tailwind.preflight.css'
import '@fontsource/lexend/variable.css'
import '@fontsource/fira-code/variable.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {globalStyles()}
    <App />
  </React.StrictMode>
)
