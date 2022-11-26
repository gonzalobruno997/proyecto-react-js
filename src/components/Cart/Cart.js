import React from "react";
import "./Cart.css"
import { useCartContext } from "../../Context/CartContextProvider";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
const Cart = () => {
    const {cartList, emptyCart, totalPrice} = useCartContext()
    console.log(cartList)
    return(
        <div className="carrito">
            
            
            {cartList.length< 1 ? <h1 className="title">carrito vacio</h1> : 
            <div>
                <div className="title">
                    <h1>Resumen de la compra</h1>
                </div>
                <div className="cartList">
                    {cartList.map((item ) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <div>
                    <button className="btnVerMas btnBorrar" onClick={() => emptyCart()} >vaciar carrito</button>
                    <h2 className="title">Precio total: ${totalPrice()}</h2>
                    <Link className="btnVerMas" to="/checkout">Confirmar compra</Link>
                </div>
            </div>
            }
            
        </div>
    )
}
export default Cart