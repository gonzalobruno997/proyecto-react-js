
import React from 'react'
import cartIcon from "../../img/cart-icon.svg"
import "./Cartwidget.css"
import { useCartContext } from '../../Context/CartContextProvider'
export default function Cartwidget() {
    const {totalCount} = useCartContext()
    return (
    <div className='cartIconContainer'>
        <div className='counter'>{totalCount()}</div>
        <img src={cartIcon}/>
    </div>
    )
}
