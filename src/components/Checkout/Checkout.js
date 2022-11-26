import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContextProvider";
import firebaseConfig from "../../services/firebaseConfig";
import "./Checkout.css"
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
    initializeApp(firebaseConfig)
    const [load, setLoad] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [finalPrice, setFinalPrice] = useState()
    const db = getFirestore()
    const{cartList, totalPrice, emptyCart} = useContext(CartContext)
    const [buyer, setBuyer] = useState({nombre:"", email:"", telefono:""})
    const handleInputChange = (e) => {setBuyer(({...buyer,[e.target.name]:e.target.value}))}
    const generateOrder = async (data) => {
        try{
            const col = collection (db, "orders")
            const order = await addDoc(col, data)
            console.log("order", order.id)
            setOrderId(order.id)
            emptyCart()
        }catch(error){
            console.log(error)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const day = new Date
        const total = totalPrice()
        setFinalPrice(total)
        const items = cartList.map(e => {return {id:e.id, nombre:e.nombre, precio:e.precio, quantity:e.quantity} })
        const data = {day, buyer, items, total}
        generateOrder(data)
        Swal.fire({
            title: "Aguarde un segundo",
            text: "se esta generando su orden",
            icon: "info",
            button: "entendido",
            timer: 3000
        })

        
        setLoad(true)
    }
    return(
        <div className="formularioCheckoutContainer">
            {load ? orderId == "" ? <Spinner/> :
                <div className="recibo">
                    <h1>Compra finalizada con exito</h1>
                    <div className="info">
                        <h2>
                            Tu pedido
                        </h2>
                        <h3>Numero de orden: {orderId}</h3>
                        <h3>A nombre de {buyer.nombre}</h3>
                        <h3>Precio final: ${finalPrice}</h3>
                        
                    </div>
                    <Link className="btnVerMas comeback" to="/">Volver a inicio</Link>
                </div>

            
            :
            <form className="formularioCheckout" onSubmit={handleSubmit}>
                <h2>Complete el formulario</h2>
                <div className="inputContainer">
                    <label>Ingrese su nombre: </label>
                    <input  placeholder="john doe" type="text" name="nombre" value={buyer.nombre} onChange={handleInputChange} required/>
                </div>
                <div className="inputContainer">
                    <label>Ingrese su telefono: </label>
                    <input placeholder="1526374859" type="text" name="telefono" value={buyer.telefono} onChange={handleInputChange} required />
                </div>
                <div className="inputContainer">
                    <label>Ingrese su email: </label>
                    <input placeholder="abcde@gmail.com" type="email" name="email" value={buyer.email} onChange={handleInputChange} required />
                </div>
                <input className="inputSubmit btnVerMas" type="submit" value="Finalizar compra"/>
            </form>
            }
        </div>
    )
}

export default Checkout