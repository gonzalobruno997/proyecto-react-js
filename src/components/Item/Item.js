import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
export default function item({product}) {
  console.log(product)
  return (
    <div className='item'>
        <h2>{product.nombre}</h2>
        <img className='imgItem' src={product.img}/>
        <p>Precio: ${product.precio}</p>
        <p>Categoria: {product.categoria}</p>
        <Link className='btnVerMas' to={"/item/"+product.id}>ver mas</Link>
    </div>
  )
}
