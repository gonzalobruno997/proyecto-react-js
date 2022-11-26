import React from 'react'
import { NavLink } from 'react-router-dom'
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
            <li><NavLink to="/">inicio</NavLink></li>
            <li><NavLink to="/category/pescaderia">pescaderia</NavLink></li>
            <li><NavLink to="/category/polleria">polleria</NavLink></li>
            <li><NavLink to="/category/carniceria">carniceria</NavLink></li>
        </ul>
        <NavLink className="cartLink" to="/cart"> 
            <Cartwidget/> 
        </NavLink>
    </nav>
    )
}
export default Navbar