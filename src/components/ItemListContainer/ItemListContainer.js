import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'

export default function ItemListContainer({greeting}) {

  const productos = [
    {nombre: "salmon rosado", precio: 4900, descripcion:"importado", categoria:"pescaderia", id:0},
    {nombre: "mejillones", precio: 3300, descripcion:"importado", categoria:"pescaderia", id:1},
    {nombre: "filet de merluza", precio: 1200, descripcion:"importado", categoria:"pescaderia", id:2},
    {nombre: "camarones", precio: 3200, descripcion:"importado", categoria:"pescaderia", id:3},
    {nombre: "suprema", precio: 980, descripcion:"pollo premium", categoria:"polleria", id:4},
    {nombre: "alas", precio: 300, descripcion:"pollo premium", categoria:"polleria", id:5},
    {nombre: "pata y muslo", precio: 520, descripcion:"pollo premium", categoria:"polleria", id:6},
    {nombre: "milanesas de pollo", precio: 900, descripcion:"pollo premium", categoria:"polleria", id:7},
    {nombre: "milanesas de carne", precio: 1350, descripcion:"carne premium", categoria:"carniceria", id:8},
    {nombre: "entraña", precio: 1800, descripcion:"carne premium", categoria:"carniceria", id:9},
    {nombre: "asado", precio: 1300, descripcion:"carne premium", categoria:"carniceria", id:10},
    

  ]
    const {categoryId}=useParams()
    
    const [products, setProducts] = useState(productos)
    useEffect(()=>{
      if(categoryId != undefined ){
        setProducts(productos.filter((producto)=>producto.categoria === categoryId))
      }else{
        setProducts(productos)
      }
      
    }, [categoryId])
    
  return (
    <div>
        <h2>{greeting}</h2>
        <div className='itemList'>{products.map((producto) =><Item product={producto}/>)}</div>
        
        
    </div>
  )
}
