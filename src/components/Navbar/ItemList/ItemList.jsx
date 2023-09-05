import React from 'react'
import Item from '../Item/Item';

const ItemList = ({productos}) => {
    return (
        <>        
            {
                productos.map((producto) => { 
                    return (
                        <Item key={producto.id}
                            id = {producto.id}
                            title = {producto.title}
                            image = {producto.image}
                            price = {producto.price}
                            description = {producto.description}/>
                        )
                })
            }
        </>  
    )
};

export default ItemList