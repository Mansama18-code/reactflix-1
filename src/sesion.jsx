import React from 'react'
import App from './App.jsx';
import Menus from './component/menus.jsx';
import Slider_header from './component/slider_header.jsx';
import Nombre from './component/Nombre.jsx';
const sesion = () => {
  return (
    <div>
        <Menus />
        <Slider_header />
        <App />
        <Nombre />


    </div>
  )
}

export default sesion
