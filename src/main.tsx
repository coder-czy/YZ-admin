import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:svg-icons-register'

import App from './App.tsx'
import '@/style/reset.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
