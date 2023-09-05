import React, { useState, useEffect } from 'react';
import pedirProducto from '../ItemListContainer/pedirProductos'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const {itemId} = useParams()
  useEffect(() => {
    pedirProducto(itemId) 
      .then(res => {
        console.log(res); // Verifica los datos en la consola
        setProducto(res);
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemId]);
  console.log("Product from pedirProducto:", producto);
  return (
    <div>
      {producto && <ItemDetail producto={producto} />}
    </div>
  );
};

export default ItemDetailContainer;

