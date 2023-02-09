import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import install from '@twind/with-react'
import twindConfig from './twind.config'

import '@fontsource/lexend/variable.css'
import '@fontsource/fira-code/variable.css'

install(twindConfig)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
