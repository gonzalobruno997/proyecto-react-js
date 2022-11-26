import React from "react";
import { useCartContext } from "../../Context/CartContextProvider";
import item from "../Item/Item";
import "./CartItem.css"

const CartItem = ({item}) => {
    const {deleteById} = useCartContext()
    console.log("hola mundo")
    return(
        
        <div className="cartItemContainer">
            <div className="cartItem">
                <div className="title">
                    <h2>{item.nombre}</h2>
                </div>
                <div className="info">
                    <p>Unidades: {item.quantity}</p>
                    <p>Precio unitario: {item.precio}</p>
                </div>
            </div>
            <div className="btnBorrarContainer">
                <button className="btnBorrar btnVerMas" onClick={() => deleteById(item.id)} >x</button>
            </div>

        </div>
    )
}
export default CartItem