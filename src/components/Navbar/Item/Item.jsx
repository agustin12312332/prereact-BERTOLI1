import React from 'react'
import { Link,  } from 'react-router-dom'
        const Item = ({id,title, image,}) => {
                return (
                        
                        < div> 
                                <img src={image} alt={title} />
                                <h2>{title}</h2>
                                <Link to ={`/item/${id}`} >
                                <button>ver detalles</button>
                                </Link>
                        </div>
                )
}

export default Item