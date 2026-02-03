import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppMuiThemeProvider from '@themes/MuiThemeProvider'
import { ThemeContextProvider } from '@context/ThemeContextProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <AppMuiThemeProvider>
        <App />
      </AppMuiThemeProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
