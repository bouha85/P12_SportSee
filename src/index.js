import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

/* This is the ReactDOM method that renders the App component to the DOM. */
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
