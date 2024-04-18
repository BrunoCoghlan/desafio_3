import './main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import PokeProvider from './context/PokeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PokeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PokeProvider>
  </BrowserRouter>
)
