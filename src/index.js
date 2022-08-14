import React from 'react'
import ReactDOM from 'react-dom/client'
import NavH from './components/NavH'
import NavV from './components/NavV'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <NavH />
    <NavV />
    <App />
  </React.StrictMode>,
)
