import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:svg-icons-register'
import { ConfigProvider } from 'antd'

import App from './App.tsx'
import '@/style/reset.less'
import '@/style/common.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#a855f7',
        },
      }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
