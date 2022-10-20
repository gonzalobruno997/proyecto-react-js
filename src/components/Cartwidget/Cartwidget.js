
import React from 'react'
import cartIcon from "../../img/cart-icon.svg"
import "./Cartwidget.css"
export default function Cartwidget() {
    return (
    <div className='cartIconContainer'>
        <a href='#'><img src={cartIcon}/></a>
    </div>
    )
}
