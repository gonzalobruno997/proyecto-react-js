import React,{createContext, useContext, useState} from "react";
import item from "../components/Item/Item";
export const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)
const CartContextProvider = ({children}) =>{
    const [cartList, setCartList ] = useState([])
    const addToCart = (nombre, quantity, precio, id ) => {
        console.log("añadido")
        const isInCart = (id) => cartList.some((item) => item.id === id)
        if(isInCart (id)){
            return setCartList(cartList.map((producto) => (producto.id === id ? {...producto, quantity : producto.quantity + quantity}: producto) ))
        } else {
            setCartList([...cartList, { nombre, quantity, precio, id}])
        }
    }
    const emptyCart = () => setCartList ([])
    const deleteById = (id) => setCartList (cartList.filter((item) => item.id !== id ))
    const totalCount = () => cartList.reduce((total, item) => total + item.quantity, 0 )
    const totalPrice = () => cartList.reduce((total, item) => total + parseInt(item.quantity) * item.precio , 0)
    const unitsPerProducts = (id) => cartList.find((item) => item.id === id).quantity
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            totalCount,
            totalPrice,
            deleteById,
            emptyCart,
            unitsPerProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider