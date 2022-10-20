import React from 'react'
import iconoPagina from "../../img/icono-de-la-pagina.svg"
import Cartwidget from '../Cartwidget/Cartwidget'
import "./Navbar.css"


function Navbar() {
    return (
    <nav>
        <div className='logoContainer'>
            
            <img className='imagenLogo' src={iconoPagina} alt="icono de la pagina"/>
            <h2>worldfish</h2>
        </div>
        <ul>
            <li><a href='#'>pescaderia</a></li>
            <li><a href='#'>polleria</a></li>
            <li><a href='#'>carniceria</a></li>
        </ul>
        <Cartwidget/>
    </nav>
    )
}
export default Navbar