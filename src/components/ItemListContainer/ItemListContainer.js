import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'
import {initializeApp} from "firebase/app"
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import firebaseConfig from '../../services/firebaseConfig'
export default function ItemListContainer({greeting}) {
  initializeApp(firebaseConfig)
  const getProducts = (categoria) => {
    const database = getFirestore()
    const itemCollection = collection(database, "items")
    const q = categoria && query (
      itemCollection,
      where("categoria", "==", categoria)
    )
    
    return getDocs(q || itemCollection)
  }
  const {categoryId}=useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts (categoryId).then(
      (snapshot) => {
        setProducts(snapshot.docs.map((doc) => {return{...doc.data(), id:doc.id}}))
      }
    )
  },[categoryId]) 
  
    
  
  

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

    
  return (
    <div>
        <h2>{greeting}</h2>
        <div className='itemList'>{products.map((producto) =><Item product={producto}/>)}</div>
        
        
    </div>
  )
}
