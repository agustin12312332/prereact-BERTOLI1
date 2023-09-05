import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import pedirProducto from "./pedirProductos";
import { useParams } from 'react-router-dom';
import data from "../data/productos.json";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductosPorCategoria : getAllProductos;

        asyncFunc(categoryId) 
            .then((res) => {
                setProductos(res);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [categoryId]);

    const getAllProductos = () => {
        return pedirProducto();
    };

    const getProductosPorCategoria = (categoryId) => {
        return new Promise((resolve, reject) => {
            if (!categoryId) {
                // Si categoryId es null o no está definido, muestra todos los productos.
                resolve(data);
            } else {
                const productosFiltrados = data.filter((producto) => producto.category === categoryId);
    
                if (productosFiltrados.length > 0) {
                    resolve(productosFiltrados);
                } else {
                    reject("No se encontraron productos para esta categoría.");
                }
            }
        });
    };

    return (
        <ItemList productos={productos} />
    );
};

export default ItemListContainer;
