import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Menus from './menus.jsx';
import Slider_header from './slider_header.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menus />
    <Slider_header />
    <App />
  
  </React.StrictMode>,
)
