import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.css"
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../Context/CartContextProvider'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../services/firebaseConfig'
import Swal from 'sweetalert2'

export default function ItemDetailContainer() {
    const {addToCart} = useCartContext()
    const extraerValorDelCarrito = (valorDeCarrito) => {
        const {nombre, precio, id } = item
        addToCart(nombre, valorDeCarrito, precio, id)
        const productsOfProducts = valorDeCarrito === 1 ? "producto" : "productos"
        const mensaje = `agregaste ${valorDeCarrito} ${productsOfProducts} al carrito`
        Swal.fire({
            title:"Felicidades",
            text: mensaje,
            icon: "success",
            button: "aceptar",
            timer: 3000 
        })
    }
    
    const {id}=useParams()
    const [item, setItem] = useState({})
    const getItem = (id) => {
        const db = getFirestore()
        const itemRef = doc(db, "items", id)
        return getDoc(itemRef)
    }
    useEffect(()=>{
        getItem(id).then((snapshot) => setItem({...snapshot.data(), id:snapshot.id})).catch((error)=> alert("algo salio mal"))
        console.log(item.comentarios)
    },[id])
    
console.log(item)
    const renderStar = (puntaje) => {
        let estrellas = ""
        for(let i=1; i < puntaje; i++ )
        {estrellas += <div> estrellita </div>
    }
    return estrellas
    }
    return (
        <div className='itemDetail'>
            <h1>{item.nombre}</h1>
            <h2>Categoria: {item.categoria} </h2>
            <p>Precio: ${item.precio}</p>
            <p>Descripcion: {item.descripcion}</p>
            <div>
                <img className='imgItem' src={item.img}/>
            </div>
            
            <ItemCount onAdd={extraerValorDelCarrito} stock={item.stock}/>
        </div>
    )
}
