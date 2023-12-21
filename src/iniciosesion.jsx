import React, {useState} from 'react';
import './Iniciosesion.css';

import Sesion from './sesion.jsx';





const iniciosesion = () => {

  const [showComponent, setShowComponent] = useState(false);
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = (e) => {
    
    setShowComponent(true);
    setIsVisible(false);
    
    
  };
    
  

  return (
    <>
    <div>{showComponent && <Sesion />}</div>
    <div className="fondo-total" style={{ display: isVisible ? "block" : "none" }}>
    <div className='fondo-texto'  >
        <img  src="./reacflix.png"/>
        <div className='form-div'>
            <form className='form-design' >
                <label className='texto'>USUARIO O MAIL:</label><br/>
                <input placeholder="USUARIO" className='input-text'/><br/>
                <label className='texto'>CONTRASEÑA:</label><br/>
                <input type="password" placeholder="CONTRASEÑA" className='input-text' /><br/>
                <button type="button" onClick={handleClick} className='botn'>INICIAR SESION</button><br/>
                <p>PROYECTO DE MANUEL A. SAMANIEGO LAO DNI 95661987</p>
                
            </form>
        </div>
        </div>
    </div>
    </>
  );
};

export default iniciosesion;