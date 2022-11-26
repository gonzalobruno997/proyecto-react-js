import React,{useState} from "react";
import "./ItemCount.css" 
const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)
    const decrement = () =>{
        setCount(count <= 1 ? count : count - 1)
    }
    const increment = () =>{
        setCount(count === stock ? count : count + 1)
    }
    return (
        <div className="buttonContainer">
            <button className="btnVerMas btnBorrar" onClick={decrement}>-</button>
            <button className="btnVerMas btnBorrar" onClick={() => onAdd(count)}>agregar al carrito {count}</button>
            <button className="btnVerMas btnBorrar" onClick={increment}>+</button>
        </div>
    )
}
export default ItemCount