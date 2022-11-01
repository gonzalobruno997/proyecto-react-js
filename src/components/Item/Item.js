import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
export default function item({product}) {
  return (
    <div className='item'>
        <h2>{product.nombre}</h2>
        <p>precio: ${product.precio}</p>
        <p>categoria: {product.categoria}</p>
        <Link className='btnVerMas' to={"/item/"+product.id}>ver mas</Link>
    </div>
  )
}
