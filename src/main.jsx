import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menus from './menus.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menus />
    <App />
  
  </React.StrictMode>,
)
