import React, { useState } from 'react'

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount (count + 1)
    }
    const restar = () => {
        if ( count > 0){
            setCount (count - 1)
        }
    }
    
  return (
    <div>
        <p>{count}</p>
        <button onClick={restar}>-</button>
        <button>comprar</button>
        <button onClick={sumar}>+</button>
    </div>
  )
}

export default ItemCount