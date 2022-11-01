import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.css"

export default function ItemDetailContainer() {
    const productos = [
        {nombre: "salmon rosado", precio: 4900, descripcion:"importado", categoria:"pescaderia", id:0, comentarios:[{ text: "me encantó el producto, de muy buena calidad", puntaje:5},{text: "el mejor salmon de la zona", puntaje:5 }]},
        {nombre: "mejillones", precio: 3300, descripcion:"importado", categoria:"pescaderia", id:1, comentarios:[{ text: "me encantó el producto, de muy buena calidad", puntaje:5},{ text: "el mejor mejillon de la zona", puntaje:5} ]}, 
        {nombre: "filet de merluza", precio: 1200, descripcion:"importado", categoria:"pescaderia", id:2, comentarios:[{ text: "me encantó el producto, de muy buena calidad",puntaje:5},{text: "la mejor merluza de la zona", puntaje:5} ]},
        {nombre: "camarones", precio: 3200, descripcion:"importado", categoria:"pescaderia", id:3, comentarios:[{text: "me encantó el producto, de muy buena calidad", puntaje:5},{text: "el mejor salmon de la zona",puntaje:5 }]},
        {nombre: "suprema", precio: 980, descripcion:"pollo premium", categoria:"polleria", id:4, comentarios:[{text: "me encantó el producto, de muy buena calidad",puntaje:5},{text: "el mejor pollo de la zona", puntaje:5} ]},
        {nombre: "alas", precio: 300, descripcion:"pollo premium", categoria:"polleria", id:5, comentarios:[{text: "me encantó el producto, de muy buena calidad",puntaje:5},{text:"las mejores alitas de la zona", puntaje:5} ]},
        {nombre: "pata y muslo", precio: 520, descripcion:"pollo premium", categoria:"polleria", id:6, comentarios:[{text: "me encantó el producto, de muy buena calidad",puntaje:5},{text: "las mejores pata y muslo de la zona", puntaje:5} ]},
        {nombre: "milanesas de pollo", precio: 900, descripcion:"pollo premium", categoria:"polleria", id:7, comentarios:[{text: "me encantó el producto, de muy buena calidad",puntaje:5},{text:"las mejores milanesas de pollo de la zona",puntaje:5} ]},
        {nombre: "milanesas de carne", precio: 1350, descripcion:"carne premium", categoria:"carniceria", id:8, comentarios:[{text: "me encantó el producto, de muy buena calidad",puntaje:5},{text:"las mejores milanesas de carne de la zona",puntaje:5} ]},
        {nombre: "entraña", precio: 1800, descripcion:"carne premium", categoria:"carniceria", id:9, comentarios:[{text:"me encantó el producto, de muy buena calidad",puntaje:5},{text:"la mejor entraña de la zona",puntaje:5} ]},
        {nombre: "asado", precio: 1300, descripcion:"carne premium", categoria:"carniceria", id:10, comentarios:[{text:"me encantó el producto, de muy buena calidad",puntaje:5},{text:"el mejor asado de la zona",puntaje:5} ]},
        
    
    ]
    const {id}=useParams()
    console.log(id)
    const [item, setItem] = useState({})
    useEffect(()=>{
        setItem(productos.find((producto)=>producto.id == id)) 
        console.log(item)
    },[id])
    
console.log(item)
    return (
        <div className='itemDetail'>
            <h1>{item.nombre}</h1>
            <h2>Categoria: {item.categoria} </h2>
            <p>Precio: ${item.precio}</p>
            <p>Descripcion: {item.descripcion}</p>
        </div>
    )
}
