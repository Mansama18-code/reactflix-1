import React from 'react'
import './menus.css';

const menus = () => {

 
  return (
    <div className="react-menu">
      <img className='logoflix' src="./reacflix.png"/>
      <nav className='Nave'>
        <a className='menu' >HOME</a>
        
        <a className='menu'>PELICULAS</a>
        <a className='menu'>SERIES</a>
        <a className='menu'>
          <form>
            <input placeholder='BUSCAR'></input>
          </form>
        </a>
      </nav>

    </div>

  

  );
}

export default menus;