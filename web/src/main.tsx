import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router/router'
import { GlobalStyle } from './styles/globalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
    <GlobalStyle />
  </React.StrictMode>,
)
